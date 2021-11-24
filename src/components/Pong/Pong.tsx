import React, {  useEffect, useRef, useState } from 'react';

const Pong = () => {
  let [startScreenDisplayed, setStartScreenDisplayed] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const input1Ref = useRef<HTMLInputElement | null>(null);
  const input2Ref = useRef<HTMLInputElement | null>(null);

  const canvasWidth = 525;
  const canvasHeight = 350;

  useEffect(() => {
    canvasRef.current!.focus();
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext('2d');
    ctxRef.current = ctx;
    displayStartScreen();
  }, []);

  const paddleWidth = canvasWidth / 48;
  const paddleHeight = canvasHeight / 3.2;
  const ballRadius = 10;
  const paddleSpeed = 5;
  const ballSpeed = 6;
  const goalScore = 3;

  // 'Stateful' variables that shouldn't toggle a re-render
  let wPressed = useRef(false);
  let sPressed = useRef(false);
  let upPressed = useRef(false);
  let downPressed = useRef(false);
  let running = useRef(true);
  let winner = useRef<string | undefined>(undefined);
  let player1Name = useRef('Player 1');
  let player2Name = useRef('Player 2');

  // Defines class for the two paddles
  class Paddle {
    initialX: number;
    x: number;
    initialY: number;
    y: number;
    width: number;
    height: number;
    dy: number;
    constructor(x: number, y: number) {
      this.initialX = x;
      this.x = x;
      this.initialY = y;
      this.y = y;
      this.width = paddleWidth;
      this.height = paddleHeight;
      this.dy = 0;
    }

    initialize() {
      this.x = this.initialX;
      this.y = this.initialY;
    }

    update(up: boolean, down: boolean) {
      if (up && this.y + this.dy > 0) {
        this.dy = -paddleSpeed;
      } else if (down && this.y + this.dy < canvasHeight - this.height) {
        this.dy = paddleSpeed;
      } else {
        this.dy = 0;
      }

      this.y += this.dy;
    }

    draw() {
      ctxRef.current!.fillStyle = 'white';
      ctxRef.current!.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  // Defines class for scoreboards shown in upper right and upper left
  class Scoreboard {
    x: number;
    y: number;
    score: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.score = 0;
    }

    initialize() {
      this.score = 0;
    }

    draw(){
      ctxRef.current!.font = '24px serif';
      ctxRef.current!.textAlign = 'center';
      ctxRef.current!.fillText(this.score.toString(), this.x, this.y);
    }
  }

  // Defines class for ball(s)
  // Note: there is classically one ball, but having a class is both
  // a) consistent with the style of this app, and
  // b) permissive of the possibility of extra balls
  class Ball {
    x: number;
    y: number;
    radius: number;
    dx: number;
    dy: number;
    constructor() {
      this.x = canvasWidth / 2;
      this.y = canvasHeight / 2;
      this.radius = ballRadius;
      this.dx = Math.random() < 0.5 ? -ballSpeed : ballSpeed;
      this.dy = -ballSpeed;
    }

    initialize() {
      running.current = true;
      this.x = canvasWidth / 2;
      this.y = canvasHeight / 2;
      this.dx = Math.random() < 0.5 ? -ballSpeed : ballSpeed;
      this.dy = -ballSpeed;
    }

    update() {
      // Detect score
      if (this.x + this.dx > canvasWidth - this.radius || this.x + this.dx < this.radius) {
        if (this.x + this.dx > canvasWidth - this.radius) {
          leftScoreboard.score++;
          this.dx = canvasWidth - this.radius - this.x;
          this.dy = canvasWidth - this.radius - this.x;
        } else {
          rightScoreboard.score++;
          this.dx = -(this.x - this.radius);
          this.dy = -(this.x - this.radius);
        }

        this.x += this.dx;
        this.y += this.dy;

        ctxRef.current!.clearRect(0, 0, canvasWidth, canvasHeight);

        draw();

        if (leftScoreboard.score < goalScore && rightScoreboard.score < goalScore) {
          running.current = false;
          setTimeout(this.initialize.bind(this), 1000);
          setTimeout(gameLoop, 1000);
        } else {
          endGame();
          return;
        }
      }
      
      // Detects collisions
      // Collides with top and bottom
      if (this.y + this.dy > canvasHeight - this.radius || this.y + this.dy < this.radius) {
        this.dy = -this.dy;
      }
      // Collides with fronts of paddles
      if (this.x + this.dx - this.radius < leftPaddle.width && this.y + this.dy > leftPaddle.y && this.y + this.dy < leftPaddle.y + leftPaddle.height) {
        if (this.x > leftPaddle.width) {
          this.dx = -this.dx;
        } else {
          this.dy = -this.dy;
        }
      } else if (this.x + this.dx + this.radius > rightPaddle.x && this.y + this.dy > rightPaddle.y && this.y + this.dy < rightPaddle.y + rightPaddle.height) {
        if (this.x < canvasWidth - rightPaddle.width) {
          this.dx = -this.dx;
        } else {
          this.dy = -this.dy;
        }
      }

      // Increments position
      this.x += this.dx;
      this.y += this.dy;
    }

    draw() {
      ctxRef.current!.beginPath();
      ctxRef.current!.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctxRef.current!.fillStyle = 'white';
      ctxRef.current!.fill();
      ctxRef.current!.closePath();
    }
  }

  // Object initializations
  const leftPaddle = new Paddle(0, (canvasHeight - paddleHeight) / 2);
  const rightPaddle = new Paddle(canvasWidth - paddleWidth, (canvasHeight - paddleHeight) / 2);
  const leftScoreboard = new Scoreboard(18, 29);
  const rightScoreboard = new Scoreboard(canvasWidth - 18, 29);
  const ball1 = new Ball();

  // Initalizes game elements
  function initialize() {
    leftPaddle.initialize();
    rightPaddle.initialize();
    leftScoreboard.initialize();
    rightScoreboard.initialize();
    ball1.initialize();
  }

  // Handler for starting game with space bar
  function startWithSpace(e: KeyboardEvent) {
    if (e.key === " ") {
      if (startScreenDisplayed) {
        if (input1Ref.current?.value) {
          player1Name.current = input1Ref.current!.value;
        }
        if (input2Ref.current?.value) {
          player2Name.current = input2Ref.current!.value;
        }
      }
      running.current = true;
      setStartScreenDisplayed(false);
      initialize();
      ctxRef.current!.clearRect(0, 0, canvasWidth, canvasHeight);
      draw();
      gameLoop();
    } else {
      canvasRef.current!.addEventListener('keydown', startWithSpace, {once:true});
      return;
    }
  }

  // Displays start screen
  function displayStartScreen() {
    let fontSize = 30;
    ctxRef.current!.clearRect(0, 0, canvasWidth, canvasHeight);

    ctxRef.current!.fillStyle = 'hsla(0, 0%, 80%, .8)';
    ctxRef.current!.textAlign = 'center';
    ctxRef.current!.font = `${fontSize}px serif`;
    ctxRef.current!.fillText('Pong', canvasWidth / 2, canvasHeight / 2 - fontSize * 1.5);
    ctxRef.current!.textAlign = 'right';
    ctxRef.current!.fillText('Player 1:', canvasWidth / 2, canvasHeight / 2 - fontSize * .5);
    ctxRef.current!.fillText('Player 2:', canvasWidth / 2, canvasHeight / 2 + fontSize * .5);
    ctxRef.current!.textAlign = 'center';
    ctxRef.current!.fillText('Press spacebar to start game', canvasWidth / 2, canvasHeight / 2 + fontSize * 1.5);

    canvasRef.current!.addEventListener('keydown', startWithSpace, {once:true});
  }
  
  // Updates game state
  function update() {
    leftPaddle.update(wPressed.current, sPressed.current);
    rightPaddle.update(upPressed.current, downPressed.current);
    ball1.update();
  }

  // Displays winner and allows for re-play with space bar
  function displayWinner() {
    canvasRef.current!.addEventListener('keydown', startWithSpace, {once:true});
    ctxRef.current!.fillStyle = 'hsla(0, 0%, 80%, .8)';
    ctxRef.current!.fillRect(0, 0, canvasWidth, canvasHeight);
    ctxRef.current!.fillStyle = 'black';
    ctxRef.current!.textAlign = 'center';
    ctxRef.current!.fillText(`${winner.current} wins!`, canvasWidth / 2, canvasHeight / 2);
    ctxRef.current!.font = '16pt serif';
    ctxRef.current!.fillText('(press spacebar for rematch)', canvasWidth / 2, canvasHeight / 2 + 30);
  }

  // Ends the game
  function endGame() {
    running.current = false;
    if (leftScoreboard.score >= goalScore) {
      winner.current = player1Name.current;
    } else {
      winner.current = player2Name.current;
    }
    displayWinner();
  }

  // Draw all game objects
  function draw() {
    leftPaddle.draw();
    rightPaddle.draw();
    ball1.draw();
    leftScoreboard.draw();
    rightScoreboard.draw();
  }

  // Run entire game loop: update state, clear canvas, draw frame
  function gameLoop() {
    update();

    if (!running.current) {
      return;
    }

    ctxRef.current!.clearRect(0, 0, canvasWidth, canvasHeight);

    draw();

    requestAnimationFrame(gameLoop);
  }

  // Detects keydown events
  const keyDownHandler = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (e.key === 'w') {
      wPressed.current = true;
    } else if (e.key === 's') {
      sPressed.current = true;
    } else if (e.key === 'ArrowUp') {
      upPressed.current = true;
    } else if (e.key === 'ArrowDown') {
      downPressed.current = true;
    }
  }

  // Detects keyup events
  const keyUpHandler = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (e.key === 'w') {
      wPressed.current = false;
    } else if (e.key === 's') {
      sPressed.current = false;
    } else if (e.key === 'ArrowUp') {
      upPressed.current = false;
    } else if (e.key === 'ArrowDown') {
      downPressed.current = false;
    }
  }
  
  return (
    <div className="Pong">
      <canvas 
        id="myCanvas" 
        width={canvasWidth} 
        height={canvasHeight}
        tabIndex={1}
        ref={canvasRef}
        onKeyDown={keyDownHandler}
        onKeyUp={keyUpHandler}
      />
      {startScreenDisplayed && [
      <input 
        type="text" 
        id="player-1-input" 
        className="player-input" 
        key="1"
        ref={input1Ref}
        style={{ top: canvasHeight / 2 - 30 }}
      />,
      <input 
        type="text" 
        id="player-2-input" 
        className="player-input" 
        key="2" 
        ref={input2Ref}
        style={{ top: canvasHeight / 2 }}
      />
      ]}
      <div className="instructions">
        <div className="instructions__player-1">
          <h2>Player 1</h2>
          <ul>
            <li>W - Move left paddle up</li>
            <li>S - Move left paddle down</li>
          </ul>
        </div>
        <div className="instructions__player-2">
          <h2>Player 2</h2>
          <ul>
            <li>▲ - Move right paddle up</li>
            <li>▼ - Move right paddle down</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pong;