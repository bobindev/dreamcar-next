import React from 'react';
import { Stack, Box, Divider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Property } from '../../types/property/property';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { REACT_APP_API_URL } from '../../config';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../../apollo/store';

interface TrendPropertyCardProps {
	property: Property;
	likePropertyHanler: any;
}

const TrendPropertyCard = (props: TrendPropertyCardProps) => {
	const { property, likePropertyHanler } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const user = useReactiveVar(userVar);

	/** HANDLERS **/
	const pushDetailHandler = async (propertyId: string) => {
		console.log('propertyId', propertyId);
		await router.push({ pathname: '/property/detail', query: { id: propertyId } });
	};

	if (device === 'mobile') {
		return (
			<Stack className="trend-card-box" key={property._id}>
				<Box
					component={'div'}
					className={'card-img'}
					style={{ backgroundImage: `url(${REACT_APP_API_URL}/${property?.propertyImages[0]})` }}
					onClick={() => pushDetailHandler(property._id)}
				>
					<div>${property.propertyPrice}</div>
				</Box>
				<Box component={'div'} className={'info'}>
					<strong className={'title'} onClick={() => pushDetailHandler(property._id)}>
						{property.propertyModel}
					</strong>
					<p className={'desc'}>{property.propertyDesc ?? 'no description'} </p>
					<div className={'options'}>
						<div>
							<img src="/img/icons/fuel.svg" alt="" />
							<span>{property.propertyFuel} Fuel</span>
						</div>
						<div>
							<img src="/img/icons/color.svg" alt="" />
							<span>{property.propertyColor} Color</span>
						</div>
						<div>
							<img src="/img/icons/mileage.svg" alt="" />
							<span>{property.propertyMileage} km</span>
						</div>
					</div>
					<Divider sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
						<p>
							{property.propertyRent ? 'Rent' : ''} {property.propertyRent && property.propertyBarter && '/'}{' '}
							{property.propertyBarter ? 'Barter' : ''}
						</p>
						<div className="view-like-box">
							<IconButton color={'default'}>
								<RemoveRedEyeIcon />
							</IconButton>
							<Typography className="view-cnt">{property?.propertyViews}</Typography>
							<IconButton color={'default'} onClick={() => likePropertyHanler(user, property?._id)}>
								{property?.meLiked && property?.meLiked[0]?.myFavorite ? (
									<FavoriteIcon style={{ color: 'red' }} />
								) : (
									<FavoriteIcon />
								)}
							</IconButton>
							<Typography className="view-cnt">{property?.propertyLikes}</Typography>
						</div>
					</div>
				</Box>
			</Stack>
		);
	} else {
		return (
			<Stack className="trend-card-box" key={property._id}>
				<Box
					component={'div'}
					className={'card-img'}
					style={{ backgroundImage: `url(${REACT_APP_API_URL}/${property?.propertyImages[0]})` }}
					// onClick={() => pushDetailHandler(property._id)}
				>
					<div className="view-like-box">
						<IconButton color={'default'}>
							<RemoveRedEyeIcon />
						</IconButton>
						<Typography className="view-cnt">{property?.propertyViews}</Typography>
						<IconButton color={'default'} onClick={() => likePropertyHanler(user, property?._id)}>
							{property?.meLiked && property?.meLiked[0]?.myFavorite ? (
								<FavoriteIcon style={{ color: 'red' }} />
							) : (
								<FavoriteIcon />
							)}
						</IconButton>
						<Typography className="view-cnt">{property?.propertyLikes}</Typography>
					</div>
				</Box>
				<Box component={'div'} className={'info'}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<strong className={'title'}>{property.propertyModel}</strong>
						<div>${property.propertyPrice}</div>
					</div>
					<p className={'desc'}>{property.propertyDesc ?? 'no description'}</p>
					<div className={'options'}>
						<div>
							<img src="/img/icons/fuel.svg" alt="" />
							<span>{property.propertyFuel}</span>
						</div>
						<div>
							<img src="/img/icons/color.svg" alt="" />
							<span>{property.propertyColor}</span>
						</div>
						<div>
							<img src="/img/icons/mileage.svg" alt="" />
							<span>{property.propertyMileage} km</span>
						</div>
					</div>
					<Divider sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
						<p>
							{property.propertyRent ? 'Rent' : ''} {property.propertyRent && property.propertyBarter && '/'}{' '}
							{property.propertyBarter ? 'Barter' : ''}
						</p>
						<p className="detail" onClick={() => pushDetailHandler(property._id)}>
							<span>View details</span>
							<img src="/img/icons/rightup.svg" alt="" />
						</p>
					</div>
				</Box>
			</Stack>
		);
	}
};

export default TrendPropertyCard;
