import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
//import { prettyDOM } from "@testing-library/dom";
import CardNotes from "./CardNotes";

test("render CardNote", () => {
  const note = {
    content: "this is a test",
    date: "2022-07-21T21:33:14.280Z",
    id: "62d9c61ac47085c10665ab42",
    important: true,
  };
  const component = render(<CardNotes note={note} />);
  component.debug();
  component.getByText("this is a test");
  //   const li = component.container.querySelector("li");
  //   console.log(li);
  //   expect(component.container).toHaveTextContent("This is a test"); otra alternativa
});

test("clicking the button calls event handler once", () => {
  const note = {
    content: "this is a test",
    date: "2022-07-21T21:33:14.280Z",
    id: "62d9c61ac47085c10665ab42",
    important: true,
  };
  // const mockHandler = jest.fn();
  const component = render(<CardNotes note={note} />);
  const btn = component.getByText("C");
  fireEvent.click(btn);
  expect(component).toHaveBeenCalledTimes(1);
});
