import React from "react";
import ReactDOM from "react/client";
import "../../index.css";
import logo from "../../assets/india.png";
import userLogo from '../../assets/user.png'
// Q 1: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "This is first heading"),
//   React.createElement("h1", {}, "This is second heading"),
//   React.createElement("h3", {}, "This is third heading"),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

//Q 2: Create a Nested header Element using JSX

// const header = <div className="title">
//      <h1>This is first heading</h1>
//      <h2>This is second heading</h2>
//      <h3>This is third heading</h3>
// </div>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

//Q 3 : Create a functional element of the same JSX

// const HeaderComponent = () => {
//   return (
//     <div className="title">
//   <h1>This is first heading</h1>
//   <h2>This is second heading</h2>
//   <h3>This is third heading</h3>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent/>);

// Q 4: Pass attribute into the tag in JSX

// const HeaderComponent = () => {
//   return (
//     <div className="heading" id="heading">
//       <h1 className="heading1" id="heading1">
//         This is first heading
//       </h1>
//       <h2 className="heading2" id="heading2">
//         This is second heading
//       </h2>
//       <h3 className="heading3" id="heading3">
//         This is third heading
//       </h3>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent/>);

// Q4 Composition of Component (Add a component inside another)

// const TitleComponent = () => {
//   return (
//     <div className="title">
//       <h1>This is first title</h1>
//       <h2>This is second title</h2>
//       <h3>This is third title</h3>
//     </div>
//   );
// };

// const HeaderComponent = () => {
//   return (
//     <div className="heading">
//       <p>This is Header</p>
//       <h1>{<TitleComponent />}</h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />);

//Q 5: Create a Header Component from scratch using Functional Component with JSX
// - Add a Logo on Left
// - Add a search bar in middle
// - Add User icon on right
// - Add CSS to make it look nice

const HeaderComponent = () => {
  return (
    <>
      <header className="header">
        <div>
          <img src={logo} height={50} width={50} />
        </div>
        <div className="center">
          <input className="search" type="text" placeholder="Global Search..." />
          <button type="button" className="button">search</button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};
