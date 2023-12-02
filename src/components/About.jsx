import Robot from '../assets/about.png'

const About = () => (
  <div className="bg-yellow-500 pt-[70px] md:pt-[100px] lg:pt-10 px-10 md:px-[80px] lg:px-[100px] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14">
    <div className="lg:w-1/2 text-center lg:text-start">
      <h2 className="text-[2.2rem] font-bold leading-snug">About Harness Multimedia based collaboration.</h2>
      <p className="mt-5 text-lg font-[600]">Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital through wireless opportunities. Progressively network performance based services for functionalized testing procedures.</p>
    </div>
    <div className='lg:w-1/2'>
      <div className='max-w-[500px]'>
        <img src={Robot} alt="robot image" className='w-full h-full' />
      </div>
    </div>
  </div>
)

export default About