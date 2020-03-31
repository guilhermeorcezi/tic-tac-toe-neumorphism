import styled from 'styled-components';

export const GameWrapper = styled.div`
	.turn {
		margin: 50px;
		text-align: center;
	}

	p {
		font-size: 24px;
	}

	button.reset {
		margin-top: 30px;
		font-size: 16px;
		line-height: 16px;
		padding: 16px 43px;
		border: 0;
		outline: 0;
		font-weight: 900;
		cursor: pointer;
		border-radius: 34px;
		transition: 0.25s;
		background-color: rgb(247, 239, 244);
		filter: drop-shadow(3.4px 3.4px 3.4px rgb(183, 177, 181))
			drop-shadow(-3.4px -3.4px 3.4px white);
		-webkit-filter: drop-shadow(3.4px 3.4px 3.4px rgb(183, 177, 181))
			drop-shadow(-3.4px -3.4px 3.4px white);
		box-shadow: inset 4.3px 4.3px 7px #fff;
	}

	.reset:hover {
		filter: drop-shadow(5px 5px 3.4px rgb(183, 177, 181));
		-webkit-filter: drop-shadow(5px 5px 3.4px rgb(183, 177, 181));
		box-shadow: inset 2.5px 2.5px 2.5px #fff;
	}

	button.reset:active {
		filter: drop-shadow(0px 0px 0px rgb(183, 177, 181));
		-webkit-filter: drop-shadow(0px 0px 0px rgb(183, 177, 181));
		box-shadow: inset 4.3px 4.3px 7px rgb(183, 177, 181);
		filter: unset;
		box-shadow: unset;
		filter: drop-shadow(3px 1px 18px rgb(255, 255, 255));
		-webkit-filter: drop-shadow(3px 1px 18px rgb(255, 255, 255));
		box-shadow: inset 5.3px 5.3px 7px rgba(183, 177, 181, 0.34);
		border: 1px solid rgb(255, 255, 255);
		color: #666;
		text-shadow: 1px 1px 1px white;
	}
`;
