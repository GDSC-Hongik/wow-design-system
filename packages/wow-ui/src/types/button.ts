import type { CSSProperties, ElementType } from "react";

export type ButtonElementType = Extract<ElementType, "button" | "div" | "span">;

// 버튼의 주요한 HTML Attributes를 미리 정의한 ButtonProps 타입입니다. [https://www.w3schools.com/tags/tag_button.asp]

export interface BasicButtonProps {
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
   * wow-ds에서 지정하고 있는 스타일을 제외하고 사용자가 React 스타일 객체를 이용하여 커스텀하게 스타일을 적용할 수 있도록 합니다.
   */

  customStyle?: CSSProperties;

  /**
   * 버튼이 클릭되었을때 호출되는 함수입니다.
   */
  onClick?: () => void;

  /**
   * 접근성을 위해 Key를 눌렀을 때 발생하는 이벤트를 감지합니다.
   */
  onKeyDown?: () => void;

  /**
   * 접근성을 위해 Key를 눌렀을 때 발생하는 이벤트를 감지합니다.
   */
  onKeyUp?: () => void;
}

export interface ToggleButtonProps extends BasicButtonProps {
  /** 해당 버튼이 선택되었는지 판단합니다. */
  isChecked?: boolean;

  /** 해당 요소가 기본적으로 선택되어 있는 상태인지 판단합니다. */
  defaultChecked?: boolean;
}

export interface MenuButtonProps extends BasicButtonProps {
  /**
   * menuButton으로 사용될 경우 해당 값이 'menu'나 'true'로 설정되어 있어야 합니다.
   */
  "aria-haspopup"?: string;

  /**
   * button의 역할은 'menu'로 명시되어 있어야 합니다.
   * @default 'menu'
   */
  role?: string;
}
