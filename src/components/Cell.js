import React from 'react';

const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
    // Funzione che gestisce il click sulla cella
    const handleClick = (event) => {
        // Verifica se la cella è già stata selezionata
        const taken = event.target.firstChild.classList.contains("circle") || 
        event.target.firstChild.classList.contains("cross");
    
        // Se la cella non è stata selezionata, esegui le azioni appropriate in base al turno corrente
        if (!taken) {
            if (go === "circle") {
                // Aggiungi la classe "circle" alla cella e cambia il contenuto della cella nello stato globale
                event.target.firstChild.classList.add("circle");
                handleCellChange("circle");
                // Passa il turno al giocatore "cross"
                setGo("cross");
            }
            if (go === "cross") {
                // Aggiungi la classe "cross" alla cella e cambia il contenuto della cella nello stato globale
                event.target.firstChild.classList.add("cross");
                handleCellChange("cross");
                // Passa il turno al giocatore "circle"
                setGo("circle");
            }
        }
    };

    // Funzione che aggiorna il contenuto della cella nello stato globale
    const handleCellChange = (className) => {
        // Crea un nuovo array di celle con il contenuto aggiornato per la cella corrente
        const nextCells = cells.map((cell, index)=> {
            if (index === id) {
                return className;
            } else {
                return cell;
            }
        });
        // Aggiorna lo stato globale delle celle con il nuovo array
        setCells(nextCells);
    };

    return (
        <div className='square' id={id} onClick={!winningMessage ? handleClick : null}>
            <div className={cell}></div>
        </div>
    );
};

export default Cell;
