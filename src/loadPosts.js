const context = require.context('./components/techblog/blogs', true, /\.md$/);

const slugs = context.keys().map(key => key.slice(2, -3));

const posts = context.keys().map(key => {
  const slug = key.slice(2, -3);
  const post = context(key);
  return { [slug]: post.default };
}).reduce((acc, cur) => Object.assign(acc, cur), {});

export { slugs, posts };