import React from 'react'
import AcceptanceChart from '../chart/AcceptanceChart'
import Impact_stories from '../impact/Impact_stories'
import VerticalBarChart from '../chart/VerticalBarChart'
import SubscriptionForm from '../components/SubscriptionForm'


function Home() {
  return (
    <div class = 'm-auto text-center pt-20 bg-gray-200  text-gray-600'>
        <h1 class = " font-bold text-5xl py-5 text-blue text-black">Success Stories</h1>
        <h2 class = 'text-xl'>A2SV has turned the dreams of African software engineers into a reality and continues to thrive.</h2>
        <p class = "mt-10 pt-10">Google SWE Interviews Acceptance Rate Comparison</p>
        <p class = "py-2">A2SV students are 35 times more likely to pass Google SWE interviews than average candidates.</p>
        <AcceptanceChart />
        <Impact_stories />
        <VerticalBarChart />
        <SubscriptionForm />
       
        
    </div>
  )
}

export default Home