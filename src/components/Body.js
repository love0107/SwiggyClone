
import { RestaurantCards } from "../constant";
import RestaurantCard from "./RestaurantCards";
// named import
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer"

const filterData = (searchText, allRestaurant) => {
  console.log("this should be the all the restaurants ", allRestaurant)
  return allRestaurant.filter((restaurant) =>  restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
};


const Body = () => {
  // let searchText = "Pizza";
  // searchText is a local variable
  const [searchText, setSearchText] = useState("");
  // const[searchClicked, setSearchClicked]=useState("false");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants]=useState([])

  useEffect(()=>{
    getRestaurants();
  }, [])
  // useEffect is a dependent on array its calls when  there is change in array
  // userEffect called once after render

  async function getRestaurants(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json)
    // optional chaning
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

return allRestaurants.length===0? <Shimmer/>: (
  <>
  <div className="search-container">
   <input type="text" className="search-input" placeholder="Search for restaurants" value={searchText}
   onChange={(e) =>setSearchText(e.target.value)}
   />
   {/* <h1>{searchClicked}</h1> */}
   <button className="search-btn" onClick={()=>{

    // setSearchClicked("true")
    // filter the restaurant array
    // update the state of restaurant array
     const data=filterData(searchText,allRestaurants);
    setFilteredRestaurants(data);
  
  }
    }>Search</button>
  </div>
  
    <div className="restaurant-list">
      { 
      filteredRestaurants.map((restaurant) => {
        // using es6 for spread function
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>;
      })
      }
    </div>
    </>
    )
};

  export default Body