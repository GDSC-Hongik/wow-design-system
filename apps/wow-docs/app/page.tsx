import { css } from "@styled-system/css/css";
import { UpArrow } from "wowds-icons";

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
    </>
  );
};

export default Home;
