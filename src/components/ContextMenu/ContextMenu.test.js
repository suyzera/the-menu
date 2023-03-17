import { render } from "@testing-library/react";
import ContextMenu from "./ContextMenu";

describe("<ContextMenu />", () => {
  it("should display elements", () => {
    const { getByTestId } = render(<ContextMenu />);
    expect(getByTestId("context-menu")).toBeInTheDocument();
  });
});
