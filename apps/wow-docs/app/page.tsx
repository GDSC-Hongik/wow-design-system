import { css } from "@styled-system/css/css";
import Checkbox from "wowds-ui/Checkbox";
import Chip from "wowds-ui/Chip";
import Switch from "wowds-ui/Switch";

const Home = () => {
  return (
    <>
      <Checkbox />
      <Chip label="Chip" />
      <Switch />
      <main
        className={css({
          color: "textBlack",
          textStyle: "h1",
          bg: "backgroundAlternative",
        })}
      >
        <p>docs</p>
      </main>
    </>
  );
};

export default Home;
