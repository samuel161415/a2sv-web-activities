import React, { useState, useEffect } from "react";
// import { datas } from '../helper/card';
import img from "../asset/img.png";
import mock from "../mock/mock.json";
import { useDispatch, useSelector } from "react-redux";
// import { likeStory } from '../reducers/likesSlice';
import { likeStory } from "../reducers/likesSlice";






const Card = (props) => {
  const fetchDataFromAPI = () => {
    return new Promise((resolve, reject) => {
      // Simulate an API call with a delay
      setTimeout(() => {
        resolve(mock);
      }, 1000);
    });
  };


  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);

  const handleLikeClick = (id) => {
    console.log('what is the problem');
     dispatch(likeStory(id));
  };

  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulate fetching data from an API
    fetchDataFromAPI()
      .then((apiData) => {
        setData(apiData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {datas.map((data,idx) => (
           <div className="bg-white m-auto py-6 w-3/4 md:w-3/5 lg:w-2/3 rounded-lg shadow-md flex flex-col md:flex-row h-[70vh] my-10">
           {/* Left Part (Image and Text) */}
           <div className="w-full md:w-1/3 relative mx-4 md:mx-8 my-6 flex flex-col md:flex-row overflow-hidden">
             <img
               src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIgcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80'}
               alt='amm'
               className="w-full h-full rounded-lg"
             />
             <div className="absolute bottom-0 left-0 p-2 text-white overflow-hidden">
               <p className="text-lg font-bold mb-1 bg-none">{data.name}</p>
               <p className="text-sm bg-none">{data.title}</p>
               <p className="text-sm bg-none">{data.work}</p>
             </div>
           </div>
         
           {/* Right Part (Content) */}
           <div className="w-full md:w-2/3 flex flex-col justify-center px-4 md:px-6">
             <h1 className="text-2xl font-bold mb-4 text-left">
               {data.a2sv_exp}
             </h1>
             <p className="text-gray-600 text-sm mb-4 text-left">
               {data.a2sv_desc}
             </p>
         
             <h1 className="text-2xl font-bold mb-4 text-left">
               {data.current}
             </h1>
             <p className="text-gray-600 text-sm mb-4 text-left">
               {data.current_desc}
             </p>
         
             <h1 className="text-2xl font-bold mb-4 text-left">
               {data.impact}
             </h1>
             <p className="text-gray-600 text-sm mb-4 text-left">
               {data.impact_desc}
             </p>
             <div className="flex items-center">
               <button className='bg-blue-500 rounded p-3 w-1/4' onClick={() => handleLikeClick(data.storyId)}>
                 Like
               </button>
               <p className='text-gray-600 text-sm mb-4 ml-2'>Likes: {likes[data.storyId] || 0}</p>
             </div>
           </div>
         </div>
         
          ))}
        </>
      )}
    </>
  );
};

export default Card;
