import React from "react";

const NewsItem = ({ article }) => {
//   const source = article.name;
  const { title, url, description, urlToImage, publishedAt, author } = article;
  console.log(author);

  return (
    <div className="relative mainNew h-[30rem] bg-white flex rounded-md text-black p-3 py-4 mt-2 justify-between items-center w-[95%]  lg:w-[30%] flex-col  border-red-500">
      <span className="smthing text-white bg-red-800 p-1 rounded-md absolute right-1 mb-5 -top-5"> {author?author:'The Hindu'} </span>
      <h2 className="title leading-4 lg:leading-5 font-bold text-blue-600 "> {title
          ? title.length < 50
            ? title
            : title.substring(0, 100)+'...'
          : 'title is not available'} </h2> 
      <div className="immg w-[98%] ">
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://media.cnn.com/api/v1/images/stellar/prod/230422161441-05-wrexham-boreham-wood-042223-restricted.jpg?c=16x9&q=w_800,c_fill"
          }
          alt="pictures not found"
        />
      </div>
      <p className="description">
        
        {description
          ? description.length < 50
            ? description
            : description.substring(0, 100)+'...'
          : 'Description is not available'}
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-10" >
        <p className="publistime text-blue-800 font-bold "> Published At: <span className=" text-black "> {publishedAt.substring(0, 10)} </span></p>
        <button className="publistime bg-slate-500 hover:bg-black p-1 rounded-md mb-1 ">
          
          <a className="publistime text-white" href={url} target="-">
            Read more...
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
