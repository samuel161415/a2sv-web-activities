
import Card from "./components/Card";
import React,{useState,useEffect} from "react";


function App() {
   const [title,setTitle] = useState('Design Liberaized design state management')
   const [img,setImg] = useState('https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=600')
   const [author,setAuthor] = useState('Samuel Negalign')
   const [summary,setSummary] = useState('This is a2sv test react app. It has card compenents')
   const [date,setDate] = useState('Jan 10 2023')

  return (
    <div class = 'h-screen p-4 mx-4 my-6  shadow '>
      <h1 class = 'ml-5 my-4 font-bold'>Related Blogs</h1>
      <div class = 'flex justify-between'>
        <Card title={title} img={img} author={author} summary = {summary } date = {date}/>
        <Card title={title} img={img} author={author} summary = {summary } date = {date}/>
      </div>
      
    </div>
  );
}

export default App;
