import { Folder, Home } from "wowds-icons";
export const navMenu = [
  {
    href: "/overview",
    icon: Home,
    alt: "home icon",
    label: "Overview",
  },
  {
    href: "/foundation",
    icon: Folder,
    alt: "folder icon",
    label: "Foundation",
    children: [
      { href: "/color", label: "Color" },
      { href: "/typography", label: "Typography" },
      { href: "/grid", label: "Grid" },
      { href: "/spacing", label: "Spacing" },
      { href: "/icon", label: "Icon" },
      { href: "/graphic", label: "Graphic" },
    ],
  },
  {
    href: "/component",
    icon: Folder,
    alt: "folder icon",
    label: "Component",
    children: [
      { label: "Avatar", href: "/avatar" },
      { label: "Box", href: "/box" },
      { label: "Button", href: "/button" },
      { label: "Checkbox", href: "/checkbox" },
      { label: "Chip", href: "/chip" },
      { label: "Divider", href: "/divider" },
      { label: "DropDown", href: "/dropdown" },
      { label: "Header", href: "/header" },
      { label: "MultiGroup", href: "/multigroup" },
      { label: "Pagination", href: "/pagination" },
      { label: "Picker", href: "/picker" },
      { label: "RadioGroup", href: "/radiogroup" },
      { label: "SearchBar", href: "/searchbar" },
      { label: "Spinner", href: "/spinner" },
      { label: "Stepper", href: "/stepper" },
      { label: "Switch", href: "/switch" },
      { label: "Table", href: "/table" },
      { label: "Tabs", href: "/tabs" },
      { label: "Tag", href: "/tag" },
      { label: "TextButton", href: "/textbutton" },
      { label: "TextField", href: "/textfield" },
      { label: "Toast", href: "/toast" },
    ],
  },
];
