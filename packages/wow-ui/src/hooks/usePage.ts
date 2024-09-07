import { useEffect, useState } from "react";

const ITEM_PER_PAGE = 5;

const usePage = (
  totalPages: number,
  onChange?: (page: number) => void,
  currentPageProps?: number
) => {
  const [startPage, setStartPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(currentPageProps || 1);

  useEffect(() => {
    if (currentPage) {
      setCurrentPage(currentPage);
      const newStartPage =
        Math.floor((currentPage - 1) / ITEM_PER_PAGE) * ITEM_PER_PAGE + 1;
      setStartPage(newStartPage);
    }
  }, [currentPage]);

  const getPageRange = () => {
    const endPage = Math.min(startPage + ITEM_PER_PAGE - 1, totalPages);
    return { start: startPage, end: endPage };
  };

  const { start, end } = getPageRange();

  const handleClickNextGroup = () => {
    if (end < totalPages) {
      const nextStartPage = Math.min(startPage + ITEM_PER_PAGE, totalPages);
      setStartPage(nextStartPage);
      setCurrentPage(nextStartPage);
      if (onChange) onChange(nextStartPage);
    }
  };

  const handleClickPrevGroup = () => {
    if (start > 1) {
      const prevStartPage = Math.max(startPage - ITEM_PER_PAGE, 1);
      setStartPage(prevStartPage);
      setCurrentPage(prevStartPage + ITEM_PER_PAGE - 1);
      if (onChange) onChange(prevStartPage + ITEM_PER_PAGE - 1);
    }
  };

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
    if (onChange) onChange(page);
  };

  const handleClickNextPage = () => {
    if (currentPage < totalPages) {
      if (currentPage === end) {
        handleClickNextGroup();
      } else {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        if (onChange) onChange(nextPage);
      }
    }
  };

  const handleClickPrevPage = () => {
    if (currentPage > 1) {
      if (currentPage === start) {
        handleClickPrevGroup();
      } else {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        if (onChange) onChange(prevPage);
      }
    }
  };

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

export default usePage;
