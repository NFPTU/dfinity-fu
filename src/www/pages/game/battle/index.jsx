import React, { useState, useEffect } from 'react';
import Card from '../../../components/game/card-origin';
import {
	Btn,
	BtnList,
	Container,
	CountdownInside,
	CountdownWrapper,
	Hour,
	Info,
	InfoBody,
	InfoBodyLeft,
	InfoBodyLeftItem,
	InfoBodyRight,
	InfoBodyRightItem,
	InfoTop,
	Left,
	Level,
	Minutes,
	Right,
	Second,
	Type,
	Wrapper,
} from './breeding.elements';
import { useCanister, useConnect } from '@connect2ic/react';
import { getRemainingTime, toHHMMSS } from '../../../utils/utils';
import Countdown from "react-countdown";
import Swal from 'sweetalert2'
import { withContext } from '../../../hooks';
import CardNft from '../../../components/card-nft';

function Market(props) {
	
	return (
		<>
			<Container>
				<Wrapper>
				<InfoBodyLeftItem>Coming soon!</InfoBodyLeftItem>
				</Wrapper>
			</Container>
		</>
	);
}

export default withContext(Market)
