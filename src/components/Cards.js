import React from 'react'

const Cards = (props) => {
    let options=props.foodoptions;
    // now i want to display the keys of the option object for that we have method called Object.key() .
    let priceoptions=Object.keys(options)
    return (
        <>
            <div className="cards-container">
                <div className="d-flex " style={{ minHeight: '55vh' }}>
                    <div className="card" style={{ width: '30rem', margin: '100px 10px' }}>
                        <img src={props.foodimage} className="card-img-top" style={{height:'200px'}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.foodname}</h5>
                            <p className="card-text">{props.fooddescription}</p>
                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                            <div className="container w-100  ">
                                <select name="" id="" className="m-2 h-100 rounded option-design">
                                    {
                                        Array.from(Array(100), (e, i) => {
                                            return (
                                                <option  key={i + 1} value={i + 1}>{i + 1}</option>
                                            )
                                        })
                                    }
                                </select>
                                <select name="" id="" className="m2 h-100 rounded option-design">
                                    {/* now here we are going to map our options here which is passed 
                                    as an prop in the card component. */}
                                    {
                                        priceoptions.map((option)=>{
                                          return(
                                            <option value={option} >{option}</option>
                                          )
                                        })
                                    }
                                </select>
                                <div className="d-inline m-4">Price</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards
