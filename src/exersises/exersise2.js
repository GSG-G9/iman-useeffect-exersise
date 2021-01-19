import React from "react";
const Colors = () => {
  const [position, setPosition] = React.useState(0);
  const [bgColor, setBgColor] = React.useState("white");

  React.useEffect(() => {
    position > 0.5 * window.innerWidth
      ? setBgColor("tomato")
      : setBgColor("blue");
  }, [position]);

  React.useEffect(() => {
    document.addEventListener("mousemove", ({ pageX }) => setPosition(pageX));
    return () => {
      document.removeEventListener("mousemove", ({ pageX }) =>
        setPosition(pageX)
      );
    };
  }, []);

  return (
    <>
      <div style={{backgroundColor: bgColor}}> i'm on x: {position}</div>
    </>
  );
};
export default Colors;
