import { Flex, styled } from "@styled-system/jsx";
import { useMemo, useState } from "react";

import DropDown from "@/components/DropDown";
import DropDownOption from "@/components/DropDown/DropDownOption";
import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";

const TimePicker = () => {
  const hours = useMemo(
    () => new Array(24).fill(0).map((_, i) => i.toString()),
    []
  );
  const minutes = useMemo(
    () => new Array(60).fill(0).map((_, i) => i.toString()),
    []
  );

  const [isAM, setIsAM] = useState<boolean>(true);

  return (
    <Flex>
      <styled.button
        className={pickerButtonStyle({ variant: "time" })}
        onClick={() => setIsAM((prev) => !prev)}
      >
        {isAM ? "AM" : "PM"}
      </styled.button>
      <DropDown
        trigger={
          <styled.button className={pickerButtonStyle({ variant: "time" })}>
            00
          </styled.button>
        }
      >
        {hours.map((hour) => (
          <DropDownOption
            key={hour}
            text={hour.padStart(2, "0")}
            value={hour}
          ></DropDownOption>
        ))}
      </DropDown>
      <DropDown
        trigger={
          <styled.button className={pickerButtonStyle({ variant: "time" })}>
            00
          </styled.button>
        }
      >
        {minutes.map((minute) => (
          <DropDownOption
            key={minute}
            text={minute.padStart(2, "0")}
            value={minute}
          ></DropDownOption>
        ))}
      </DropDown>
    </Flex>
  );
};

export default TimePicker;
