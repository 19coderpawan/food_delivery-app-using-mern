import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousel_comp = () => {
    return (
        <div>
            <div className="carousel-container">
                <Carousel className="w-100" style={{ maxHeight: '500px', margin: '10px 0px' }}>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/random/900x700/?burger" alt="" className='d-block w-100' style={{ maxHeight: '600px' ,objectFit:'contain !important'}} />
                        <Carousel.Caption  style={{fontWeight:'bolder', fontSize:'20px', fontFamily:'cursive',color:"red"}}>
                            “Food is really and truly the most effective medicine.”

                            – Joel Fuhrman
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/random/900x700/?cake" alt="" className='d-block w-100 ' style={{ maxHeight: '600px' ,objectFit:'contain !important'}} />
                        <Carousel.Caption style={{fontWeight:'bolder', fontSize:'20px', fontFamily:'cursive',color: 'red'}}>
                            “Food is not rational. Food is culture, habit, craving and identity.”

                            – Jonathan Safran Foer
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/random/900x700/?pizza" alt="" className='d-block w-100 ' style={{ maxHeight: '600px' ,objectFit:'contain !important'}} />
                        <Carousel.Caption style={{fontWeight:'bolder', fontSize:'20px', fontFamily:'cursive',color:"red"}}>
                            “There is no sincere love than the love of food.”

                            –George Bernard Shaw
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Carousel_comp
