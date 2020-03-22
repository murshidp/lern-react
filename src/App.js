import React from 'react';
import './App.css'
import Header from "./components/Header"
import ContactCard from "./components/ContactCard"

function App() {
  return (
    <div className="contact-card">
     <ContactCard
     contact = {{name:"murshid",imgUrl:"http://placekitten.com/300/200",
     phone:"9977665544",email:"msd@g.com"}}
      
     />
     <ContactCard
      contact = {{name:"adul",
      imgUrl:"http://placekitten.com/400/200",
      phone:"887665432",
      email:"adul@gmail.com"}}
     />
     <ContactCard 
      contact ={{name:"asik",
      imgUrl:"http://placekitten.com/300/300",
      phone:"9999999999",
      email:"ashik@gmail.com"}}
     />
     <ContactCard 
     contact={{name:"jash",
     imgUrl:"http://placekitten.com/200/100",
     phone:"9966554433",
     email:"js@gmail.com"}}
     />
    </div>
  );
}

export default App;
