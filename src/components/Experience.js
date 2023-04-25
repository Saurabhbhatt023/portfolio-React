import React from 'react'
import Redux from "../assets/Redux.png"
import Javascript from "../assets/Javascript.png"
import  Tailwindcss from "../assets/Tailwindcss.png"
// import reactImg from "../assets/react.png"
import html from "../assets/html.png"
import Typescript from "../assets/Typescript.png.jpg"

const Experience = () => {


      const techs =  [
         
             { 
                
                 id : 1 ,
                 src : html ,
                 title : "HTML" ,
                 style: "shadow-orange-500"
               
             }  ,

             { 
                id : 2 ,
                src : Redux ,
                title : "Redux" ,
                style: "shadow-violet-500 ",
            }  ,
            { 
                id : 3 ,
                src : Tailwindcss ,
                title : "Css" ,
                style: "shadow-blue-500" ,
              
            } ,
            { 
                id : 4 ,
                src : Javascript ,
                title : "JAVASCRIPT" ,
                style: " shadow-yellow-500 "
            } ,
            { 
                id : 5 ,
                src : Typescript ,
                title : "Typescript" ,
                style: " shadow-yellow-500 "
            } ,
            
            // { 
            //     id : 4 ,
            //     src : Javascript ,
            //     title : "JAVASCRIPT" ,
            //     style: " shadow-yellow-500 "
            // } ,
            
 
      ]
  return (
    <div name = 'experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-max screen'>

       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-max text-white '> 
          <div  className='py-10'> 
              <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-blue-500 '> Experience </p>
              <p className='py-6'>  these are the Technologies  i,ve worked with</p>           
            
          </div>

           <div className='w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-8 px-12 sm:px-0'> 
           { 

               techs.map(({id ,src , title , style ,}) =>  (


                 <div className='px-12'> 

             
                <div  key = {id} className= {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}> 
                <img src={src} className='w-44  mx-auto' alt=''/>
                <p className='mt-4 '> {title} </p>
                </div> 
                </div>
  
               ))
           }
            
              
           </div>
       </div>
    </div>
  )
}

export default Experience