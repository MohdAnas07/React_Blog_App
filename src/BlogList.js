const BlogList = ({ blogs, title, deleteHandel}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <button onClick={()=> deleteHandel(blog.id)}>delete blog</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;