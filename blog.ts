type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Joe",
    date: "Mama",
    description: "06-19-2000",
    image: "images/blog/sample.jpg",
    imageAlt: "This is just a sample image",
    slug: "joe",
  },
  {
    title: "Chris",
    date: "Breezy",
    description: "06-20-2000",
    image: "images/blog/sample2.jpg",
    imageAlt: "This is just a sample image",
    slug: "chris",
  },
];

// accessing and storing blog container div
const blogContainer = document.getElementById("blogs");

// load up blogs from blog list
blogs.forEach((Blog) => {
  // creating the overall blog element
  const blog = document.createElement("div");

  // adding a class to the blog div
  blog.classList.add("blog-post");

  // creating the blog div's children and assigning their contents
  const h1 = document.createElement("h1");
  h1.textContent = Blog.title;

  const img = document.createElement("img");
  img.src = Blog.image;
  img.alt = Blog.imageAlt;
  img.className = "blog-image";

  const date = document.createElement("p");
  date.className = "blog-meta";
  date.innerHTML = "<em>" + Blog.date + "</em>";

  const p = document.createElement("p");
  p.textContent = Blog.description;

  const link = document.createElement("a");
  link.href = "blogs/" + Blog.slug + ".html";
  link.textContent = "Read More →";

  // appending as children to the blog div
  blog.appendChild(img);
  blog.appendChild(h1);
  blog.appendChild(date);
  blog.appendChild(p);
  blog.appendChild(link);

  // appending the blog div to the container div
  // null checking to avoid Ts error
  if (blogContainer != null) {
    blogContainer.appendChild(blog);
  }
});

// INDIVIDUAL BLOG PAGE: Display single blog content
const blogTitle = document.getElementById("blog-title");
const blogDate = document.getElementById("blog-date");
const blogImage = document.getElementById("blog-image") as HTMLImageElement;

if (blogTitle != null && blogDate != null && blogImage != null) {
  // Get the current page slug from the URL
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf("/") + 1);
  const slug = filename.replace(".html", "");

  // Find the blog post by slug
  let currentBlog: Blog | null = null;
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].slug === slug) {
      currentBlog = blogs[i];
      break;
    }
  }

  if (currentBlog != null) {
    // Update page title
    document.title = currentBlog.title + " - Victor Wu's Blog";

    // Update blog title
    blogTitle.textContent = currentBlog.title;

    // Update blog date
    blogDate.innerHTML = "<em>Posted on: " + currentBlog.date + "</em>";

    // Update blog image
    blogImage.src = "../" + currentBlog.image;
    blogImage.alt = currentBlog.imageAlt;
  }
}
