var blogs = [
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
var blogContainer = document.getElementById("blogs");
// load up blogs from blog list
blogs.forEach(function (Blog) {
    // creating the overall blog element
    var blog = document.createElement("div");
    // adding a class to the blog div
    blog.classList.add("blog-post");
    // creating the blog div's children and assigning their contents
    var h1 = document.createElement("h1");
    h1.textContent = Blog.title;
    var img = document.createElement("img");
    img.src = Blog.image;
    img.alt = Blog.imageAlt;
    img.className = "blog-image";
    var date = document.createElement("p");
    date.className = "blog-meta";
    date.innerHTML = "<em>" + Blog.date + "</em>";
    var p = document.createElement("p");
    p.textContent = Blog.description;
    var link = document.createElement("a");
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
var blogTitle = document.getElementById("blog-title");
var blogDate = document.getElementById("blog-date");
var blogImage = document.getElementById("blog-image");
if (blogTitle != null && blogDate != null && blogImage != null) {
    // Get the current page slug from the URL
    var path = window.location.pathname;
    var filename = path.substring(path.lastIndexOf("/") + 1);
    var slug = filename.replace(".html", "");
    // Find the blog post by slug
    var currentBlog = null;
    for (var i = 0; i < blogs.length; i++) {
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
