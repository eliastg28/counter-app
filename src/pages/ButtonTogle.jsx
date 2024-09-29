import ToggleButton from "../components/Buttons/TogleButton";
import useToggle from "../hooks/Button/useTogle";

export const ButtonTogle = () => {
  const [isOn, toggleIsOn] = useToggle();
  
  return (
    <>
      <h1>My Togle Button App</h1>
      <div style={{ display: "flex", flex: "row", gap: "100px" }}>
        <ToggleButton isOn={isOn} onToggle={toggleIsOn} />
      </div>
    </>
  );
};
