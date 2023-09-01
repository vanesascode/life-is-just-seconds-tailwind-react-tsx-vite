import styles from "../styles.tsx";

const ModeButton = () => {
  const handleToggleMode = () => {
    const element = document.body;
    element.classList.toggle("light-mode");
  };

  return (
    <button
      className={`${styles.button}`}
      id="fullscreen"
      onClick={handleToggleMode}
    >
      MODE
    </button>
  );
};

export default ModeButton;
