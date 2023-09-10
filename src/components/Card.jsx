import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Margin } from '@mui/icons-material';

function Card({title,img, author , summary,date}) {
  return (
    <div class = 'flex flex-col shadow-lg rounded h-4/5 mx-6 my-4 w-1/2 text-gray-500 m-3'>
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
                
                <span > <ChatBubbleIcon style = {{height: '30px', width : '30px'}}/> 2.3k likes</span> 
                <span class = 'text-blue-700'>read more</span>
            </section>
        </div>
    </div>
  )
}

export default Card