import { useState } from "react";

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );

// arrow function ------>
const Header = () => {

const [isLoggedIn, setIsLoggedIn]= useState(true)
return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      { isLoggedIn ?(
      <button onClick={()=>setIsLoggedIn(false)}>LogIn</button>
      ) :(
      <button onClick={()=> setIsLoggedIn(true)}>LogOut</button>
      )}
    </div>
);
}

  export default Header;