const dateFormatter = (date) => {
  return date.toISOString().slice(0, 10);
};

const CDN_URL = `https://12beaau3.apicdn.sanity.io/v${dateFormatter(
  new Date()
)}/data/query/production`;

export async function q(query) {
  let result = await fetch(`${CDN_URL}?query=${query}`, {
    cache: "force-cache",
  });
  result = await result.json();
  console.log("result", result);
  return result.result;
}

export async function getPosts() {
  const posts = await q('*[_type == "post"]');
  return posts;
}
