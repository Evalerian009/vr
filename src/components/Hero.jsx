import HeroImg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='w-screen h-screen relative flex flex-col justify-end md:items-center lg:items-start py-[10%] lg:p-[100px]' style={{backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPositionY: '35%', backgroundPositionX: 'center'}}>
      <div className='flex flex-col w-[80%] mx-auto max-w-[400px] lg:mx-0'>
        <h1 className='text-[ghostwhite] text-[1.9rem] md:text-[2.2rem] text-center lg:text-start font-[800] leading-[normal]'>Just the right amount of everything.</h1>
        <div className='mt-5 flex flex-col lg:flex-row gap-2'>
          <input className='py-[7px] text-lg indent-3 lg:w-[350px] appearance-none focus:outline-none font-semibold text-gray-700' type="email" placeholder='Enter a valid email address' />
          <button className='bg-yellow-400 hover:bg-yellow-500 py-[7px] px-6 text-[ghostwhite] font-semibold text-lg'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Hero