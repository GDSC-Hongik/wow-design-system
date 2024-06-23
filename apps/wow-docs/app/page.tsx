import Checkbox from "wowds-ui/Checkbox";
import Chip from "wowds-ui/Chip";
import RadioButton from "wowds-ui/RadioButton";
import RadioGroup from "wowds-ui/RadioGroup";
import Switch from "wowds-ui/Switch";

const Home = () => {
  return (
    <>
      <Checkbox />
      <Chip label="Chip" />
      <Switch />

      <RadioGroup defaultValue="1학년" name="학년">
        <RadioButton label="1학년" value="1학년" />
        <RadioButton label="2학년" value="2학년" />
      </RadioGroup>
    </>
  );
};

export default Home;
