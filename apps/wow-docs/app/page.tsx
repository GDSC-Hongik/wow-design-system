import { css } from "@styled-system/css/css";
import Switch from "wowds-ui/Switch";

import Checkbox from "../../../packages/wow-ui/src/components/Checkbox";

const Home = () => {
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
      </main>
      <Switch />
      <Checkbox />
    </>
  );
};

export default Home;
