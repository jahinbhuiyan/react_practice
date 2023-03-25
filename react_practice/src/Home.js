import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'My typing speed', body:'is 85wpm', author:'ZAHIN', id:1},
        {title:'Practice', body:'makes perfect', author:'Fariya', id:2},
        {title:'I need to stop', body:'using your name', author:'death', id:3}

    ]);

    const [name, setName] = useState('MARIO')

    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id )  
       setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log("running use EFFECT")
    }, [name]);



    return ( 
        <div className="home">
          <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
          <button onClick={()=> setName('Luigi')}>Change Name</button>
          <p>{name}</p>
        </div>
     );
}
 
export default Home;