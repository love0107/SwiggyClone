import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dymamic parameter from the url
  // const param= useParam();
  // destructuring above line
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=12.96340&lng=77.58550&restaurantId=` +
        id
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
  }

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>This is Restaurant Menu</h1>
        <h2>Restaurant Id: {id}</h2>
        <h3>Restaurant Name : {restaurantInfo.name}</h3>
        <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} />
        <h3>{restaurantInfo.avgRating}</h3>
        <h3>{restaurantInfo.city}</h3>
        <h3>{restaurantInfo.costForTwoMessage}</h3>
        <h3>{restaurantInfo.areaName}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantInfo.cuisines).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
