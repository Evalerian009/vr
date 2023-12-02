import Bx1 from '../assets/bx1.jpg'
import Bx2 from '../assets/bx2.jpg'
import Bx4 from '../assets/bx4.jpg'
import Bx5 from '../assets/bx5.jpg'
import Bx6 from '../assets/bx6.jpg'
import Bx7 from '../assets/bx7.jpg'
// import Bx1 from '../assets/bx1.jpg'

const Grid = () => {
  return (
    <div className="bg-yellow-500">
      <div className='absolute right-0 bg-slate-800 w-[85%] h-[100%] md:h-[60%] lg:h-[85%]' />
      <div className='py-[50px] lg:py-[100px] w-[80%] mx-auto flex flex-wrap justify-between gap-y-4 lg:gap-y-5 relative z-[3]'>
        <div className='w-full md:w-[31%] lg:w-[32%] md:h-[30vh] lg:h-[40vh]'>
          <img src={Bx6} alt='image' className='w-full h-full object-cover' />
        </div>
        <div className='w-full md:w-[31%] lg:w-[32%] md:h-[30vh] lg:h-[40vh]'>
          <img src={Bx4} alt='image' className='w-full h-full object-cover' />
        </div>
        <div className='hidden md:block w-full md:w-[31%] lg:w-[32%] md:h-[30vh] lg:h-[40vh]' />
        <div className='w-full md:w-[31%] lg:w-[32%] md:h-[30vh] lg:h-[40vh]'>
          <img src={Bx2} alt='image' className='w-full h-full object-cover' />
        </div>
        <div className='w-full md:w-[31%] lg:w-[32%] md:h-[30vh] lg:h-[40vh]'>
          <img src={Bx1} alt='image' className='w-full h-full object-cover' />
        </div>
        <div className='w-full md:w-[31%] lg:w-[32%] md:h-[30vh] lg:h-[40vh]'>
          <img src={Bx5} alt='image' className='w-full h-full object-cover' />
        </div>
        <div className='w-full md:w-[31%] lg:w-[32%] bg-yellow-500 p-4 lg:p-10'>
          <h4 className='text-3xl lg:text-4xl font-semibold'>Digital Marketing</h4>
          <p className='mt-5 font-semibold lg:text-lg'>Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital through wireless opportunities. Progressively network performance based services for functionalized testing procedures.</p>
        </div>
        <div className='w-full md:w-[31%] lg:w-[32%]'>
          <img src={Bx7} alt='image' className='w-full h-full object-cover' />
        </div>
        <div className='w-full md:w-[31%] lg:w-[32%]' style={{background: 'repeating-linear-gradient(45deg, black, black 7px, #eab308 7px, #eab308 24px)', clipPath: 'polygon(0 0, 0 76%, 100% 0)'}} />
      </div>
    </div>
  )
}

export default Grid