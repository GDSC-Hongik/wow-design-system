import type { PropsWithChildren, ReactNode } from "react";
import { createContext, useMemo } from "react";

import useSafeContext from "@/hooks/useSafeContext";

type ItemData = {
  value: string;
  text: ReactNode;
};

type ContextValue = {
  itemMap: Map<ItemData["value"], ItemData["text"]>;
};

const CollectionContext = createContext<ContextValue | null>(null);

export const useCollectionContext = () => {
  const context = useSafeContext(CollectionContext);
  return context;
};

export const CollectionProvider = ({ children }: PropsWithChildren) => {
  const itemMap = useMemo(
    () => new Map<ItemData["value"], ItemData["text"]>(),
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
