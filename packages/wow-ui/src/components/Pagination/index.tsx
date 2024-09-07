import { css, cva } from "@styled-system/css";
import type { ColorPalette } from "@styled-system/tokens";
import { clsx } from "clsx";
import type { CSSProperties } from "react";
import { forwardRef } from "react";
import { DoubleArrow, RightArrow } from "wowds-icons";

import usePage from "@/hooks/usePage";

/**
 * @description 페이지의 개수를 랜더링할 수 있는 페이지네이션 컴포넌트입니다.
 *
 * @param {number} totalPages 페이지의 총 개수입니다.
 * @param {number} currentPage 현재 페이지입니다.
 * @param {(page: number) => void} [onChange] 외부에서 페이지 값의 변화를 감지할 수 있는 함수입니다.
 * @param {() => void} [style] 페이지네이션 컴포넌트에 커스텀하게 전달할 style입니다.
 * @param {ColorPalette} [backgroundColor] 페이지네이션 컴포넌트의 박스 색을 변경할 수 있습니다.
 * @param {string} [className] 페이지네이션 컴포넌트에 전달하는 커스텀 클래스를 설정합니다.
 * @param {Ref<HTMLAnchorElement>} [ref] ref 렌더링된 요소 또는 컴포넌트에 연결할 ref입니다.
 */

export interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  onChange?: (page: number) => void;
  style?: CSSProperties;
  className?: string;
}

const Pagination = forwardRef<HTMLAnchorElement, PaginationProps>(
  (
    { totalPages, currentPage: currentPageProps, onChange, style, className },
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
    } = usePage(totalPages, onChange, currentPageProps);

    const { start, end } = getPageRange();

    return (
      <nav
        aria-label="pagination"
        className={clsx(PaginationContainer, className)}
        ref={ref}
        role="navigation"
        style={style}
      >
        <div className={PaginationButtonGroup}>
          <button
            className={PaginationButtonStyle}
            disabled={start === 1}
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
            className={PaginationButtonStyle}
            onClick={handleClickPrevPage}
          >
            <RightArrow
              height={20}
              stroke="outline"
              style={{ rotate: "180deg" }}
              width={20}
            />
          </button>
        </div>
        {Array.from({ length: end - start + 1 }, (_, index) => {
          const page = start + index;
          return (
            <button
              aria-current={currentPage === page ? true : false}
              key={page}
              className={PaginationItemStyle({
                selected: currentPage === page,
              })}
              onClick={() => handleClickPage(page)}
            >
              {page}
            </button>
          );
        })}
        <div className={PaginationButtonGroup}>
          <button
            className={PaginationButtonStyle}
            onClick={handleClickNextPage}
          >
            <RightArrow height={20} stroke="outline" width={20} />
          </button>
          <button
            className={PaginationButtonStyle}
            disabled={end === totalPages}
            onClick={handleClickNextGroup}
          >
            <DoubleArrow
              height={20}
              stroke={end === totalPages ? "lightDisabled" : "outline"}
              width={20}
            />
          </button>
        </div>
      </nav>
    );
  }
);

export default Pagination;

const PaginationContainer = css({
  display: "flex",
  flexDirection: "row",
  gap: "4px",
  maxHeight: "24px",
});

const PaginationButtonGroup = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "24px",
});

const PaginationButtonStyle = css({
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

const PaginationItemStyle = cva({
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
      },
      false: {
        backgroundColor: "backgroundAlternative",
      },
    },
  },
});
