import React from "react";
import "./style.css";
import HOC from './WrappedComponent'
 function App(props) {
  return (
    <div>
     <h3> This is {props.componentName} </h3>
    </div>
  );
}

export default HOC(App)