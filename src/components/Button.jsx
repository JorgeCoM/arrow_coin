import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ styles, text = 'Empieza ahora ' }) => (
  <NavLink to={'/user'} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {text}
  </NavLink>
);

export default Button;
