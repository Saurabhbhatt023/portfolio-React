import React from 'react'
import Javascript from "../assets/Javascript.png"
import Weater from "../assets/Weater.png"
import Clock from "../assets/Clock.png"
import reactW from "../assets/react.png"


 

  
  const Portfolio = () => {



        const  portfolios = [

             { 
               id : 1  ,
               src : Clock ,
               href: "//https://linkedin.com",
            
               
             },
             { 
              id : 2  ,
              src : Weater ,
              href: "https://linkedin.com",
        
            },
            { 
              id :  3 ,
              src : Javascript ,
              href: "https://linkedin.com",
            },
            { 
              id : 4  ,
              src : reactW,
              href: "https://643e84cfda80664dd6b00764--harmonious-truffle-92f5d4.netlify.app/",
            },

        ]
    return <div name='portfolio' className='bg-gradient-to-b form-black to-gray-800 min-w-full text-white md:min-h-max'>

          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full
          '> 

             <div className='py-8'> 
              <p className='text-4xl font-bold inline border-b-4 border-blue-500 px- text-blue-800'> Portfolio</p>
              <p className='py-6 text-blue-800'>  cheak out my some work</p>
           
                

              
             </div>



               <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 

                        
              { 
               portfolios.map( ( { id , src , href}) => (
                
                <div  key = {id }className='shadow-md shadow-gray-600 rounded-lg'> 
                <img  src={src} alt = " " className='rounded-md duration-200 hover:scale-105'></img>
                <div className='flex items-center justfy-center'> 
                   <button onClick = { function () {
                        window.location.href=href
                   }} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-blue-600'> Demo </button>
                   <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  text-blue-600'>Code </button>
                </div>
               </div>
                 
               ))
               
              
               }
                
                 </div>
            </div> 
      </div>
    
  }
  
  export default Portfolio