import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { SkeletonList } from './skeleton.elements'

function Skeleton() {
	return (
		<SkeletonList>
			<Stack spacing={1} sx={{ margin: '40px' }}>
				<Skeleton variant='rectangular' width={300} height={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
			</Stack>

			<Stack spacing={1} sx={{ margin: '40px' }}>
				<Skeleton variant='rectangular' width={300} height={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
			</Stack>

			<Stack spacing={1} sx={{ margin: '40px' }}>
				<Skeleton variant='rectangular' width={300} height={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
			</Stack>

			<Stack spacing={1} sx={{ margin: '40px' }}>
				<Skeleton variant='rectangular' width={300} height={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
			</Stack>

			<Stack spacing={1} sx={{ margin: '40px' }}>
				<Skeleton variant='rectangular' width={300} height={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
				<Skeleton variant='text' width={300} />
			</Stack>
		</SkeletonList>
	);
}

export default Skeleton;
