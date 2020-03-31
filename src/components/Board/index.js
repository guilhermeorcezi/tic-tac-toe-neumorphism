import React from 'react';
import Square from '../Square/index.js';
import * as S from './styled';

const Board = ({ squares, onClick, status }) => (
	<S.BoardWrapper>
		{squares.map((square, i) => (
			<div className="btn">
				<div className="inner-wrapper">
					<Square
						key={i}
						value={square}
						onClick={() => onClick(i)}
						status={square && status}
					/>
				</div>
			</div>
		))}
	</S.BoardWrapper>
);

export default Board;
