import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";



const News = ({ category }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page ,setPage]=useState(null)
  


  async function fetchData() {
    setLoading(true)
    try {
      let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=8d73b3ff47854e758eec5462b1be7d51`);

        let data = await res.json();
      setData(data.articles)

      setLoading(false)
    }
    catch (error) {
      alert("Error fetching data");
    }

    }
  
    useEffect(() => {
        fetchData()
    },[page,category])
    

  return <div className=" flex flex-col  justify-center items-center bg-black text-white " >
    {
      loading ? (
        <div className=" flex justify-center items-center h-screen "><Loader /> </div>) :
        (<div className=" flex flex-col  items-center bg-black text-white ">
          <h1 className=" text-[20px] lg:text-[30px] mt-4 ">Top {category} Headlines</h1>
          
          <div className=" flex flex-wrap justify-center items-center p-5 lg:pb-10 bg-black gap-5">
              {data.map((article, index) => (
                  <NewsItem key={index} article={article} />
              ))}
          </div>
          <div className=" flex justify-items-center gap-40  py-4" >
            {
              page === 2 ?
                <button onClick={()=>{setPage(1)}} className="bg-blue-900 rounded-md px-2">Previous </button> :
                <button onClick={()=>{setPage(2)}} className="bg-blue-900 rounded-md px-2" >Next</button>
            }
            
            
          </div>
              
       
          
      </div>)
      

    }
    
    
  </div>;
};

export default News;
