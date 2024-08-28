import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "./App";

test("Test principal", async () => {
  // ARRANGE

  // ACT
  render(<App />);
  
  await userEvent.type(screen.getByRole("textbox"), "there");
  await userEvent.click(screen.getByText("Add task"));

  // ASSERT
  expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("");
  expect((screen.getByRole("checkbox") as HTMLInputElement).checked).toBe(false);
  expect(screen.getByText("Remove"));
  expect(screen.getByText("there"));
});
