import React,{Fragment, useState} from 'react'
import { FaPlus } from "react-icons/fa";


const Faqs = () => {
    const [show, setShow] = useState(false)

    const  frequestQustion= [{
        title: 'What is Netflix?',
        content:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.  You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!'
        
        },
        
        {
            title: 'How much does Netflix cost?',
            content:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.' 
        },
        
        {
            title: 'Where can I watch?',
            content:'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.'
        },
        
        {
            title: 'How do I cancel?',
            content:'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
        {
            title: 'What can I watch on Netflix?',
            content:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },
        {
            title: 'Is Netflix good for kids?',
            content:'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
        },
        
        ]

        function showHandler(index){
            if (index === show) {
             setShow(false) 
            }else{
             setShow(index)
            }
         }
  return (
    <div className='bg-black border-t-[6px] border-gray-600'>
   {/* <div className='h-[130vh]'> */}

   <div className='w-full h-[160vh] flex items-center justify-center'>

  
     {/* <div className='bg-black border-t-[6px] border-gray-600'> */}
        <div className='accordion w-[900px]  '>
          {/* <div className=''>
             <h1 className='text-white text-[40px]   font-bold text-center'>Frequently Asked Questions</h1> 
          </div> */}
        <h1 className='text-white text-[40px]  font-bold text-center'>Frequently Asked Questions</h1>
        <div className='text-center text-light'>
    {frequestQustion.map((element, id) =>(
      <Fragment key={id} >
        <div onClick={ () => showHandler(id)} className="container" >
      {/* <div className='d-flex justify-content-between align-items-center mt-3 mb-3 p-2' > */}
      <h2 className='text-white  text-[20px] bg-stone-600 cursor-pointer flex justify-between items-center h-[70px]  mt-4 mb-5 p-3' >{element.title} 
      <FaPlus className='text-white'  size={25} />
      </h2>
      
      {/* <button className='text-white'>< FaPlus/></button></h2> */}
      {/* </div> */}
      </div>
      { show === id && <p className=' bg-stone-600 text-white text-center text-xl p-3'>{element.content}</p>}
      </Fragment>
    ))} 
    <p className="text-white text-center text-[20px] font-medium mt-[50px]">
          Ready to watch? Enter your email to create or restart your membership. </p>
          <div className=" w-[50%] m-[auto] mt-[30px] ">
          <input
            type="text"
            placeholder="Email Address"
            className="p-[12px] mr-2 w-[70%] rounded-md bg-transparent bg-white border-2"
          />
          <button className="bg-red-600 p-[12px]  text-white font-bold rounded-md w-[27%]  border-2 border-transparent inline-flex justify-between items-center ">
            <p className="text-[13px]">Get Started</p>
           
          </button>
          {/* <h3 className='text-red-500'>
      <FaPlus />
    </h3> */}
        </div>
    </div>



        </div>
    
    </div>
   </div>
  )
}

export default Faqs