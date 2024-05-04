import { css } from "../styled-system/css/css";

export default function Home() {
  return (
    <main
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        color: "blue.400",
      })}
    >
      docs
    </main>
  );
}
