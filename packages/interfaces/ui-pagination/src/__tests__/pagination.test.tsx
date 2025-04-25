import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import { Pagination } from "../atoms";

describe("Pagination component", () => {
  const onPageChangeMock = vi.fn();

  beforeEach(() => {
    onPageChangeMock.mockClear();
  });

  it("renders correctly with default props", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    // Check that the correct number of page buttons are rendered
    const pageButtons = screen.getAllByRole("button");
    // 5 page buttons + 2 navigation buttons (prev/next)
    expect(pageButtons).toHaveLength(7);

    // Check that current page is highlighted
    const currentPageButton = screen.getByRole("button", { current: "page" });
    expect(currentPageButton).toHaveTextContent("3");
    expect(currentPageButton).toHaveAttribute("data-active", "true");
  });

  it("calls onPageChange when page button is clicked", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    // Click on page 4
    const pageButton = screen.getByRole("button", { name: /go to page 4/i });
    fireEvent.click(pageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  it("disables previous button when on first page", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    expect(prevButton).toBeDisabled();
  });

  it("disables next button when on last page", () => {
    render(
      <Pagination
        currentPage={10}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextButton = screen.getByRole("button", { name: /next page/i });
    expect(nextButton).toBeDisabled();
  });

  it("navigates to previous page when previous button is clicked", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    fireEvent.click(prevButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it("navigates to next page when next button is clicked", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  it("applies disabled state correctly", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
        disabled
      />,
    );

    const container = screen.getByRole("navigation");
    expect(container).toHaveAttribute("data-disabled", "true");

    const allButtons = screen.getAllByRole("button");
    allButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });

    fireEvent.click(allButtons.at(2)!); // Try to click on a page button
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  it("applies size prop correctly", () => {
    const { rerender } = render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
        size="sm"
      />,
    );

    const container = screen.getByRole("navigation");
    expect(container).toHaveAttribute("data-size", "sm");

    rerender(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
        size="md"
      />,
    );

    expect(container).toHaveAttribute("data-size", "md");
  });

  it("meets accessibility requirements", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    // Check if navigation has appropriate ARIA role and label
    const navigation = screen.getByRole("navigation");
    expect(navigation).toHaveAttribute("aria-label", "Pagination");

    // Current page should have aria-current="page"
    const currentPage = screen.getByRole("button", { current: "page" });
    expect(currentPage).toBeInTheDocument();

    // Navigation buttons should have accessible labels
    const prevButton = screen.getByRole("button", { name: /previous page/i });
    const nextButton = screen.getByRole("button", { name: /next page/i });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  // Tests for the page calculation logic
  it("shows exactly 5 page numbers when total pages is more than 5", () => {
    render(
      <Pagination
        currentPage={6}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    // With current page 6, should show pages 4,5,6,7,8
    const pageNumbers = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.getAttribute("aria-label")?.includes("Previous") &&
          !btn.getAttribute("aria-label")?.includes("Next"),
      )
      .map((btn) => btn.textContent);

    expect(pageNumbers).toEqual(["4", "5", "6", "7", "8"]);
  });

  it("shows all pages when total pages is less than or equal to 5", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    );

    const pageNumbers = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.getAttribute("aria-label")?.includes("Previous") &&
          !btn.getAttribute("aria-label")?.includes("Next"),
      )
      .map((btn) => btn.textContent);

    expect(pageNumbers).toEqual(["1", "2", "3", "4", "5"]);
  });

  it("adjusts page range when current page is near the beginning", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const pageNumbers = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.getAttribute("aria-label")?.includes("Previous") &&
          !btn.getAttribute("aria-label")?.includes("Next"),
      )
      .map((btn) => btn.textContent);

    expect(pageNumbers).toEqual(["1", "2", "3", "4", "5"]);
  });

  it("adjusts page range when current page is near the end", () => {
    render(
      <Pagination
        currentPage={9}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const pageNumbers = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.getAttribute("aria-label")?.includes("Previous") &&
          !btn.getAttribute("aria-label")?.includes("Next"),
      )
      .map((btn) => btn.textContent);

    expect(pageNumbers).toEqual(["6", "7", "8", "9", "10"]);
  });

  it("hides navigation arrows when total pages is 4 or fewer", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={4}
        onPageChange={onPageChangeMock}
      />,
    );

    const prevButton = screen.queryByRole("button", { name: /previous page/i });
    const nextButton = screen.queryByRole("button", { name: /next page/i });

    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();

    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(4); // Only the 4 page buttons
  });

  it("shows navigation arrows when total pages is greater than 4", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    );

    const prevButton = screen.queryByRole("button", { name: /previous page/i });
    const nextButton = screen.queryByRole("button", { name: /next page/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("adjusts visible pages when totalPages is less than 5", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={3}
        onPageChange={onPageChangeMock}
      />,
    );

    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(3);

    const pageNumbers = pageButtons.map((button) => button.textContent);
    expect(pageNumbers).toEqual(["1", "2", "3"]);
  });

  it("centers current page when in middle of pagination range", () => {
    render(
      <Pagination
        currentPage={50}
        totalPages={100}
        onPageChange={onPageChangeMock}
      />,
    );

    // Should show pages 48, 49, 50, 51, 52 with 50 in the middle
    const pageNumbers = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.getAttribute("aria-label")?.includes("Previous") &&
          !btn.getAttribute("aria-label")?.includes("Next"),
      )
      .map((btn) => btn.textContent);

    expect(pageNumbers).toEqual(["48", "49", "50", "51", "52"]);
  });
});
