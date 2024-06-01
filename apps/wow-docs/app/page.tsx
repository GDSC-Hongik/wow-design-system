"use client";

import { css } from "@styled-system/css/css";
import { useState } from "react";
import { UpArrow } from "wowds-icons";
import Switch from "wowds-ui/Switch";

import Checkbox from "../../../packages/wow-ui/src/components/Checkbox";

const Home = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <main
        className={css({
          color: "textBlack",
          textStyle: "h1",
          bg: "backgroundAlternative",
        })}
      >
        <p>docs</p>
        <UpArrow />
      </main>
      <Switch />
      <Checkbox checked={checked} onChange={handleChange}></Checkbox>
    </>
  );
};

export default Home;
