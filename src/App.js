import React, { useState, useEffect } from "react";
import Cell from "./components/Cell.js";

const App = () => {
  // Stati del componente
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  // Messaggio che mostra il turno corrente
  const message = "Ora è il turno di " + go + ".";

  // Effetto che si attiva ogni volta che cambiano le celle
  useEffect(() => {
    checkScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cells]);

  // Funzione per controllare il punteggio e verificare se c'è un vincitore
  const checkScore = () => {
    // Matrice delle combinazioni vincenti
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    // Controlla se "circle" ha vinto
    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle");
      if (circleWins) {
        // Imposta il messaggio di vittoria
        setWinningMessage("Circle ha vinto");
        // Esce dalla funzione, evita di controllare ulteriori combinazioni
        return;
      }
    });

    // Controlla se "cross" ha vinto
    winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === "cross");
      if (crossWins) {
        // Imposta il messaggio di vittoria
        setWinningMessage("Cross ha vinto");
        // Esce dalla funzione, evita di controllare ulteriori combinazioni
        return;
      }
    });
  };

  return (
    <div className="app">
      <div className="gameboard">
        {/* Mappa attraverso le celle e crea il componente Cell per ognuna */}
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      {/* Mostra il messaggio di vittoria o il turno corrente */}
      <p style={{ fontSize: "25px" }}>{winningMessage || message}</p>
    </div>
  );
};

export default App;

