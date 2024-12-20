"use client";

import { Flex } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import type { ToastProps } from ".";
import Toast from ".";
import { ToastContext } from "./ToastContext";

interface ToastProviderProps {
  children: ReactNode;
  idPattern?: RegExp;
}

const ToastProvider = ({ children, idPattern }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (
    props: Omit<ToastProps, "id"> & Partial<Pick<ToastProps, "id">>
  ) => {
    const newToast = {
      ...props,
      id: props.id || uuidv4(),
    };

    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const filteredToasts = idPattern
    ? toasts.filter((toast) => idPattern.test(toast.id))
    : toasts;

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {toasts.length > 0 && (
        <Flex
          align="center"
          direction="column"
          gap="xs"
          height="100vh"
          left={0}
          position="fixed"
          top="1.5rem"
          width="100vw"
          zIndex="overlay"
        >
          {filteredToasts?.map((toast: ToastProps) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </Flex>
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
