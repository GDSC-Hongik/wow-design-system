import { Folder, Home } from "wowds-icons";

import { componentPaths, foundationPaths, routePath } from "./routePath"; // routePath를 가져온다고 가정

export const navMenu = [
  {
    href: routePath.overview,
    icon: Home,
    alt: "home icon",
    label: "Overview",
  },
  {
    href: routePath.foundation.base,
    icon: Folder,
    alt: "folder icon",
    label: "Foundation",
    children: [
      { href: `/${foundationPaths.color}`, label: "Color" },
      { href: `/${foundationPaths.typography}`, label: "Typography" },
      { href: `/${foundationPaths.grid}`, label: "Grid" },
      { href: `/${foundationPaths.spacing}`, label: "Spacing" },
      { href: `/${foundationPaths.icon}`, label: "Icon" },
      { href: `/${foundationPaths.graphic}`, label: "Graphic" },
    ],
  },
  {
    href: routePath.component.base,
    icon: Folder,
    alt: "folder icon",
    label: "Component",
    children: [
      { label: "ActionSheet", href: `/${componentPaths.actionsheet}` },
      { label: "Avatar", href: `/${componentPaths.avatar}` },
      { label: "Box", href: `/${componentPaths.box}` },
      { label: "Button", href: `/${componentPaths.button}` },
      { label: "Checkbox", href: `/${componentPaths.checkbox}` },
      { label: "Chip", href: `/${componentPaths.chip}` },
      { label: "Divider", href: `/${componentPaths.divider}` },
      { label: "DropDown", href: `/${componentPaths.dropdown}` },
      { label: "Header", href: `/${componentPaths.header}` },
      { label: "Pagination", href: `/${componentPaths.pagination}` },
      { label: "Picker", href: `/${componentPaths.picker}` },
      { label: "RadioButton", href: `/${componentPaths.radiobutton}` },
      { label: "SearchBar", href: `/${componentPaths.searchBar}` },
      { label: "Spinner", href: `/${componentPaths.spinner}` },
      { label: "Stepper", href: `/${componentPaths.stepper}` },
      { label: "Switch", href: `/${componentPaths.switch}` },
      { label: "Table", href: `/${componentPaths.table}` },
      { label: "Tab Bar", href: `/${componentPaths.tabBar}` },
      { label: "Tag", href: `/${componentPaths.tag}` },
      { label: "TextButton", href: `/${componentPaths.textButton}` },
      { label: "TextField", href: `/${componentPaths.textField}` },
      { label: "Toast", href: `/${componentPaths.toast}` },
    ],
  },
];
