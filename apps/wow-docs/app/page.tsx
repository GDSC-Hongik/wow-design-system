import Checkbox from "wowds-ui/Checkbox";
import Chip from "wowds-ui/Chip";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";
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
      <DropDown placeholder="목록을 입력하세요">
        <DropDownOption text="option 1" value="option 1" />
        <DropDownOption text="option 1" value="option 2" />
      </DropDown>
      <MultiGroup variant="checkbox">
        <Checkbox label="checkbox1" value="checkbox1" />
        <Checkbox label="checkbox2" value="checkbox2" />
        <Checkbox label="checkbox3" value="checkbox3" />
        <Checkbox label="checkbox4" value="checkbox4" />
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
