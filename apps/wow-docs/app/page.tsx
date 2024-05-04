import { css } from "../styled-system/css/css";
import { UpArrow } from "wow-icons";

export default function Home() {
  return (
    <main
      className={css({
        color: "blue.800",
        textStyle: "h1",
      })}
    >
      <UpArrow />
    </main>
  );
}
