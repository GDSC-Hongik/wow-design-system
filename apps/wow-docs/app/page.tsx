import { css } from "@styled-system/css/css";
import Checkbox from "wowds-ui/Checkbox";
import Switch from "wowds-ui/Switch";

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
