import React from 'react';
import { Container } from './sound-button.elements';

function SoundBtn({ children }) {
	const snd = new Audio('/audio/button.mp3');

	return <Container onClick={() => snd.play()}>{children}</Container>;
}

export default SoundBtn;
