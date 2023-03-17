import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it.skip("should display elements", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("test-app")).toBeInTheDocument();
  });
});
