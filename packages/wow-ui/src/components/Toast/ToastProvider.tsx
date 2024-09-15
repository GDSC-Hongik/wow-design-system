"use client";

import { Flex } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { useState } from "react";

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
      id: props.id || Date.now().toString(),
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <Flex
        gap="sm"
        height="100vh"
        justifyContent="center"
        left={0}
        position="fixed"
        top={0}
        width="100vw"
        zIndex="9999"
      >
        {toasts?.map((toast: ToastProps) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </Flex>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
