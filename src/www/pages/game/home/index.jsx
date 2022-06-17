import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useCanister, useConnect } from '@connect2ic/react';

import {
	Container,
	BoxClaimBorder,
	BoxClaim,
	TextBtn,
	ImgBtn,
} from './home-claim';
import { withContext } from '../../../hooks';

function Homeclaim(props) {
	const {getUserInfo} = props
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const navigate = useNavigate();

	const onClaim = async () => {
		try {
			const res = await superheroes?.claiming();
			console.log(res);
			getUserInfo()
			if (res) {
				dialogClaim();
			}
		} catch (er) {
			console.log(er);
		}
	};

	const dialogClaim = async () => {
		Swal.fire({
			title: 'Do you want to save the changes?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Save',
			denyButtonText: `Don't save`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire('Saved!', '', 'success').then((result) => {
					if (result.isConfirmed) {
						navigate('/inventory');
					}
				});
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info');
			}
		});
	};
	return (
		<>
			<Container>
				<BoxClaimBorder>
					<BoxClaim onClick={onClaim}>
						<ImgBtn src={'/images/sidebarButton.png'} alt='' />
						<TextBtn>Claim</TextBtn>
					</BoxClaim>
				</BoxClaimBorder>
			</Container>
		</>
	);
}

export default withContext(Homeclaim);
