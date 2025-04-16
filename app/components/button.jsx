import { useRouter } from 'next/navigation';
import React from "react";


const Button = ({
  height,
  width,
  bgColor,
  rounded,
  textSize,
  buttonValue,
  textColor,
  fontFamily,
  letterSpacing,
  onHover,
  isSvgOn,
  svgForm,
  paddingLeft,
  gap,
  zIndex,
  onClickLink,
}) => {
  const router = useRouter();

  return (
    <button
      onClick={()=>router.push(`${onClickLink}`)}
      className={`group ${height} ${width} ${bgColor} ${zIndex} ${textColor} ${rounded} ${paddingLeft} hover:pl-[0px] ${textSize} ${fontFamily} ${letterSpacing} cursor-pointer ${onHover} transition-all duration-300 flex items-center ${gap} justify-center overflow-hidden`}
    >
      {isSvgOn &&
        <div className="w-[70px] flex items-center justify-center">
          {isSvgOn && svgForm}
        </div>
      }

      {isSvgOn ? (
        <span className="relative right-[20px] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
          {buttonValue}
        </span>
      ) : (
        buttonValue
      )}
    </button>
  );
};

export default Button;

