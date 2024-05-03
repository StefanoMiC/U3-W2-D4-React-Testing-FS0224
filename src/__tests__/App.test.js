import { render, screen } from "@testing-library/react";
import App from "../App";

// qui dentro scriveremo i nostri test, per App e (per comodità) gli altri li creeremo nella catella __tests__ (deve chiamarsi esattamente così!)

// sequenza di passaggi per effettuare un test completo:
// 1) Renderizzazione del componente da testare (nel Virtual DOM)
// 2) Individuazione degli elementi con cui interagire (selezione)
// 3) Esecuzione di eventuale interazione, se prevista (es. click)
// 4) Controllo e analisi dei risultati ottenuti rispetto alle aspettative

// creiamo il primo gruppo di test
// i gruppi di test solitamente si dividono in sezioni o "suites"
// ogni suite viene identificata con la keyword "describe"

describe("h1 is in the page", () => {
  // qui dentro inseriremo TUTTI i test di questa specifica suite
  // vogliamo cominciare con un test che verifichi la presenza dell'h1 nella pagina

  // test() o it() fanno la stessa cosa: con it() abbiamo una sintassi più colloquiale che ci permette di creare codice in una forma più "umana" e comprensibile
  it("mounts h1 correctly", () => {
    // qui dentro andremo ad eseguire gli step necessari a verificare questo funzionamento
    // 1) monto App nel virtual DOM
    render(<App />);
    // 2) vado a cercare il titolo tramite il suo contenuto testuale, così come farebbe l'utente nel leggerlo

    // screen è come se fosse il nostro document in questo Virtual DOM
    const heading = screen.getByText(/a simple react-testing example/i);
    // 3) non c'è interazione quindi ==> skip
    // 4) verifica delle aspettative, ipotesi vs risultato
    expect(heading).toBeInTheDocument();
  });
});

// test("renders learn react link", () => {
//   // render monta il componente nel virtual DOM
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
