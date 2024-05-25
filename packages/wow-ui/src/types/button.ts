import type { CSSProperties, MouseEvent } from "react";

export type ButtonElementType = "button" | "div" | "span" | "input";

// 버튼의 주요한 HTML Attributes를 미리 정의한 ButtonProps 타입입니다. [https://www.w3schools.com/tags/tag_button.asp]

export interface BasicButtonProps<T extends ButtonElementType = "button"> {
  /**
   * 버튼의 ID를 지정합니다.
   */
  id?: string;

  /**
   * 웹 페이지가 로드되었을때 해당 버튼을 자동으로 포커싱할지 결정합니다.
   */
  autofocus?: boolean;

  /** 버튼의 disabled 여부를 결정합니다. e.g 'true' or 'false' */
  disabled?: boolean;

  /**
   * 버튼의 이름을 결정합니다.
   */
  name?: string;

  /**
   * form과 함께 사용되었을때, HTML에서 button의 타입을 결정합니다.
   * @default 'button'
   */
  type?: "button" | "submit" | "reset";

  /**
   * HTML에서 버튼을 어떤 타입으로 랜더링할지 결정합니다. e.g. 'div', 'a', 'span', 'input'.
   * @default 'button'
   */
  as?: T;

  /**
   * wow-ds에서 지정하고 있는 스타일을 제외하고 사용자가 React 스타일 객체를 이용하여 커스텀하게 스타일을 적용할 수 있도록 합니다.
   */

  customStyle?: CSSProperties;

  /**
   * 버튼이 클릭되었을때 호출되는 함수입니다.
   */
  onClick?: (event: MouseEvent) => void;

  /**
   * 버튼에서 나타내고 있는 string value를 나타냅니다.
   */
  "aria-label"?: string;
  /**
   * 버튼에서 나타내고 있는 string value를 나타냅니다.
   */
  "aria-labelledby"?: string;
  /**
   * 버튼이 어떤 역할을 하는지를 묘사하는 속성입니다. 이는 버튼의 ID와 설명에 대해 다룹니다.
   */
  "aria-describedby"?: string;
  /**
   * 버튼이 사용 불가능 상황일때, true 속성으로 변경해야 합니다.
   */
  "aria-disabled"?: string;
}

export interface ToggleButtonProps<T extends ButtonElementType = "button">
  extends BasicButtonProps<T> {
  /** 해당 버튼이 선택되었는지 판단합니다. */
  isSelected?: boolean;

  /** 해당 요소가 기본적으로 선택되어 있는 상태인지 판단합니다. */
  defaultSelected?: boolean;

  /** 버튼의 상태를 바꾸는 함수입니다.*/
  onChange?: (isSelected: boolean) => void;

  /**
   * 버튼이 토글되었을때, true로 변경합니다. 만약 버튼이 토글되지 않았으면, false로 설정합니다.
   */
  "aria-pressed"?: string;
}

export interface MenuButtonProps<T extends ButtonElementType = "button">
  extends BasicButtonProps<T> {
  /**
   * menuButton으로 사용될 경우 해당 값이 'menu'나 'true'로 설정되어 있어야 합니다.
   */
  "aria-haspopup"?: string;

  /**
   * button의 역할은 'menu'로 명시되어 있어야 합니다.
   * @default 'menu'
   */
  role?: string;

  /**
   * menu가 보여지고 있을 때, button 속성을 가지고 있는 요소는 true값으로 설정되어야 합니다. 만약 메뉴가 사라지거나 숨겨지면, false로 설정합니다.
   */
  "aria-expanded"?: string;

  /**
   * menu 속성을 가진 button은 'menu'로 설정되어 있어야 합니다.
   * @default 'menu'
   */
  "aria-controls"?: string;
}
