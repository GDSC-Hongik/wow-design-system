import type { ForwardRefExoticComponent } from "react";

import type { TableProps } from "@/components/Table/Table";
import type Tbody from "@/components/Table/Tbody";
import type Td from "@/components/Table/Td";
import type Th from "@/components/Table/Th";
import type Thead from "@/components/Table/Thead";
import type Tr from "@/components/Table/Tr";

export interface TableComponentType
  extends ForwardRefExoticComponent<
    TableProps & React.RefAttributes<HTMLTableElement>
  > {
  Thead: typeof Thead;
  Th: typeof Th;
  Tbody: typeof Tbody;
  Tr: typeof Tr;
  Td: typeof Td;
}
