import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test('renders "Load more" text, could be clicked and customized class name', () => {
  const click = vitest.fn();
  render(
    <Button className="loadmore" onClick={click}>
      Load more
    </Button>
  );

  const loadmoreButton = screen.getByText(/Load more/i);
  expect(loadmoreButton).toBeInTheDocument();

  expect(loadmoreButton).toHaveClass("loadmore");

  fireEvent.click(loadmoreButton);

  expect(click).toHaveBeenCalledTimes(1);
});
