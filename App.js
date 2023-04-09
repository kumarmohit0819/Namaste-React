import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/meals.jpg";
//JSx (transpiled before it reaches the JS) - PARCEL -Babel

// JSX => Babel transpiled it to React.createElement => ReactElement - JS Object => HTMlElement(render)

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Seach
 *  - RestaurentContainer
 *    -RestaurentCard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src="https://b.zmtcdn.com/data/dish_photos/957/f9d83b27d2454b0ba0f6749b65486957.jpg?output-format=webp"
      />
      <h3>Burger King</h3>
      <h4>Burger ,fast food , Dessert</h4>
      <h4>4.0 stars</h4>
      <h4>34 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Seach</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
