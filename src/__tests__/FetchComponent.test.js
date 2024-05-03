import { fireEvent, render, screen } from "@testing-library/react";

import FetchComponent from "../component/FetchComponent";

describe("FetchComponent List functionality", () => {
  it("creates an empty list initially", () => {
    render(<FetchComponent />);

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems).toHaveLength(0);
  });

  it("populates the list after the fetch is done, with 10 elements", async () => {
    render(<FetchComponent />);

    const listItemsFromFetch = await screen.findAllByRole("listitem");

    expect(listItemsFromFetch).toHaveLength(10);
    // alternativa più "lasca", cerchiamo di essere più precisi dove possibile
    // expect(listItemsFromFetch.length).toBeGreaterThan(0);
  });
});

describe("Filter behaviour in FetchComponent", () => {
  it("returns 1 element if chelsey is searched", async () => {
    render(<FetchComponent />);

    const inputField = screen.getByRole("textbox");

    fireEvent.change(inputField, { target: { value: "chelsey" } });

    const filteredListItems = await screen.findAllByRole("listitem");
    expect(filteredListItems).toHaveLength(1);
  });

  it("returns 4 elements if 'en' is written", async () => {
    render(<FetchComponent />);

    const inputField = screen.getByRole("textbox");

    fireEvent.change(inputField, { target: { value: "en" } });

    const filteredListItems = await screen.findAllByRole("listitem");
    expect(filteredListItems).toHaveLength(4);
  });
});
