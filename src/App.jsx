
import { useState } from 'react'
import './App.css'
import instance from './instance'
import { useEffect } from 'react'

function App() {

  const [quote,setQuote]=useState("")

  const fetchQuote=async()=>{
    const {data} =await instance.get()
   const res=await data.quotes
   console.log(res.length);
  const fetchRes=await res[Math.floor(res.length*Math.random())]
  // console.log(fetchRes);
  setQuote(fetchRes)
  
   
  
   
  
    
  }

  useEffect(()=>{
    fetchQuote()
    
  },[])
  console.log(quote.quote);
  



  return (
    <>
    <div className=' justify-content-center pt-5' style={{height:"100vh",width:"100%", backgroundColor:"white",}}>
  <div className='d-flex justify-content-center align-items-center  ' style={{height:"60px"}}>
      <h1>
        Today's Quote
      </h1>
      <button onClick={fetchQuote} className='ms-3 bg-primary text-white' style={{height:"40px" ,width:"80px",border:"none",borderRadius:"5px"} }>Next</button>

     
  </div>
  <div className=' mt-5 ' style={{height:"400px" , width:"100%",padding:"0px 250px" ,justifyContent:"center"}}> 
    <p style={{
      fontSize:"35px",
      textAlign:"justify",

    }}>
      {`${quote?.quote} `}
      </p>
    <p style={{fontSize:"30px",marginLeft:"900px",marginTop:"50px", width:"350px"}}> {`~${quote?.author} `}</p>
  </div>
    </div>
      
    </>
  )
}

export default App
