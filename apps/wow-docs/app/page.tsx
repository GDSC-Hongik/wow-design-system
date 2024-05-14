import { css } from "@styled-system/css/css";
import { UpArrow } from "wowds-icons";
import Button from "wowds-ui/Button";

export default function Home() {
  return (
    <>
      <main
        className={css({
          color: "textWhite",
          textStyle: "h1",
          bgGradient: "blueGradientDark",
        })}
      >
        <p>docs</p>
        <UpArrow />
      </main>
      <Button>버튼</Button>
    </>
  );
}
