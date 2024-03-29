const fs = require("fs");
const matter = require("gray-matter");

const files = fs.readdirSync("./src/components/techblog/blogs");

const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./src/components/techblog/blogs/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content
    };
});

fs.writeFileSync('./src/components/techblog/posts.json', JSON.stringify(posts, null, 2));



const projectFiles = fs.readdirSync("./src/components/projectsBlog/projectBlogs");

const projectPosts = projectFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./src/components/projectsBlog/projectBlogs/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content
    };
});

fs.writeFileSync('./src/components/projectsBlog/projectPosts.json', JSON.stringify(projectPosts, null, 2));