
import BlogList from './BlogList';
import useFetch from "./useFtech";
const Home = () => { 
    const {data: blogs , isPending , error } = useFetch('http://localhost:8000/blogs');
  
    
    return (
        <div className="home">
          { error && <div>{error}</div>}
          {isPending && <div>loading....</div>}
          {blogs && <BlogList blogs={blogs} title="ALl BLogs!" /> } 

        </div>
      );
}
  
export default Home;