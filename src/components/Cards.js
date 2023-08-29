import React, { useEffect, useRef, useState } from 'react'
// now import the cart Context from the ContextReducer file to use them.
import { CartState, CartDispatch } from './ContextReducer';


const Cards = (props) => {
    let options = props.foodoptions;
    const dispatch=CartDispatch();
    let data=CartState();
    let PriceRef=useRef();
    // console.log(props.foodItem);
    // now create two state in order to store the quantity and the size of the product in the options.
    const [size, setsize] = useState("");
    const [quantity, setquantity] = useState(1);
    const handleCart = async() => {
        // so before the add condition we have several conditions to perform they are-:
        // Update conditions.
         let food=[]
         for(const item of data){
            if(item.id ===props.foodItem._id){
                food=item;
                break;
            }
         }
         if(food!==[]){
            if(food.size===size){
                await dispatch({type:"update", id:props.foodItem._id, finalPrice:finalPrice,quantity:quantity});
                return
            }
         
        else if(food.size!==size){
            //    once the user has clicked on the add btn all the data should be store in the dispatch method.
               await dispatch({type:"Add",id:props.foodItem._id,name:props.foodItem.name,image:props.foodItem.img,
                description:props.foodItem.description,size:size,quantity:quantity,finalPrice:finalPrice});
                return ;
                // console.log(data);
        }
    }
        await dispatch({type:"Add",id:props.foodItem._id,name:props.foodItem.name,image:props.foodItem.img,
        description:props.foodItem.description,size:size,quantity:quantity,finalPrice:finalPrice});
    }
    // now i want to display the keys of the option object for that we have method called Object.key() .
    let priceoptions = Object.keys(options)
    let finalPrice=quantity *parseInt(options[size]);
    useEffect(()=>{
        setsize(PriceRef.current.value)
    },[])
    return (
        <>
            <div className="cards-container">
                <div className="d-flex " style={{ minHeight: '60vh' }}>
                    <div className="card card-hover" style={{ width: '30rem', margin: '100px 10px' }}>
                        <img src={props.foodItem.img} className="card-img-top" style={{ height: '200px' }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.foodItem.name}</h5>
                            <p className="card-text">{props.foodItem.description}</p>
                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                            <div className="container w-100  ">
                                <select name="" id="" className="m-2 h-100 rounded option-design" onChange={
                                    (e) => setquantity(e.target.value)
                                }>
                                    {
                                        Array.from(Array(100), (e, i) => {
                                            return (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            )
                                        })
                                    }
                                </select>
                                {/* now we have to change the state of the options also . */}
                                <select name="" id="" ref={PriceRef} className="m2 h-100 rounded option-design" onChange={
                                    (e) => setsize(e.target.value)
                                }>
                                    {/* now here we are going to map our options here which is passed 
                                    as an prop in the card component. */}
                                    {
                                        priceoptions.map((option) => {
                                            return (
                                                <option value={option} >{option}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="d-inline m-4">₹{finalPrice}/-</div>
                                
                                <div className='btn bg-white text-success border' onClick={handleCart}>Add to cart</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards
