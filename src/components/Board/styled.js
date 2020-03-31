import styled from 'styled-components';

export const BoardWrapper = styled.div`
	border-radius: 6px;
	width: 350px;
	height: 350px;
	margin: 20vh auto 0;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	gap: 24px;

	btn {
		position: relative;
		border-radius: 18px;
		padding: 2px;
		box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48), -4px -2px 16px #ffffff;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}

	.btn .inner-wrapper {
		width: 100%;
		height: 100%;
		border-radius: 16px;
		transition: all 0.2s ease-in-out;
		display: grid;
		place-items: center;
	}

	.btn .inner-wrapper button {
		user-select: none;
		transition: all 0.2s ease-in-out;
		font-size: 56px;
		width: 100%;
		height: 100%;
		position: relative;
		color: rgba(201, 215, 230, 0.8);
		text-shadow: 2px 2px 2px #d6e1ef99, 0 0 0 #000, 2px 2px 2px #d6e1ef00;
		border-radius: 18px;
		padding: 2px;
		box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48), -4px -2px 16px #ffffff;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}

	.btn.active,
	.inner-wrapper {
		box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
			inset -3px -3px 7px #ffffff;
		border-radius: 18px;
	}

	.active {
		color: black !important;
    text-shadow: 1px 1px 1px #d6e1ef99, 0 0 0 #000, 1px 1px 1px #d6e1ef00 !important;
    box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
			inset -3px -3px 7px #ffffff !important;
		border-radius: 18px !important;
	}
`;
