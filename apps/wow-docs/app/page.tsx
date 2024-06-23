import Checkbox from "wowds-ui/Checkbox";
import Chip from "wowds-ui/Chip";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";
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
      <DropDown placeholder="목록을 입력하세요">
        <DropDownOption text="option 1" value="option 1" />
        <DropDownOption text="option 1" value="option 2" />
      </DropDown>
    </>
  );
};

export default Home;
