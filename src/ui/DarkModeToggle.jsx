import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
