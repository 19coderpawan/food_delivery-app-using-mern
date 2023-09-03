import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MyOrder = () => {


    const [orderData, setorderData] = useState({})


    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))

        const response = await fetch("http://localhost:9001/api/myorders", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userorder')
            })
        })
        if (response.ok) {
            const data = await response.json();
            console.log("the data as response is ", data);
            setorderData(data.myorderdata);
        } else {
            console.error('Failed to fetch data');
        }



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }
    useEffect(() => {
        fetchMyOrder()
    }, []);

    // useEffect(() => {
    //     console.log("the state data is ", orderData);  
    // }, [orderData]);

        return (
            <div>
                <div>
                    <Navbar />
                </div>

                <div className='container'>
                    <div className='row'>
                        {orderData.order_data && orderData.order_data.length > 0 ? (
                            orderData.order_data
                                .slice(0)
                                .reverse()
                                .map((item) => {
                                    return item.map((arrayData) => {
                                        return (
                                            <div key={arrayData.id}>
                                                {arrayData.order_date ? (
                                                    <div className='m-auto mt-5'>
                                                        {arrayData.order_date}
                                                        <hr />
                                                    </div>
                                                ) : (
                                                    <div className='col-12 col-md-6 col-lg-3'>
                                                        <div
                                                            className="card mt-3"
                                                            style={{ width: "40rem", maxHeight: "560px" }}
                                                        >
                                                            <img
                                                                src={arrayData.image}
                                                                className="card-img-top"
                                                                alt="..."
                                                                style={{ height: "160px", objectFit: "fill" }}
                                                            />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{arrayData.name}</h5>
                                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                    <span className='m-1'>{/* Render other properties */}</span>
                                                                    <span className='m-1'>{arrayData.size}</span>
                                                                    <span className='m-1'>{/* Render other properties */}</span>
                                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                                        {arrayData.quantity}
                                                                    </div>
                                                                    <br />
                                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                                        ₹{arrayData.finalPrice}/-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    });
                                })
                        ) : (
                            <p>No order data available</p>
                        )}
                    </div>
                </div>




                <div>
                    <Footer />
                </div>
            </div>
        )
    }




export default MyOrder;
