import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.scss';
import { Box, Stack } from '@mui/material';

const ProductLink = () => {
	return (
		<Stack className={'product-link'}>
			<Stack className={'container'}>
				<Box className={'box-title'}>We Make Finding The Right Car Simple</Box>
				<Box className={'box-link'}>
					<Link href={'/property'}>
						<span>See All Vehicles</span>
						<img src="/img/icons/rightup1.svg" alt="" />
					</Link>
				</Box>
			</Stack>
		</Stack>
	);
};

export default ProductLink;

