import { fireEvent, render, screen } from "@testing-library/react";

// importiamo il componente di riferimento per fornirlo al metodo render come argomento
import ToggleSection from "../component/ToggleSection";

describe("Toggle section functionality", () => {
  it("mounts the button correctly", () => {
    // 1) componente montato
    render(<ToggleSection />);

    // 2) seleziono l'elemento che voglio verificare
    const button = screen.getByText(/mostra sezione/i);
    // 4) verifica
    expect(button).toBeInTheDocument();
  });

  it("has card hidden by default", () => {
    render(<ToggleSection />);

    const image = screen.queryByRole("img"); // dovrebbe tornare null

    // non ci dev'essere un'immagine al primo avvio del componente
    expect(image).not.toBeInTheDocument();
  });

  it("checks image presence after button click", () => {
    render(<ToggleSection />);
    const button = screen.getByText(/mostra sezione/i);
    fireEvent.click(button);

    const image = screen.getByRole("img"); // dovrebbe tornare un elemento di ruolo img
    // non ci dev'essere un'immagine al primo avvio del componente
    expect(image).toBeInTheDocument();
  });

  it("checks button text to be changed after first click", () => {
    render(<ToggleSection />);
    const button = screen.getByText(/mostra sezione/i);
    fireEvent.click(button);

    const buttonRef2 = screen.getByText(/nascondi sezione/i);
    expect(buttonRef2).toBeInTheDocument();
  });

  it("tests the toggle functionality - image should not be present after dblClick", () => {
    render(<ToggleSection />);
    const button = screen.getByText(/mostra sezione/i);

    // fireEvent.click(button);
    // fireEvent.click(button);

    fireEvent.dblClick(button);

    const image = screen.queryByRole("img"); // dovrebbe tornare null
    // non ci dev'essere un'immagine al primo avvio del componente
    expect(image).not.toBeInTheDocument();
  });
});
