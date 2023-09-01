import styles from "../styles.tsx";

const ScreenButton = () => {
  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <button
      className={`${styles.button}`}
      id="fullscreen"
      onClick={handleFullScreen}
    >
      SCREEN
    </button>
  );
};

export default ScreenButton;
