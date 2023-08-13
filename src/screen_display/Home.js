import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Carousel_comp from '../components/Carousel_comp'


const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Carousel_comp></Carousel_comp>
      <Cards></Cards>
      <Footer></Footer>
    </>
  )
}

export default Home
