import { fireEvent, render, screen } from "@testing-library/react";

import FetchReservations from "../component/FetchReservations";

describe("FetchReservations behaviour", () => {
  it("renders three items in the list after fetch is complete", async () => {
    render(<FetchReservations />);

    const allLiAfterFetch = await screen.findAllByTestId("reservItem");
    expect(allLiAfterFetch).toHaveLength(3);
  });
});
