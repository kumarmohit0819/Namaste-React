import React from "react";
import ReactDOM from "react-dom/client";

//JSx (transpiled before it reaches the JS) - PARCEL -Babel

// JSX => Babel transpiled it to React.createElement => ReactElement - JS Object => HTMlElement(render)

const TitleComponent = () => <h1 id="heading">Namaste React using JSX 🚀 </h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      <h1 id="heading">Namaste React functional component 😂 </h1>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
