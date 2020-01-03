import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  constructor(props){
    super(props);
    this.createBoard = this.createBoard.bind(this);
  }

  static defaultProps = {
    nRows : 5,
    nCols : 5,
    chanceLightStartsOn: 0.25
  }

  state = {
    hasWon: false,
    board: this.createBoard()
  }

  /** create a board nRows high/nCols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    board = Array.from({ length: this.props.nRows})
      .map(r => Array.from({length: this.props.nCols})
      .map(c => Math.random() <= this.props.chanceLightStartsOn ? true : false));
    this.setState({ board });
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround = (coord) => {
    let {nCols, nRows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y+1, x);
    flipCell(y, x+1);
    flipCell(y-1, x);
    flipCell(y, x-1);

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = this.state.board.every(r => r.every(c => !c))

    this.setState({board, hasWon});
  }

  /** Render game board or winning message. */

  render() {
    let renderGame = 
    this.state.hasWon ?
    <h1 className="neon-orange">You Won!</h1>
    :
    <div>
      <div className="neon-orange">Lights</div>
      <div className="neon-blue">Out</div>
      <table className="Board">
        <tbody>
          {this.state.board
            .map((r,rIndex) => <tr> 
              {r.map((c, cIndex) =>
                  <Cell isLit={c} x={cIndex} y={rIndex} flipCellsAround={this.flipCellsAround}></Cell>)}
            </tr>)}
        </tbody>
      </table>
    </div>;
    return (
      <div className="BoardContainer">
        { renderGame }
      </div>
    )
  }
}


export default Board;
