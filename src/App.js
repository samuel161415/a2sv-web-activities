
import Card from "./components/Card";
import React,{useState,useEffect} from "react";


function App() {

  // States to store different variables
  
    const [title,setTitle] = useState('Design Liberaized design state management')
    const [img,setImg] = useState('https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=600')
    const [author,setAuthor] = useState('Samuel Negalign')
    const [summary,setSummary] = useState('This is a2sv test react app. It has card compenents')
    const [date,setDate] = useState('Jan 10 2023')

    // this are used to handle number of likes 
    const  [likes1, setLikes1] = useState(0)
    const  [likes2, setLikes2] = useState(0)

    // this are used to handle comments of each blog posts
    const [comment1, setComment1] = useState([])
    const [comment2, setComment2] = useState([])



  //  I used tailwind css for styling
  return (
    <div class = 'h-screen p-4 mx-4 my-6  shadow overflow-auto'>
      <h1 class = 'ml-5 my-4 font-bold'>Related Blogs</h1>
      <div class = 'flex justify-between'>
        <Card title={title} img={img} author={author} summary = {summary } date = {date} likes = {likes1} setLikes = {setLikes1} comment = {comment1} setComment = {setComment1}/>
        <Card title={title} img={img} author={author} summary = {summary } date = {date} likes = {likes2} setLikes = {setLikes2} comment = {comment2} setComment = {setComment2}/>
      </div>
      
    </div>
  );
}

export default App;
