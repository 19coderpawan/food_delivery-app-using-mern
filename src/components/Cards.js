import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="cards-container">
                <div className="d-flex " style={{ minHeight: '50vh' }}>
                    <div className="card" style={{ width: '18rem', margin: '100px 10px' }}>
                        <img src="../img/paneer.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                    <option  value="half">Half</option>
                                    <option value="full">Full</option>
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
