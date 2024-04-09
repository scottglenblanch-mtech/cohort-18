"use client";
import { useState } from "react";

function getCell({ rowPosition, columnPosition }) {
  const isBothSameOfBeingEvenOrOdd = rowPosition % 2 === columnPosition % 2;
  const cellColor = isBothSameOfBeingEvenOrOdd ? "black" : "red";

  const isPlayer1Piece = isBothSameOfBeingEvenOrOdd && rowPosition <= 2;
  const isPlayer2Piece = isBothSameOfBeingEvenOrOdd && rowPosition >= 5;

  let piece =
    (isPlayer1Piece && "player1") || (isPlayer2Piece && "player2") || null;

  return {
    rowPosition,
    columnPosition,
    piece,
    cellColor,
  };
}

function getInitialBoardState() {
  let board = [];
  let widthOfBoard = 8;
  let heightOfBoard = 8;
  for (let rowPosition = 0; rowPosition < widthOfBoard; rowPosition++) {
    const row = [];
    for (
      let columnPosition = 0;
      columnPosition < heightOfBoard;
      columnPosition++
    ) {
      const cell = getCell({ rowPosition, columnPosition });

      row.push(cell);
    }
    board.push(row);
  }

  return board;
}

export default function Home() {
  const [board, setBoard] = useState(getInitialBoardState());
  const handleOnClickCell = (cell) => {
    /*
- When you click on a piece,
  - log out the piece as well as which player owns the piece
- When you click on square,
  - log out, no piece on this square
*/
    let message = "";

    if (cell.piece === "player1") {
      message = "clicked on cell with piece: player1";
    } else if (cell.piece === "player2") {
      message = "clicked on cell with piece: player2";
    } else {
      message = "no piece on the square";
    }

    console.log(
      `rowPosition: ${cell.rowPosition}, columnPosition: ${cell.columnPosition}`
    );
    console.log(message);
  };

  return (
    <main className="main">
      {board.map((rowList, rowPosition) => (
        <div className="row" key={rowPosition}>
          {rowList.map((cell, columnPosition) => (
            <div
              key={columnPosition}
              className={`cell ${cell.cellColor}`}
              onClick={() => handleOnClickCell(cell)}
            >
              {cell.piece === "player1" ? (
                <div className="circle player1"></div>
              ) : null}
              {cell.piece === "player2" ? (
                <div className="circle player2"></div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
