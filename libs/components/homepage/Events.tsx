import React, { useState } from 'react';
import { Stack, Box, Button } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import Image from 'next/image';

interface EventData {
	eventTitle: string;
	city: string;
	description: string;
	imageSrc: string;
}
const eventsData: EventData[] = [
	{
		eventTitle: 'Paradise City Theme Park',
		city: 'Incheon',
		description:
			'Experience magic and wonder in Incheon with a visit to the night-themed indoor theme park Wonderbox at Paradise City!',
		imageSrc: '/img/events/INCHEON.webp',
	},
	{
		eventTitle: 'Taebaeksan Snow Festival',
		city: 'Seoul',
		description: 'If you have the opportunity to travel to South Korea, do not miss the Taebaeksan Snow Festival!',
		imageSrc: '/img/events/SEOUL.webp',
	},
	{
		eventTitle: 'Suseong Lake Event',
		city: 'Daegu',
		description: 'The Suseong Lake Festival is a culture and arts festival held alongside Suseongmot Lake!',
		imageSrc: '/img/events/DAEGU.webp',
	},
	{
		eventTitle: 'Sand Festival',
		city: 'Busan',
		description:
			'Haeundae Sand Festival, the nation’s largest eco-friendly exhibition on sand, is held at Haeundae Beach!',
		imageSrc: '/img/events/BUSAN.webp',
	},
];

const EventCard = ({ event }: { event: EventData }) => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack
				className="event-card"
				style={{
					backgroundImage: `url(${event?.imageSrc})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Box component={'div'} className={'info'}>
					<strong>{event?.city}</strong>
					<span>{event?.eventTitle}</span>
				</Box>
				<Box component={'div'} className={'more'}>
					<span>{event?.description}</span>
				</Box>
			</Stack>
		);
	}
};

const Events = () => {
	const device = useDeviceDetect();
	const [selectedCity, setSelectedCity] = useState<string | null>(null);

	const handleCityClick = (city: string) => {
		setSelectedCity(city);
	};

	const filteredEvents = selectedCity ? eventsData.filter((event) => event.city === selectedCity) : eventsData;

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack className={'events'}>
				<Stack className='event-title'>
					<span className={'white'}>Events</span>
				</Stack>

				<Stack className={'navbar'}>
					{eventsData.map((event) => (
						<span
							key={event.city}
							onClick={() => handleCityClick(event.city)}
							className={selectedCity === event.city ? 'active' : ''}
						>
							{event.city}
						</span>
					))}
				</Stack>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							{filteredEvents.length > 0 ? (
								<>
									<h2>{filteredEvents[0].eventTitle}</h2>
									<h3>{filteredEvents[0].city}</h3>
									<Button variant="contained" color="primary">
										Learn More
									</Button>
								</>
							) : (
								<p>Select a city to see events</p>
							)}
						</Box>
						<Box className={'right'}>
							{filteredEvents.length > 0 && (
								<Image src={filteredEvents[0].imageSrc} alt={filteredEvents[0].eventTitle} width={800} height={500} />
							)}
						</Box>
					</Stack>
					{/* <Stack className={'card-wrapper'}>
						{eventsData.map((event) => {
							return <EventCard event={event} key={event?.eventTitle} />;
						})}
					</Stack> */}
				</Stack>
			</Stack>
		);
	}
};

export default Events;
