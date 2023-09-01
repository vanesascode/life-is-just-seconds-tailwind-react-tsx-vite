import SecondsCounter from "./components/SecondsCounter";
import Sphere from "./components/Sphere";
import ScreenButton from "./components/ScreenButton";
import ModeButton from "./components/ModeButton";
import styles from "./styles";

function App() {
  return (
    <>
      {/* SPACE SETTINGS */}

      <div className={` ${styles.paddingX} ${styles.flexCenter} h-screen`}>
        <div className={`${styles.boxWidth}`}>
          {/* ELEMENTS */}

          <div className="flex flex-col justify-center items-center">
            {/* TITLE */}

            <h1 className={`${styles.heading1}`}>
              <a href="https://github.com/vanesascode" target="_blank">
                Life is just seconds
              </a>
            </h1>

            {/* COUNTER */}

            <div className="mt-[30px]">
              <SecondsCounter />
            </div>

            {/* CLOCK */}

            <div className="mt-[50px]">
              <Sphere />
            </div>

            {/* BUTTONS */}
            <div className={`${styles.flexCenter} mt-[50px] mb-[30px]`}>
              <div>
                <ScreenButton />
              </div>
              <div>
                <ModeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
