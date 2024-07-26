import type { PropsWithChildren, ReactNode } from "react";
import { createContext, useMemo, useRef } from "react";

import useSafeContext from "../../../hooks/useSafeContext";

type ItemData = {
  value: string;
  text: ReactNode;
};

type ContextValue = {
  itemMap: Map<ItemData["value"], { text: ItemData["text"] }>;
  //collectionRef: React.RefObject<HTMLElement>;
};

const CollectionContext = createContext<ContextValue | null>(null);

export const useCollectionContext = () => {
  const context = useSafeContext(CollectionContext);
  return context;
};

export const CollectionProvider = ({ children }: PropsWithChildren) => {
  //const collectionRef = useRef<ItemElement>(null);
  const itemMap = useMemo(
    () => new Map<ItemData["value"], { text: ItemData["text"] }>(),
    []
  );

  return (
    <CollectionContext.Provider value={{ itemMap }}>
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollection = () => {
  const context = useCollectionContext();
  return context.itemMap;
};
