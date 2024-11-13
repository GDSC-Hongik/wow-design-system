import { useToastContext } from "./ToastContext";

const useToast = () => {
  const { addToast, removeToast } = useToastContext();

  return {
    toast: addToast,
    removeToast,
  };
};

export default useToast;
