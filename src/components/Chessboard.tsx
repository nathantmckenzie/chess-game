import React from 'react';
import './Chessboard.css'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
 
export default function Chessboard() {
  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
      const number = j + i + 2;

      if (number % 2) {
        board.push(<div className="tile black-tile">[{horizontalAxis[i]} {verticalAxis[j]}]</div>)
      } else {
        board.push(<div className="tile white-tile">[{horizontalAxis[i]} {verticalAxis[j]}]</div>)
      }
    }
  }
  return <div id="chessboard">{board}</div>
}