import { css, cva } from "@styled-system/css";
import type { Token } from "@styled-system/tokens";
import { token } from "@styled-system/tokens";
import { clsx } from "clsx";
import type { CSSProperties } from "react";
import { forwardRef } from "react";
import { DoubleArrow, RightArrow } from "wowds-icons";
import type { ColorToken } from "wowds-theme";

import usePagination from "@/hooks/usePagination";

/**
 * @description 페이지의 개수를 랜더링할 수 있는 페이지네이션 컴포넌트입니다.
 *
 * @param {number} totalPages 페이지의 총 개수입니다.
 * @param {number} currentPage 외부에서 주입할 수 있는 현재 페이지입니다.
 * @param {number} defaultPage 기본 페이지입니다.
 * @param {ColorToken} pageButtonBackgroundColor 페이지네이션 컴포넌트 버튼 색을 변경합니다.
 * @param {(page: number) => void} [onChange] 외부에서 페이지 값의 변화를 감지할 수 있는 함수입니다.
 * @param {() => void} [style] 페이지네이션 컴포넌트에 커스텀하게 전달할 style입니다.
 * @param {string} [className] 페이지네이션 컴포넌트에 전달하는 커스텀 클래스를 설정합니다.
 * @param {Ref<HTMLAnchorElement>} [ref] ref 렌더링된 요소 또는 컴포넌트에 연결할 ref입니다.
 */

export interface PaginationProps {
  totalPages: number;
  defaultPage?: number;
  currentPage?: number;
  pageButtonBackgroundColor?: ColorToken;
  onChange?: (page: number) => void;
  style?: CSSProperties;
  className?: string;
}

const Pagination = forwardRef<HTMLAnchorElement, PaginationProps>(
  (
    {
      totalPages,
      defaultPage,
      onChange,
      style,
      className,
      pageButtonBackgroundColor,
      currentPage: currentPageProp,
    },
    ref
  ) => {
    const {
      currentPage,
      getPageRange,
      handleClickNextGroup,
      handleClickPrevGroup,
      handleClickPage,
      handleClickPrevPage,
      handleClickNextPage,
    } = usePagination(totalPages, onChange, defaultPage, currentPageProp);

    const { start, end } = getPageRange();
    function addDotBetweenLettersAndNumbers(str: string) {
      return str.replace(/([a-zA-Z]+)(\d+)/g, "$1.$2");
    }
    const customBackgroundColor = (color: ColorToken | undefined) => {
      if (color) {
        const colorToken = color.replace(/([a-zA-Z]+)(\d+)/g, "$1.$2");
        return token.var(
          `colors.${addDotBetweenLettersAndNumbers(colorToken)}` as Token
        );
      }
    };

    return (
      <nav
        aria-label="pagination"
        className={clsx(paginationContainer, className)}
        ref={ref}
        role="navigation"
        style={style}
      >
        <ul className={paginationUlStyle}>
          <li className={paginationButtonGroupStyle}>
            <button
              aria-label="Previous page group"
              className={paginationButtonStyle}
              disabled={start === 1}
              style={{
                backgroundColor: customBackgroundColor(
                  pageButtonBackgroundColor
                ),
              }}
              onClick={handleClickPrevGroup}
            >
              <DoubleArrow
                height={20}
                stroke={start === 1 ? "lightDisabled" : "outline"}
                style={{ rotate: "180deg" }}
                width={20}
              />
            </button>
            <button
              aria-label="Previous page"
              className={paginationButtonStyle}
              style={{
                backgroundColor: customBackgroundColor(
                  pageButtonBackgroundColor
                ),
              }}
              onClick={handleClickPrevPage}
            >
              <RightArrow
                height={20}
                stroke="outline"
                style={{ rotate: "180deg" }}
                width={20}
              />
            </button>
          </li>
          <li className={paginationPageGroupStyle}>
            {Array.from({ length: end - start + 1 }, (_, index) => {
              const page = start + index;
              return (
                <button
                  aria-current={currentPage === page ? true : false}
                  key={page}
                  className={paginationItemStyle({
                    selected: currentPage === page,
                  })}
                  style={{
                    backgroundColor: customBackgroundColor(
                      pageButtonBackgroundColor
                    ),
                  }}
                  onClick={() => handleClickPage(page)}
                >
                  {page}
                </button>
              );
            })}
          </li>
          <li className={paginationButtonGroupStyle}>
            <button
              aria-label="Next page"
              className={paginationButtonStyle}
              style={{
                backgroundColor: customBackgroundColor(
                  pageButtonBackgroundColor
                ),
              }}
              onClick={handleClickNextPage}
            >
              <RightArrow height={20} stroke="outline" width={20} />
            </button>
            <button
              aria-label="Next page group"
              className={paginationButtonStyle}
              disabled={end === totalPages}
              style={{
                backgroundColor: customBackgroundColor(
                  pageButtonBackgroundColor
                ),
              }}
              onClick={handleClickNextGroup}
            >
              <DoubleArrow
                height={20}
                stroke={end === totalPages ? "lightDisabled" : "outline"}
                width={20}
              />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
);

export default Pagination;

const paginationContainer = css({
  display: "flex",
  flexDirection: "row",
  gap: "4px",
  maxHeight: "24px",
});

const paginationButtonGroupStyle = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "24px",
  marginX: "4px",
});

const paginationPageGroupStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const paginationButtonStyle = css({
  minHeight: "24px",
  minWidth: "24px",
  borderRadius: "sm",
  backgroundColor: "backgroundAlternative",
  color: "sub",
  boxSizing: "border-box",
  textStyle: "body1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  _pressed: {
    backgroundColor: "monoBackgroundPressed",
    borderColor: "sub",
    border: "1px solid",
  },
  _disabled: {
    backgroundColor: "Background",
    cursor: "not-allowed",
  },
});

const paginationItemStyle = cva({
  base: {
    minWidth: "24px",
    maxHeight: "24px",
    borderRadius: "sm",
    color: "sub",
    boxSizing: "border-box",
    textStyle: "body1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    _pressed: {
      backgroundColor: "monoBackgroundPressed",
      borderColor: "sub",
      border: "1px solid",
    },
    _disabled: {
      backgroundColor: "Background",
      cursor: "not-allowed",
      color: "lightDisabled",
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: "Background",
        borderColor: "primary",
        border: "1px solid",
        color: "black",
      },
      false: {
        backgroundColor: "backgroundAlternative",
      },
    },
  },
});

const paginationUlStyle = css({
  listStyleType: "none",
  display: "flex",
});
