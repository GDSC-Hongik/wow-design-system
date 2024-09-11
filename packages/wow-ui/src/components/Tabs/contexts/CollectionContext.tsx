"use client";

import type { PropsWithChildren } from "react";
import { createContext } from "react";

import useSafeContext from "@/hooks/useSafeContext";

interface CollectionContextProps {
  values: string[];
}

const CollectionContext = createContext<CollectionContextProps | null>(null);

export const useCollectionContext = () => {
  const context = useSafeContext(CollectionContext);
  return context;
};

export const CollectionProvider = ({ children }: PropsWithChildren) => {
  return (
    <CollectionContext.Provider value={{ values: [] }}>
      {children}
    </CollectionContext.Provider>
  );
};
