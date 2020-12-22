import React, { useState } from 'react';
import CustomNavBar from '../../components/NavBar'
import CustomJumbotron from '../../components/Jumbotron'
import CustomCarousel from '../../components/Carousel'
import Footer from '../../components/Footer'


const Home = (props) => {


    return(<>
      <CustomNavBar />
      <CustomJumbotron />
      <Footer />
    </>)
}


export default Home