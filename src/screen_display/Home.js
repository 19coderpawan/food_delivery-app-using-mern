import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Carousel_comp from '../components/Carousel_comp'


const Home = () => {
  const [food_data_item, setfood_data_item] = useState([]);
  const [food_category_data, setfood_category_data] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:9001/api/DisplayData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const jsonresponse = await response.json();
    console.log(jsonresponse[0], jsonresponse[1]);
    setfood_data_item([...jsonresponse[0]]);
    setfood_category_data([...jsonresponse[1]]);
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <Navbar></Navbar>
        </div>
      <div>
        <Carousel_comp></Carousel_comp>
      </div>
      <div className='Container'>
        <Cards></Cards>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
