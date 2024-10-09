import { useCallback, useEffect, useState } from "react";

const ITEM_PER_PAGE = 5;

const usePagination = (
  totalPages: number,
  onChange?: (page: number) => void,
  defaultPage?: number,
  currentPageProp?: number
) => {
  const [startPage, setStartPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(defaultPage || 1);

  useEffect(() => {
    if (currentPageProp) {
      if (currentPageProp > totalPages) setCurrentPage(totalPages);
      else if (currentPageProp <= 1) setCurrentPage(1);
      else setCurrentPage(currentPageProp);
    }
  }, [currentPageProp, totalPages]);

  useEffect(() => {
    const newStartPage =
      Math.floor((currentPage - 1) / ITEM_PER_PAGE) * ITEM_PER_PAGE + 1;
    setStartPage(newStartPage);
    if (onChange) onChange(currentPage);
  }, [currentPage, onChange]);

  const getPageRange = () => {
    const endPage = Math.min(startPage + ITEM_PER_PAGE - 1, totalPages);
    return { start: startPage, end: endPage };
  };

  const { start, end } = getPageRange();

  const updatePageState = useCallback(
    (newStartPage: number, newCurrentPage: number) => {
      setStartPage(newStartPage);
      setCurrentPage(newCurrentPage);
      if (onChange) onChange(newCurrentPage);
    },
    [onChange]
  );

  const handleClickNextGroup = useCallback(() => {
    if (end < totalPages) {
      const nextStartPage = Math.min(startPage + ITEM_PER_PAGE, totalPages);
      updatePageState(nextStartPage, nextStartPage);
    }
  }, [end, totalPages, startPage, updatePageState]);

  const handleClickPrevGroup = useCallback(() => {
    if (start > 1) {
      const prevStartPage = Math.max(startPage - ITEM_PER_PAGE, 1);
      updatePageState(prevStartPage, prevStartPage + ITEM_PER_PAGE - 1);
    }
  }, [start, startPage, updatePageState]);

  const handleClickPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      if (onChange) onChange(page);
    },
    [onChange]
  );

  const handleClickNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      if (currentPage === end) {
        handleClickNextGroup();
      } else {
        const nextPage = currentPage + 1;
        handleClickPage(nextPage);
      }
    }
  }, [currentPage, totalPages, end, handleClickNextGroup, handleClickPage]);

  const handleClickPrevPage = useCallback(() => {
    if (currentPage > 1) {
      if (currentPage === start) {
        handleClickPrevGroup();
      } else {
        const prevPage = currentPage - 1;
        handleClickPage(prevPage);
      }
    }
  }, [currentPage, start, handleClickPrevGroup, handleClickPage]);

  return {
    currentPage,
    getPageRange,
    handleClickNextGroup,
    handleClickPrevGroup,
    handleClickPage,
    handleClickPrevPage,
    handleClickNextPage,
  };
};

export default usePagination;
