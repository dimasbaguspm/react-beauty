export type PaginationSize = 'sm' | 'md';

export interface PaginationProps {
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Current active page (1-indexed)
   */
  currentPage: number;
  /**
   * Callback when page is changed
   */
  onPageChange: (page: number) => void;
  /**
   * Size of the pagination component
   * @default "md"
   */
  size?: PaginationSize;
  /**
   * Disable the pagination component
   * @default false
   */
  disabled?: boolean;
}
