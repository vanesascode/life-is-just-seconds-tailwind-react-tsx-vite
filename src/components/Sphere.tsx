import { useState, useEffect } from "react";
import styles from "../styles";

const Sphere = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < 59) {
        counter++;
      } else {
        counter = 0;
      }
      setSeconds(counter);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTransformValue = (value: number) => {
    const rotation = (value / 60) * 360;
    //The rotate() function is a CSS transformation function that rotates an element:
    return `rotate(${rotation}deg)`;
  };

  console.log(getTransformValue(seconds));

  return (
    <>
      <div className={`${styles.flexCenter}`}>
        {/* SPHERE */}
        <div className={`${styles.sphere}`}>
          <div className="px-1 w-64 h-1">
            {/* NEEDLE */}
            <div
              className=" h-[6px] bg-gradient-white w-[125px] rounded"
              style={{
                transform: getTransformValue(seconds),
                transformOrigin: "top right",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sphere;
