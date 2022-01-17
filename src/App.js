import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import Card from "./components/Card"
import Contact from './components/Contact';
import mr_whiskerson from "./images/mr-whiskerson.png"
import fluffykins from "./images/fluffykins.png"
import felix from "./images/felix.png"
import Pumpkin from "./images/pumpkin.png"
/*
This is how props will received at Contact function:

{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/


function App(){
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      {/* <Card /> */}

      <Contact 
                img={mr_whiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={fluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={Pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />


    </div>
  )
}
export default App;
