import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const deleteHandel = (id)=>{
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/MohdAnas07/blogData/db')
        .then(res => res.json())
        .then(data => console.log(data))
    })

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!" deleteHandel={deleteHandel}/>

            {/* <BlogList blogs={ blogs.filter((blog)=> blog.author === 'mario' ) } title="Mario's Blogs!"/> */}

        </div>
    );
}

export default Home;