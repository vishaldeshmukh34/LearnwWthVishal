import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import Programs from "./components/Programs/Programs";
import CareerSupport from "./components/CareerSupport/eerSupport";  
import Testimonials from "./components/Testimonials/Testimonials";
import Mentors from "./components/Mentors/Mentors"; 
import Roadmap from "./components/Roadmap/Roadmap"; 
import  Pricing from "./components/Pricing/Pricing";  
import Stats from "./components/Stats/Stats"; 
import FAQ from "./components/FAQ/FAQ"; 
import ContactMe from "./components/ContactMe/ContactMe"; 
import Foter from "./components/Footer/Footer"; 


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <Programs />
      <CareerSupport /> 
      <Testimonials />  
      <Mentors /> 
      <Roadmap /> 
      <Pricing />
      <Stats /> 
      <FAQ /> 
      <ContactMe /> 
      <Foter /> 
    </div>
  );
}

export default App;