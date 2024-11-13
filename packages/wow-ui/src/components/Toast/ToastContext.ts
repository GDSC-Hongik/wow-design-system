import { createContext } from "react";

import useSafeContext from "@/hooks/useSafeContext";

import type { ToastProps } from ".";

interface ToastContextProps {
  toasts: ToastProps[];
  addToast: (
    toast: Omit<ToastProps, "id"> & Partial<Pick<ToastProps, "id">>
  ) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
);

export const useToastContext = () => {
  const context = useSafeContext(ToastContext);
  return context;
};
