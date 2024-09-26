"use client";

import { Flex } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import type { ToastProps } from ".";
import Toast from ".";
import { ToastContext } from "./ToastContext";

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (
    props: Omit<ToastProps, "id"> & Partial<Pick<ToastProps, "id">>
  ) => {
    const newToast = {
      ...props,
      id: props.id || uuidv4(),
    };
    console.log(newToast.id);
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

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
          {toasts?.map((toast: ToastProps) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </Flex>
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
