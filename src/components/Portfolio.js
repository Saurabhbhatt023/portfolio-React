import React from 'react'
import youtube from "../assets/youtubelite.png"
import foodapp from "../assets/food-app.png"
import youtubelive from "../assets/youtube-live.png"
import portfolio from "../assets/portfolio.png"

 

  
  const Portfolio = () => {



        const  portfolios = [

             { 
               id : 1  ,
               src : foodapp,
               href: "https://insta-food-order.netlify.app/",
               gitcode :"https://github.com/Saurabhbhatt023/Insta-Food-Ordering-App",
            
               
             },
             { 
              id : 2  ,
              src :  youtubelive ,
              href: "https://live-chat-youtube.netlify.app",
              gitcode: "https://github.com/Saurabhbhatt023/LiveChatYoutubeApp",
        
            },
            { 
              id :  3 ,
              src : portfolio ,
              demo: "https://my-portfolio-saurabh.netlify.app",
              gitcode : "https://github.com/Saurabhbhatt023/Portfolio-React" ,
            },
            { 
              id : 4  ,
              src : youtube,
              href: "https://youtube-lite-app023.netlify.app",
              gitcode : "https://github.com/Saurabhbhatt023/youtube-clone"
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
               portfolios.map( ( { id , src , href ,gitcode}) => (
                
                <div  key = {id }className='shadow-md shadow-gray-600 rounded-lg'> 
                <img  src={src} alt = " " className='rounded-md duration-200 hover:scale-105'></img>
                <div className='flex items-center justfy-center'> 
                   <button onClick = { function () {
                        window.location.href=href
                   }} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-blue-600'> Demo </button>
                   <button onClick = { function () {
                        window.location.href=gitcode
                   }}  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  text-blue-600'>Code </button>
                </div>
               </div>
                 
               ))
               
              
               }
                
                 </div>
            </div> 
      </div>
    
  }
  
  export default Portfolio