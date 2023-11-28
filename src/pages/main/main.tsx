import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavLink to="/controlled-form">To controlled form</NavLink>
      <NavLink to="/uncontrolled-form">To uncontrolled form</NavLink>
    </div>
  );
};

export default Main;
