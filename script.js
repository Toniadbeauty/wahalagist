// Fake blog posts (you can fetch real posts from an API later)
const posts = [
  {
    title: "🌍 World News: Leaders Meet for Global Summit",
    content: "Today, world leaders gathered to discuss climate change, technology, and global peace..."
  },
  {
    title: "🔥 Celebrity Gist: Star Spotted in Lagos",
    content: "Fans went crazy when a Hollywood star was seen enjoying Nigerian Jollof rice in Lagos..."
  },
  {
    title: "💻 Tech Update: New Smartphone Released",
    content: "The latest smartphone promises faster speed, better cameras, and AI-powered features..."
  }
];

// Display posts
const blogContainer = document.getElementById("blog-container");

posts.forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
  blogContainer.appendChild(postDiv);
});
