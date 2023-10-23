import Footer from "./components/footer/Footer"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Portfolio from "./pages/portfolio/Portfolio"
import Resume from "./pages/resume/Resume"
import Services from "./pages/services/Services"

const page = () => {


  return (
    <>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default page