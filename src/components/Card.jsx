import React, { useState } from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Margin } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';

// Card component

function Card({title,img, author , summary,date, likes, setLikes, comment, setComment}) {
    
    // to set the visiblity of comments
    const [visible, setVisible] = useState(false)

    // to hold temporary comments
    const [c_comment,setCurrentComment] = useState('')

    // This two methods are used to handle pushing new commnets to existing comment array.
    // first one is using button second one handles enter action key
    const handleComment = () => {
        c_comment && setComment([...comment, c_comment]);
        setCurrentComment('')
      };

    const handleEnter = (e) =>{
       if(e.key === 'Enter' && c_comment) {
        setComment([...comment, c_comment]);
        setCurrentComment('')

       }
    }
    

  return (
    <div class = 'flex flex-col shadow-lg rounded h-4/5 mx-6 my-4 w-1/2 text-gray-500 m-3 overflow-auto'>
       {img && <img src={img} class = ' rounded-t-lg h-[350px]'/>} 
        <div class = 'flex flex-col p-4 '>
            {title && <h1 class = 'font-bold h-1/2 m-2'>{title}</h1>}
            {author && date && <section class = 'm-2 flex' ><span class = 'border-r-2 pr-2'>< AccountCircleIcon style={{height :'30px',width : '30px'}}/> {author}</span> <p class = 'pl-2'>{date}</p></section>
            }
            <section class = 'flex m-2'>
                <button class = 'rounded-lg bg-gray-300 mr-4 p-2'>UI/UX</button>
                <button class = 'rounded-lg bg-gray-300 mx-4 p-2'>Development</button>
            </section>
            {summary && <p class = 'm-2'>{summary}</p>}
            <section class = 'flex justify-between m-2 border-t-2 my-3 py-3'>
                
                <span onClick={()=>setLikes(prev=>prev+1)}> <ChatBubbleIcon style = {{height: '30px', width : '30px'}} /> {likes} likes</span> 
                <span class = 'text-blue-700' onClick={() => setVisible(!visible)}>Add Comment</span>
            </section>
            <section class = {`${visible ? 'visible' :'invisible'} flex justify-end  '`}>
                 
                <div>{comment.map(comment =><p class = 'p-2 italic'>{comment}</p>)}</div>
            </section>
            <section class = {`${visible ? 'visible' :'invisible'} flex justify-end  '`}>
                < AccountCircleIcon style={{height :'40px',width : '40px'}}/> 
                <input value={c_comment} type="text" placeholder='Add a comment...' class = 'p-2 mx-2 border-2 rounded-lg' onChange={(e)=>setCurrentComment(e.target.value)} onKeyDown={handleEnter}/>
                <span onClick={handleComment}>< SendIcon style={{height :'40px',width : '40px', color : 'blue'}}/></span>
            </section>
        </div>
    </div>
  )
}

export default Card