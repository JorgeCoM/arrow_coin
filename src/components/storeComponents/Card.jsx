import { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Card = ({ imagen, text }) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className="flex flex-col items-center justify-center bg-gray-800 w-[16rem] h-[150px] rounded-xl"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div>
        <img
          style={{ borderRadius: "12px" }}
          className=" mt-[-15px] h-[150px]"
          src={imagen}
          alt=""
        />
      </div>
      <div className="flex w-[190px] mb-12 rounded-lg bg-gray-900 justify-between p-1 items-center">
      <button className="w-20 text-[12px] p-2 h-10 bg-slate-800 rounded-lg cursor-pointer hover:bg-gray-700 duration-300 ease-out">ver</button>
       <p className="text-[12px] w-20 flex items-center justify-center p-2 h-10 bg-slate-800 rounded-lg">{text}</p>
      </div>
    </animated.div>
  );
};
