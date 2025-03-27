import { render, screen, within } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Header is True", () => {
  it("should render one columnheader that has the attributecolspan = 2 if textSecondCell is null", async () => {
    render(
      <CourseListRow
        isHeader={true}
        textSecondCell={null}
        textFirstCell="Test course list row"
      />
    );

    const thElement = screen.getByRole("columnheader", {
      name: "Test course list row",
    });

    expect(thElement).toBeInTheDocument();
    expect(thElement.tagName).toBe("TH");
    expect(thElement).toHaveAttribute("colspan", "2");
  });

  it("should render two th elements containing textFirstCell and textSecondCell if textSecondCell is not null", async () => {
    render(
      <CourseListRow
        isHeader={true}
        textSecondCell="Test second cell of course list row"
        textFirstCell="Test first cell of course list row"
      />
    );

    const thElements = screen.getAllByRole("columnheader");

    expect(thElements).toHaveLength(2);
  });
});

describe("CourseListRow Header is False", () => {
  it("should render two td elements within a tr element", async () => {
    render(<CourseListRow isHeader={false} />);

    const trElement = screen.getByRole("row");
    const tdElements = within(trElement).getAllByRole("cell");

    expect(trElement).toBeInTheDocument();
    expect(tdElements).toHaveLength(2);
  });

  it('should have a background color of #deb5b545 for the first header cell when isHeader is true', () => {
    const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const headerCell = getByText('Header');
    expect(headerCell).toHaveStyle('background-color: #deb5b545');
  });

  it('should have a background color of #deb5b545 for the first header cell when isHeader is true and secondTextCell is not null', () => {
    const { getByText } = render(
      <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Second Cell" />
    );
    const headerCell = getByText('Header');
    expect(headerCell).toHaveStyle('background-color: #deb5b545');
  });

  it('should have a background color of #f5f5f5ab when isHeader is false', () => {
    const { container } = render(<CourseListRow isHeader={false} textFirstCell="Course Name" />);
    const row = container.querySelector('tr');
    expect(row).toHaveStyle('background-color: #f5f5f5ab');
  });

});
