import React, { useState } from 'react';
import type { NextPage } from 'next';
import withAdminLayout from '../../../libs/components/layout/LayoutAdmin';
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import { List, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TabContext } from '@mui/lab';
import OutlinedInput from '@mui/material/OutlinedInput';
import TablePagination from '@mui/material/TablePagination';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { NoticeList } from '../../../libs/components/admin/cs/NoticeList';
import { Notices } from '../../../libs/types/notice/notice';
import { NoticeInput } from '../../../libs/types/notice/notice.input';
import { NoticeCategory, NoticeStatus } from '../../../libs/enums/notice.enum';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_NOTICE, DELETE_NOTICE } from '../../../apollo/admin/mutation';
import { GET_NOTICE } from '../../../apollo/admin/query';
import { T } from '../../../libs/types/common';
import { Message } from '../../../libs/enums/common.enum';
import { sweetErrorHandling } from '../../../libs/sweetAlert';

const AdminNotice: NextPage = (props: any) => {
	const [anchorEl, setAnchorEl] = useState<[] | HTMLElement[]>([]);
	const [select, setSelect] = useState<Notices[]>([]);
	const [title, setTitle] = useState<NoticeInput>({
		noticeCategory: NoticeCategory.NOTICE,
		noticeStatus: NoticeStatus.ACTIVE,
		noticeTitle: '',
		noticeContent: '',
	});

	/** APOLLO REQUESTS **/
	const [noticeCreate] = useMutation(CREATE_NOTICE);
	const [deleteNotice] = useMutation(DELETE_NOTICE);
	const {
		loading: getCommentsLoading,
		data: getCommentsData,
		error: getCommentsError,
		refetch: getCommentsRefetch,
	} = useQuery(GET_NOTICE, {
		fetchPolicy: 'cache-and-network',
		variables: {
			input: '',
		},

		onCompleted: (data: T) => {
			if (data?.getNotice) setSelect(data?.getNotice);
		},
	});
	/** LIFECYCLES **/
	/** HANDLERS **/

	const createNoticeHandler = async () => {
		try {
			if (title.noticeTitle === '') throw Error(Message.PLEASE_REFILL);
			console.log('Creating notice with title:', title.noticeTitle);
			await noticeCreate({ variables: { input: title } });

			setTitle({ ...title, noticeTitle: '' });
			getCommentsRefetch();
			// await getCommentsRefetch({ input: commentInquiry });
		} catch (err: any) {
			await sweetErrorHandling(err);
		}
	};

	const deleteNoticeHandler = async (noticeId: any) => {
		try {
			await deleteNotice({
				variables: { input: noticeId },
			});
			getCommentsRefetch();
		} catch (err: any) {
			console.error('Error deleting notice:', err);
			await sweetErrorHandling(err);
		}
	};

	return (
		// @ts-ignore
		<Box component={'div'} className={'content'}>
			<Box component={'div'} className={'title flex_space'}>
				<Typography variant={'h2'}>Notice Management</Typography>
			</Box>
			<Stack flexDirection={'row'} gap={3} marginTop={'20px'}>
				<TextField
					required
					id="outlined-required"
					label="Add description"
					defaultValue="Hello World"
					value={title.noticeTitle}
					onChange={({ target: { value } }: any) => {
						setTitle({ ...title, noticeTitle: value });
					}}
				/>
				{/* <Button className="btn_add" variant={'contained'} size={'medium'} onClick={createNoticeHandler}>
						<AddRoundedIcon sx={{ mr: '8px' }} />
						ADD
					</Button> */}
				<Button className="btn_add" variant={'contained'} size={'medium'} onClick={createNoticeHandler}>
					<AddRoundedIcon sx={{ mr: '8px' }} />
					ADD
				</Button>
			</Stack>
			<Box component={'div'} className={'table-wrap'}>
				<Box component={'div'} sx={{ width: '100%', typography: 'body1' }}>
					<TabContext value={'value'}>
						<Box component={'div'}>
							<Divider />
							<Stack className={'search-area'} sx={{ m: '24px' }}>
								<OutlinedInput
									value={'searchInput'}
									sx={{ width: '100%' }}
									className={'search'}
									placeholder="Search user name"
									onKeyDown={(event) => {}}
									endAdornment={
										<>
											{true && <CancelRoundedIcon onClick={() => {}} />}
											<InputAdornment position="end" onClick={() => {}}>
												<img src="/img/icons/search_icon.png" alt={'searchIcon'} />
											</InputAdornment>
										</>
									}
								/>
							</Stack>
							<Divider />
						</Box>
						<NoticeList select={select} anchorEl={anchorEl} deleteNoticeHandler={deleteNoticeHandler} />

						{/* <TablePagination
							rowsPerPageOptions={[20, 40, 60]}
							component="div"
							count={4}
							rowsPerPage={10}
							page={1}
							onPageChange={() => {}}
							onRowsPerPageChange={() => {}}
						/> */}
					</TabContext>
				</Box>
			</Box>
		</Box>
	);
};

export default withAdminLayout(AdminNotice);
