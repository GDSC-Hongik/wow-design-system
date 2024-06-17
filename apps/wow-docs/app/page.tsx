import Checkbox from "wowds-ui/Checkbox";
import Chip from "wowds-ui/Chip";
import MultiGroup from "wowds-ui/MultiGroup";
import RadioButton from "wowds-ui/RadioButton";
import RadioGroup from "wowds-ui/RadioGroup";
import Switch from "wowds-ui/Switch";

const Home = () => {
  return (
    <>
      <Checkbox value="checkbox" />
      <Chip label="Chip" />
      <Switch value="switch" />
      <RadioGroup defaultValue="1학년" name="학년">
        <RadioButton label="1학년" value="1학년" />
        <RadioButton label="2학년" value="2학년" />
      </RadioGroup>
      <MultiGroup variant="checkbox">
        <Checkbox children="checkbox1" value="checkbox1" />
        <Checkbox children="checkbox2" value="checkbox2" />
        <Checkbox children="checkbox3" value="checkbox3" />
        <Checkbox children="checkbox4" value="checkbox4" />
      </MultiGroup>
      <MultiGroup variant="switch">
        <Switch label="switch1" value="switch1" />
        <Switch label="switch2" value="switch2" />
        <Switch label="switch3" value="switch3" />
        <Switch label="switch4" value="switch4" />
      </MultiGroup>
    </>
  );
};

export default Home;
