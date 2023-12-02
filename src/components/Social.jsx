import RobotHead from '../assets/social.png'
import FB from '../assets/fb.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'

const Social = () => {
  return (
    <>
      <div className="py-[50px] lg:p-[100px]px-10 md:px-[80px] bg-slate-800 relative">
        <div className='flex justify-center items-center'>
          <div className='w-[80%] h-[200px] md:w-[500px] lg:w-[450px] md:h-[250px] lg:h-[200px] mx-auto bg-red-500 absolute top-[50px]' />
          <div className="w-full md:w-2/3 lg:w-1/3 mx-auto text-center relative">
            <img src={RobotHead} alt="" />
            <h5 className='mt-7 text-[ghostwhite] text-4xl font-bold'>- Mike Norton</h5>
            <h6 className='mt-3 text-[ghostwhite] text-lg font-semibold'>&apos;Success is not final; failure is not fatal: It is the courage to continue that counts.&apos;</h6>
          </div>
        </div>
      </div>
      <div className='py-[50px] lg:p-[100px]px-10 md:px-[80px] bg-red-500'>
        <div className='w-fit mx-auto text-center'>
          <h5 className='text-[ghostwhite] font-bold text-4xl'>Follow Us!</h5>
          <div className='flex gap-5 mt-5 items-center'>
            <img src={FB} alt="facebook" className='cursor-pointer w-[50px] h-[50px]'/>
            <img src={Twitter} alt="Twitter" className='cursor-pointer w-[45px] h-[45px]'/>
            <img src={Linkedin} alt="Linkedin" className='cursor-pointer w-[50px] h-[50px]'/>
            <img src={Instagram} alt="Instagram" className='cursor-pointer w-[50px] h-[50px]'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Social