import FB from '../assets/fb.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className="py-[50px] lg:p-[100px]px-10 md:px-[80px] bg-[linear-gradient(90deg,_#1e293b_33.333%,_#eab308.333%_66.666%,_#1e293b_66.666%)] text-[ghostwhite]">
      <div className='flex flex-col lg:flex-row gap-7'>
        <div className='w-1/2 mx-auto text-center lg:w-1/2 lg:text-start'>
          <h5 className='text-4xl font-bold'>Location</h5>
          <h6 className='text-lg mt-3 w-[280px]'>28 Jackson Blvd Ste 1020 Chicago IL 60604-2340.</h6>
          <div className='mt-7'>
            <h5 className='text-4xl font-bold'>Follow Us</h5>
            <div className='flex gap-2 mt-3 items-center justify-center lg:justify-start'>
              <img src={FB} alt="facebook" className='cursor-pointer w-[40px] h-[40px]'/>
              <img src={Twitter} alt="Twitter" className='cursor-pointer w-[35px] h-[35px]'/>
              <img src={Linkedin} alt="Linkedin" className='cursor-pointer w-[40px] h-[40px]'/>
              <img src={Instagram} alt="Instagram" className='cursor-pointer w-[40px] h-[40px]'/>
            </div>
            <h6 className=' hidden lg:block text-lg mt-5 w-[350px]'>&copy;2023 Privacy Policy - Design by Nicepage.com.</h6>
          </div>
        </div>
        <div className='w-[85%] max-w-[450px] lg:w-1/2 mx-auto'>
          <h5 className='text-center lg:text-start text-4xl font-bold'>Contact Form</h5>
          <form className='mt-5 flex flex-col gap-3'>
            <input type="text" placeholder='Enter your name' className='focus:outline-none text-lg text-slate-900 py-2 indent-3 bg-[ghostwhite] w-full' />
            <input type="email" placeholder='Enter a valid email' className='focus:outline-none text-lg text-slate-900 py-2 indent-3 bg-[ghostwhite] w-full' />
            <textarea cols="30" rows="5" placeholder='Enter your message' className='focus:outline-none text-lg text-slate-900 indent-3 bg-[ghostwhite] w-full resize-none' />
            <button className='border-[2px] border-[ghostwhite] py-2 px-4 w-fit mx-auto lg:mx-0 hover:bg-[ghostwhite] hover:text-yellow-500 font-bold'>Submit</button>
          </form>
        </div>
      </div>
      <div className='lg:hidden text-lg mt-10 text-center px-10'>&copy;2023 Privacy Policy - Design by Nicepage.com.</div>
    </div>
  )
}

export default Footer