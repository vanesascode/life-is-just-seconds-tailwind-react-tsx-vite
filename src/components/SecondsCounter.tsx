import { useState, useEffect } from "react";
import styles from "../styles.tsx";

const SecondsCounter = () => {
  const [secondsOne, setSecondsOne] = useState<number>(0);
  const [secondsTwo, setSecondsTwo] = useState<number>(0);
  const [secondsThree, setSecondsThree] = useState<number>(0);
  const [secondsFour, setSecondsFour] = useState<number>(0);
  const [secondsFive, setSecondsFive] = useState<number>(0);

  useEffect(() => {
    let counterOne = 0;
    let counterTwo = 0;
    let counterThree = 0;
    let counterFour = 0;
    let counterFive = 0;

    // 1 --------------------------

    const intervalOne = setInterval(() => {
      if (counterOne < 9) {
        counterOne++;
      } else {
        counterOne = 0;
      }
      setSecondsOne(counterOne);
    }, 1000);

    // 2 --------------------------

    const intervalTwo = setTimeout(() => {
      if (counterTwo < 9) {
        counterTwo++;
      } else {
        counterTwo = 0;
      }
      setSecondsTwo(counterTwo);

      const delayedInterval = setInterval(() => {
        if (counterTwo < 9) {
          counterTwo++;
        } else {
          counterTwo = 0;
        }
        setSecondsTwo(counterTwo);
      }, 10000);
      return () => clearInterval(delayedInterval);
    }, 10000);

    // 3 --------------------------

    const intervalThree = setTimeout(() => {
      if (counterThree < 9) {
        counterThree++;
      } else {
        counterThree = 0;
      }
      setSecondsThree(counterThree);

      const delayedIntervalTwo = setInterval(() => {
        if (counterThree < 9) {
          counterThree++;
        } else {
          counterThree = 0;
        }
        setSecondsThree(counterThree);
      }, 100000);
      return () => clearInterval(delayedIntervalTwo);
    }, 100000);

    // 4 --------------------------

    const intervalFour = setTimeout(() => {
      if (counterFour < 9) {
        counterFour++;
      } else {
        counterFour = 0;
      }
      setSecondsFour(counterFour);

      const delayedIntervalThree = setInterval(() => {
        if (counterFour < 9) {
          counterFour++;
        } else {
          counterFour = 0;
        }
        setSecondsFour(counterFour);
      }, 1000000);
      return () => clearInterval(delayedIntervalThree);
    }, 1000000);

    // 4 --------------------------

    const intervalFive = setTimeout(() => {
      if (counterFive < 9) {
        counterFive++;
      } else {
        counterFive = 0;
      }
      setSecondsFive(counterFive);

      const delayedIntervalFour = setInterval(() => {
        if (counterFive < 9) {
          counterFive++;
        } else {
          counterFive = 0;
        }
        setSecondsFive(counterFive);
      }, 10000000);
      return () => clearInterval(delayedIntervalFour);
    }, 10000000);

    // cleanup function that clears all the intervals when the component unmounts:

    return () => {
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
      clearInterval(intervalThree);
      clearInterval(intervalFour);
      clearInterval(intervalFive);
    };
  }, []);

  return (
    <div className="flex justify-center flex-row">
      <div className={` ${styles.numberBox}`}>
        <div className={`${styles.number}`}> {secondsFive}</div>
      </div>
      <div className={` ${styles.numberBox}`}>
        <div className={`${styles.number}`}> {secondsFour}</div>
      </div>
      <div className={` ${styles.numberBox}`}>
        <div className={`${styles.number}`}> {secondsThree}</div>
      </div>
      <div className={` ${styles.numberBox}`}>
        <div className={`${styles.number}`}> {secondsTwo}</div>
      </div>
      <div className={` ${styles.numberBox}`}>
        <div className={`${styles.number}`}> {secondsOne}</div>
      </div>
    </div>
  );
};

export default SecondsCounter;
