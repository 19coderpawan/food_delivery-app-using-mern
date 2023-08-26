import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Carousel_comp from '../components/Carousel_comp'


const Home = () => {
  const [food_data_item, setfood_data_item] = useState([]);
  const [food_category_data, setfood_category_data] = useState([]);
  // another state for the search box.
  const [search_data,set_search_data]=useState("");
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
        <div className='mt-3 mb-3'>
        <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search_data}
                onChange={(e)=>set_search_data(e.target.value)}
                style={{ width:'50%',marginLeft:'25%'}}
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
        </div>
      <div>
        <Carousel_comp></Carousel_comp>
      </div>
      <div className='m-5'>
        {
          food_category_data!==[]
          ?food_category_data.map((data)=>{
            return(
              <div className='row mb-3'>
              <div key={data._id}><h1 className='text-center' style={{marginTop:'10px'}}>{data.CategoryName}</h1></div>
              <hr />
              {
                food_data_item!==[]
                ?food_data_item.filter((item)=>
                  (item.CategoryName===data.CategoryName) && (item.name.toLowerCase().includes(search_data.toLowerCase()))
                ).map((food_items)=>{
                  return(
                    <div className='col-12 col-md-6 col-lg-3' key={food_items._id}>
                    <Cards foodItem={food_items}
                     foodoptions={food_items.options[0]}>
                     </Cards>
                    </div>
                  )
                  
                })
              
              :<div>ther is no such data</div>
          }
              </div>
            )
            
          })
          :<div>**********</div>
        }
       
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
