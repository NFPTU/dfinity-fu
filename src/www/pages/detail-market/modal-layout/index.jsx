import React from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import './modal-layout.css';

function ModalLayout({ children, handleClose, listTing, src }) {
	const handleClickApprove = (e) => {
    e.preventDefault();
    listTing()
	};

	return (
		<form>
			<div className='modal__container'>
				<div className='modal__container-header'>
					<div className='modal__container-header-title'>Make offer</div>
					<DisabledByDefaultIcon
						onClick={handleClose}
						sx={{ cursor: 'pointer' }}
						fontSize='large'
					/>
				</div>

				<div className='line__modal'></div>

				<div className='modal__container-body'>
					<div className='modal__container-body-left'>
						<img
							src={src}
							alt='image-nft'
						/>
					</div>

					<div className='modal__container-body-right'>{children}</div>
				</div>

				<div className='modal__container-bottom'>
					<button onClick={handleClose} type='button' className='btn btn-1'>
						Cancel
					</button>
					<button
						onClick={handleClickApprove}
						type='submit'
						className='btn btn-2'>
						Approve
					</button>
				</div>
			</div>
		</form>
	);
}

export default ModalLayout;
