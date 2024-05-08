import { css } from "@styled-system/css/css";
import { UpArrow } from "wowds-icons";
import { Button } from "wowds-ui";

export default function Home() {
  return (
    <>
      <main
        className={css({
          color: "blue.800",
          textStyle: "h1",
        })}
      >
        <p>docs</p>
        <UpArrow />
      </main>
      <Button>버튼</Button>
    </>
  );
}