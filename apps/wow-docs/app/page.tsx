import { css } from "@styled-system/css/css";
import { UpArrow } from "wowds-icons";
import { space } from "wowds-tokens";
import Button from "wowds-ui/Button";

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
        <UpArrow />
      </main>
      <Button>버튼</Button>
    </>
  );
};

export default Home;
