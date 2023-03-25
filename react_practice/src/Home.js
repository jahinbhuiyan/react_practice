import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'My typing speed', body:'is 85wpm', author:'ZAHIN', id:1},
        {title:'Practice', body:'makes perfect', author:'Fariya', id:2},
        {title:'I need to stop', body:'using your name', author:'death', id:3}

    ]);

    return ( 
        <div className="home">
          <BlogList blogs={blogs} title="All blogs!!!!" />
          <BlogList blogs={blogs.filter((blog) => blog.author === 'ZAHIN')} title="I AM VERY SAD" />
        </div>
     );
}
 
export default Home;