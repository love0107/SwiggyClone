import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({name , cloudinaryImageId,avgRating,cuisines}) => {
    // const {name , cloudinaryImageId,avgRating,cuisines}=restaurant// destructure data
    return (
      <div className="card">
        <img
          src={ IMG_CDN_URL+cloudinaryImageId}
          alt={name}
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} star</h4>
      </div>
    );
  };

  export default RestaurantCard;