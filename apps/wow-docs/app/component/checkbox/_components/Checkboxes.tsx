"use client";

import { useEffect, useRef } from "react";
import Checkbox from "wowds-ui/Checkbox";

const Checkboxes = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute("data-pressed", "true");
    }
  }, []);

  return (
    <>
      <Checkbox checked />
      <Checkbox
        checked
        inputProps={
          { ref: inputRef } as React.InputHTMLAttributes<HTMLInputElement>
        }
      />
      <Checkbox checked disabled />
      <Checkbox />
      <Checkbox
        inputProps={
          { ref: inputRef } as React.InputHTMLAttributes<HTMLInputElement>
        }
      />
      <Checkbox disabled />
    </>
  );
};

export default Checkboxes;
