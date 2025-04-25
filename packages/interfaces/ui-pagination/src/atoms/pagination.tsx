import { Icon } from "@react-beauty/ui-icon";
import { forwardRef, useMemo } from "react";

import { PaginationProps } from "../type";

import {
  PaginationContainer,
  PaginationItem,
  PaginationNavItem,
} from "./style";

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      size = "md",
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const visiblePageNumbers = useMemo(() => {
      // Always show exactly 5 pages (fixed)
      const VISIBLE_PAGES = 5;

      // If we have fewer than 5 pages total, just show all pages
      if (totalPages <= VISIBLE_PAGES) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      // Calculate the ideal range with current page in the center (index 2)
      const idealStart = Math.max(1, currentPage - 2);
      const idealEnd = idealStart + VISIBLE_PAGES - 1;

      // If the ideal range exceeds total pages, adjust it
      if (idealEnd > totalPages) {
        return Array.from(
          { length: VISIBLE_PAGES },
          (_, i) => totalPages - VISIBLE_PAGES + i + 1,
        );
      }

      // Return the ideal range
      return Array.from({ length: VISIBLE_PAGES }, (_, i) => idealStart + i);
    }, [currentPage, totalPages]);

    // Check if navigation arrows should be shown
    const showNavigationArrows = totalPages > 4;

    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    return (
      <PaginationContainer
        ref={ref}
        data-size={size}
        data-disabled={disabled}
        role="navigation"
        aria-label="Pagination"
        {...props}
      >
        {showNavigationArrows && (
          <PaginationNavItem
            onClick={handlePrevious}
            disabled={currentPage === 1 || disabled}
            aria-label="Previous page"
            title="Previous page"
          >
            <Icon name="controlsChevronLeft" size="xs" />
          </PaginationNavItem>
        )}

        {visiblePageNumbers.map((pageNumber) => (
          <PaginationItem
            key={pageNumber}
            data-active={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
            disabled={disabled}
            aria-label={
              pageNumber === currentPage
                ? `Page ${pageNumber}, current page`
                : `Go to page ${pageNumber}`
            }
            aria-current={pageNumber === currentPage ? "page" : undefined}
          >
            {pageNumber}
          </PaginationItem>
        ))}

        {showNavigationArrows && (
          <PaginationNavItem
            onClick={handleNext}
            disabled={currentPage === totalPages || disabled}
            aria-label="Next page"
            title="Next page"
          >
            <Icon name="controlsChevronRight" size="xs" />
          </PaginationNavItem>
        )}
      </PaginationContainer>
    );
  },
);
