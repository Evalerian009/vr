import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Grid from './components/Grid'
import Social from './components/Social'
import Footer from './components/Footer'

const App = () =>(
  <div className='max-w-[1480px]  mx-auto overflow-x-hidden'>
    <Hero />
    <About />
    <Services />
    <Grid />
    <Social />
    <Footer />
  </div>
)

export default App
