import { css } from "@styled-system/css/css";
import Checkbox from "wowds-ui/Checkbox";
import Chip from "wowds-ui/Chip";
import { RadioButton, RadioGroup } from "wowds-ui/RadioGroup";
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
      <Checkbox />
      <RadioGroup defaultValue="1학년" name="학년">
        <RadioButton label="1학년" />
        <RadioButton label="2학년" />
        <RadioButton label="3학년" />
        <RadioButton disabled label="4학년" />
      </RadioGroup>
    </>
  );
};

export default Home;
