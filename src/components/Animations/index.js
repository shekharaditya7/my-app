import { useState } from "react";
import styles from "./index.module.scss";
import ANIMATIONS from "./animations.constants";
import CustomSelect from "../Widgets/CustomSelect";

export default function Animations() {
  const [activeAnimation, setActiveAnimation] = useState("");

  return (
    <div className={styles.wrapper}>
      <CustomSelect
        options={ANIMATIONS}
        placeholder={"Choose an animation ..."}
        onChange={({ option }) => setActiveAnimation(option)}
      ></CustomSelect>
      {activeAnimation?.component}
    </div>
  );
}
