import styles from "../style";
import { arrowUp } from "../assets";
import { NavLink } from "react-router-dom";

const GetStarted = () => (
  <NavLink to={'/user'} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border border-cyan-500 p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Empieza</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Ahora</span>
      </p>
    </div>
  </NavLink>
);

export default GetStarted;
