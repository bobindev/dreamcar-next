import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShopIcon from '@mui/icons-material/Shop';
import useDeviceDetect from '../hooks/useDeviceDetect';
import { Stack, Box, Divider } from '@mui/material';
import moment from 'moment';

const Footer = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return (
			<Stack className={'footer-container'}>
				<Stack className={'main'}>
					<Stack className={'left'}>
						<Box component={'div'} className={'footer-box'}>
							<span>DREAMCAR</span>
						</Box>
						<Box component={'div'} className={'footer-box'}>
							<span>total free customer care</span>
							<p>+82 10 4867 2909</p>
						</Box>
						<Box component={'div'} className={'footer-box'}>
							<span>nee live</span>
							<p>+82 10 4867 2909</p>
							<span>Support?</span>
						</Box>
						<Box component={'div'} className={'footer-box'}>
							<p>follow us on social media</p>
							<div className={'media-box'}>
								<FacebookOutlinedIcon />
								<TelegramIcon />
								<InstagramIcon />
								<TwitterIcon />
							</div>
						</Box>
					</Stack>
					<Stack className={'right'}>
						<Box component={'div'} className={'bottom'}>
							<div>
								<strong>Popular Search</strong>
								<span>Property for Rent</span>
								<span>Property Low to hide</span>
							</div>
							<div>
								<strong>Quick Links</strong>
								<span>Terms of Use</span>
								<span>Privacy Policy</span>
								<span>Pricing Plans</span>
								<span>Our Services</span>
								<span>Contact Support</span>
								<span>FAQs</span>
							</div>
							<div>
								<strong>Discover</strong>
								<span>Seoul</span>
								<span>Gyeongido</span>
								<span>Busan</span>
								<span>Jejudo</span>
							</div>
						</Box>
					</Stack>
				</Stack>
				<Stack className={'second'}>
					<span>© Dreamcar - All rights reserved. Dreamcar {moment().year()}</span>
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack className={'footer-container'}>
				<Stack className={'footer-top'}>
					<Box component={'div'} className={'footer-box'}>
						<div>DREAMCAR</div>
						<strong>Receive pricing updates, shopping tips & more!</strong>
					</Box>
					<Box component={'div'} className={'top'}>
						<div>
							<input type="text" placeholder={'Your Email'} />
							<p className="bottom">
								<span>Subscribe</span>
							</p>
						</div>
					</Box>
				</Stack>
				<Divider></Divider>
				<Stack className={'main'}>
					<Stack className={'left'}>
						<Box component={'div'} className={'bottom'}>
							<div>
								<strong>Popular Search</strong>
								<span>Vehicles for Rent</span>
								<span>Vehicles Low to hide</span>
							</div>
						</Box>
						<Box component={'div'} className={'bottom'}>
							<div>
								<strong>Quick Links</strong>
								<span>Terms of Use</span>
								<span>Privacy Policy</span>
								<span>Pricing Plans</span>
								<span>Our Services</span>
								<span>Contact Support</span>
								<span>FAQs</span>
							</div>
						</Box>
						<Box component={'div'} className={'bottom'}>
							<div>
								<strong>Discover</strong>
								<span>Seoul</span>
								<span>Gyeongido</span>
								<span>Busan</span>
								<span>Jejudo</span>
							</div>
						</Box>
						<Stack></Stack>
					</Stack>
					<Stack className={'right'}>
						<Stack></Stack>
						<Box component={'div'} className={'footer-box'}>
							<div className="icon">
								<div className={'media-box'}>
									<AppleIcon />
								</div>
							</div>
							<div className="content">
								<span>Download on the</span>
								<p>Apple Store</p>
							</div>
						</Box>
						<Box component={'div'} className={'footer-box'}>
							<div className="icon">
								<div className={'media-box'}>
									<ShopIcon/>
								</div>
							</div>
							<div className="content">
								<span>Get in on</span>
								<p>Google Play</p>
							</div>
						</Box>
						{/* <Divider></Divider> */}
						<Box component={'div'} className={'footer-box1'}>
							<p>follow us on social media</p>
							<div className={'media-box'}>
								<FacebookOutlinedIcon />
								<TelegramIcon />
								<InstagramIcon />
								<TwitterIcon />
							</div>
						</Box>
					</Stack>
				</Stack>

				<Stack className={'second'}>
					<span>© Nestar - All rights reserved. Nestar {moment().year()}</span>
					<span>Privacy · Terms · Sitemap</span>
				</Stack>
			</Stack>
		);
	}
};

export default Footer;
