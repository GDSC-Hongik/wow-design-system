import Link from "next/link";
import { redirect } from "next/navigation";
import Button from "wowds-ui/Button";
import Checkbox from "wowds-ui/Checkbox";
import Chip from "wowds-ui/Chip";
import Divider from "wowds-ui/Divider";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";
import MultiGroup from "wowds-ui/MultiGroup";
import RadioButton from "wowds-ui/RadioButton";
import RadioGroup from "wowds-ui/RadioGroup";
import SearchBar from "wowds-ui/SearchBar";
import Switch from "wowds-ui/Switch";

import { routePath } from "@/constants/routePath";

const Home = () => {
  return redirect(routePath.overview);
};

export default Home;
