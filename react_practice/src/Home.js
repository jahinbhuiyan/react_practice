import { useState } from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'My typing speed', body:'is 85wpm', author:'ZAHIN', id:1},
        {title:'Practice', body:'makes perfect', author:'Fariya', id:2},
        {title:'I need to stop', body:'using your name', author:'death', id:3}

    ]);

    return ( 
        <div className="home">
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
          ))}
        </div>
     );
}
 
export default Home;