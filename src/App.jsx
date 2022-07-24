import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./assets/data";
console.log(data)
const cardItems = data.map((item)=>{
  return(
    <>
      <Card
       
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl} 
      />
      <hr/>
    </>
  )
})
const App = ()=>{
  return(
    <div>
        <Navbar/>
        <section className="card-container">
            {cardItems}
        </section>
    </div>
  )
}
export default App