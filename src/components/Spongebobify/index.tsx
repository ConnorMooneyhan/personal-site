import { useState } from "react";

const Spongebobify = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="text go here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="Spongebobify"
      />
    </div>
  );
};

export default Spongebobify;
