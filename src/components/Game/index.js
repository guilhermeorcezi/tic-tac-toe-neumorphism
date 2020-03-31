import React, { useState } from 'react';
import { calculateWinner } from '../../utils/helpers';
import Board from '../Board/index.js';
import * as S from './styled';

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const [click, setClick] = useState(false);
	const winner = calculateWinner(board);

	function handleClick(i) {
		const boardCopy = [...board];
		setClick(true);
		//Se usuário clicar em um square já preenchido ou se game já tiver acabado:
		if (winner || boardCopy[i]) return;
		//Colocar X ou O no square clicado:
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	}

	function renderMoves() {
		return (
			<S.GameWrapper>
				<button className="reset" onClick={() => setBoard(Array(9).fill(null))}>Resetar</button>
			</S.GameWrapper>
		);
	}

	return (
		<S.GameWrapper>
			<Board squares={board} onClick={handleClick} status={click} />
			<div className="turn">
				<p>
					{winner ? 'Vencedor: ' + winner : 'Rodada: ' + (xIsNext ? 'X' : 'O')}
				</p>
				{renderMoves()}
			</div>
		</S.GameWrapper>
	);
};

export default Game;
