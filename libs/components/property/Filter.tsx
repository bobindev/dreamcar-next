import React, { useCallback, useEffect, useState } from 'react';
import {
	Stack,
	Typography,
	Checkbox,
	Button,
	OutlinedInput,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Tooltip,
	IconButton,
} from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { PropertyLocation, PropertyType } from '../../enums/property.enum';
import { PropertiesInquiry } from '../../types/property/property.input';
import { useRouter } from 'next/router';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { propertyMileage } from '../../config';
import RefreshIcon from '@mui/icons-material/Refresh';

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
		},
	},
};

interface FilterType {
	searchFilter: PropertiesInquiry;
	setSearchFilter: any;
	initialInput: PropertiesInquiry;
}

const Filter = (props: FilterType) => {
	const { searchFilter, setSearchFilter, initialInput } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const [propertyLocation, setPropertyLocation] = useState<PropertyLocation[]>(Object.values(PropertyLocation));
	const [propertyType, setPropertyType] = useState<PropertyType[]>(Object.values(PropertyType));
	const [searchText, setSearchText] = useState<string>('');
	const [showMore, setShowMore] = useState<boolean>(false);

	/** LIFECYCLES **/
	useEffect(() => {
		const queryParams = JSON.stringify({
			...searchFilter,
			search: {
				...searchFilter.search,
			},
		});

		if (searchFilter?.search?.locationList?.length == 0) {
			delete searchFilter.search.locationList;
			setShowMore(false);
			router.push(`/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, `/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, { scroll: false }).then();
		}

		if (searchFilter?.search?.typeList?.length == 0) {
			delete searchFilter.search.typeList;
			router.push(`/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, `/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, { scroll: false }).then();
		}

		if (searchFilter?.search?.colorList?.length == 0) {
			delete searchFilter.search.colorList;
			router.push(`/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, `/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, { scroll: false }).then();
		}

		if (searchFilter?.search?.options?.length == 0) {
			delete searchFilter.search.options;
			router.push(`/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, `/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, { scroll: false }).then();
		}

		if (searchFilter?.search?.fuelList?.length == 0) {
			delete searchFilter.search.fuelList;
			router.push(`/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, `/property?input=${JSON.stringify({
        ...searchFilter,
        search: {
          ...searchFilter.search,
        },
      })}`, { scroll: false }).then();
		}

		if (searchFilter?.search?.locationList) setShowMore(true);
	}, [searchFilter]);

	/** HANDLERS **/
	const propertyLocationSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, locationList: [...(searchFilter?.search?.locationList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, locationList: [...(searchFilter?.search?.locationList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.locationList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								locationList: searchFilter?.search?.locationList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								locationList: searchFilter?.search?.locationList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('propertyLocationSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyLocationSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyTypeSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, typeList: [...(searchFilter?.search?.typeList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, typeList: [...(searchFilter?.search?.typeList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.typeList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('propertyTypeSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyColorSelectHandler = useCallback(
		async (string: String) => {
			try {
				if (string != '') {
					if (searchFilter?.search?.colorList?.includes('')) {
						await router.push(
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: {
									...searchFilter.search,
									colorList: searchFilter?.search?.colorList?.filter((item: String) => item !== string),
								},
							})}`,
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: {
									...searchFilter.search,
									colorList: searchFilter?.search?.colorList?.filter((item: String) => item !== string),
								},
							})}`,
							{ scroll: false },
						);
					} else {
						await router.push(
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: { ...searchFilter.search, colorList: [...(searchFilter?.search?.colorList || []), string] },
							})}`,
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: { ...searchFilter.search, colorList: [...(searchFilter?.search?.colorList || []), string] },
							})}`,
							{ scroll: false },
						);
					}
				} else {
					delete searchFilter?.search.colorList;
					setSearchFilter({ ...searchFilter });
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
							},
						})}`,
						{ scroll: false },
					);
				}

				console.log('propertyColorSelectHandler:', string);
			} catch (err: any) {
				console.log('ERROR, propertyColorSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyOptionSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, options: [...(searchFilter?.search?.options || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, options: [...(searchFilter?.search?.options || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.options?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								options: searchFilter?.search?.options?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								options: searchFilter?.search?.options?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				console.log('propertyOptionSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyOptionSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyFuelSelectHandler = useCallback(
		async (string: String) => {
			try {
				if (string != '') {
					if (searchFilter?.search?.fuelList?.includes('')) {
						await router.push(
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: {
									...searchFilter.search,
									fuelList: searchFilter?.search?.fuelList?.filter((item: String) => item !== string),
								},
							})}`,
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: {
									...searchFilter.search,
									fuelList: searchFilter?.search?.fuelList?.filter((item: String) => item !== string),
								},
							})}`,
							{ scroll: false },
						);
					} else {
						await router.push(
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: { ...searchFilter.search, fuelList: [...(searchFilter?.search?.fuelList || []), string] },
							})}`,
							`/property?input=${JSON.stringify({
								...searchFilter,
								search: { ...searchFilter.search, fuelList: [...(searchFilter?.search?.fuelList || []), string] },
							})}`,
							{ scroll: false },
						);
					}
				} else {
					delete searchFilter?.search.fuelList;
					setSearchFilter({ ...searchFilter });
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
							},
						})}`,
						{ scroll: false },
					);
				}

				console.log('propertyFuelSelectHandler:', string);
			} catch (err: any) {
				console.log('ERROR, propertyFuelSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyMileageHandler = useCallback(
		async (e: any, type: string) => {
			const value = e.target.value;

			if (type == 'start') {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							mileageRange: { ...searchFilter.search.mileageRange, start: value },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							mileageRange: { ...searchFilter.search.mileageRange, start: value },
						},
					})}`,
					{ scroll: false },
				);
			} else {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							mileageRange: { ...searchFilter.search.mileageRange, end: value },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							mileageRange: { ...searchFilter.search.mileageRange, end: value },
						},
					})}`,
					{ scroll: false },
				);
			}
		},
		[searchFilter],
	);

	const propertyPriceHandler = useCallback(
		async (value: number, type: string) => {
			if (type == 'start') {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
			} else {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
			}
		},
		[searchFilter],
	);

	const refreshHandler = async () => {
		try {
			setSearchText('');
			await router.push(
				`/property?input=${JSON.stringify(initialInput)}`,
				`/property?input=${JSON.stringify(initialInput)}`,
				{ scroll: false },
			);
		} catch (err: any) {
			console.log('ERROR, refreshHandler:', err);
		}
	};

	if (device === 'mobile') {
		return <div>PROPERTIES FILTER</div>;
	} else {
		return (
			<Stack className={'filter-main'}>
				<Stack className={'find-your-home'} mb={'40px'}>
					<Typography className={'title-main'}>Find Your Home</Typography>
					<Stack className={'input-box'}>
						<OutlinedInput
							value={searchText}
							type={'text'}
							className={'search-input'}
							placeholder={'What are you looking for?'}
							onChange={(e: any) => setSearchText(e.target.value)}
							onKeyDown={(event: any) => {
								if (event.key == 'Enter') {
									setSearchFilter({
										...searchFilter,
										search: { ...searchFilter.search, text: searchText },
									});
								}
							}}
							endAdornment={
								<>
									<CancelRoundedIcon
										onClick={() => {
											setSearchText('');
											setSearchFilter({
												...searchFilter,
												search: { ...searchFilter.search, text: '' },
											});
										}}
									/>
								</>
							}
						/>
						<img src={'/img/icons/search_icon.png'} alt={''} />
						<Tooltip title="Reset">
							<IconButton onClick={refreshHandler}>
								<RefreshIcon />
							</IconButton>
						</Tooltip>
					</Stack>
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
						Location
					</p>
					<Stack
						className={`property-location`}
						style={{ height: showMore ? '253px' : '115px' }}
						onMouseEnter={() => setShowMore(true)}
						onMouseLeave={() => {
							if (!searchFilter?.search?.locationList) {
								setShowMore(false);
							}
						}}
					>
						{propertyLocation.map((location: string) => {
							return (
								<Stack className={'input-box'} key={location}>
									<Checkbox
										id={location}
										className="property-checkbox"
										color="default"
										size="small"
										value={location}
										checked={(searchFilter?.search?.locationList || []).includes(location as PropertyLocation)}
										onChange={propertyLocationSelectHandler}
									/>
									<label htmlFor={location} style={{ cursor: 'pointer' }}>
										<Typography className="property-type">{location}</Typography>
									</label>
								</Stack>
							);
						})}
					</Stack>
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Property Type</Typography>
					{propertyType.map((type: string) => (
						<Stack className={'input-box'} key={type}>
							<Checkbox
								id={type}
								className="property-checkbox"
								color="default"
								size="small"
								value={type}
								onChange={propertyTypeSelectHandler}
								checked={(searchFilter?.search?.typeList || []).includes(type as PropertyType)}
							/>
							<label style={{ cursor: 'pointer' }}>
								<Typography className="property_type">{type}</Typography>
							</label>
						</Stack>
					))}
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Select color</Typography>
					<Stack className="button-group">
						<Button
							sx={{
								borderRadius: '12px 0 0 12px',
								border: !searchFilter?.search?.colorList ? '2px solid #181A20' : '1px solid #b9b9b9',
							}}
							onClick={() => propertyColorSelectHandler('')}
						>
							Any
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.colorList?.includes('White') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.colorList?.includes('White') ? undefined : 'none',
							}}
							onClick={() => propertyColorSelectHandler('White')}
						>
							White
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.colorList?.includes('Black') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.colorList?.includes('Black') ? undefined : 'none',
							}}
							onClick={() => propertyColorSelectHandler('Black')}
						>
							Black
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.colorList?.includes('Red') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.colorList?.includes('Red') ? undefined : 'none',
							}}
							onClick={() => propertyColorSelectHandler('Red')}
						>
							Red
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.colorList?.includes('Blue') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.colorList?.includes('Blue') ? undefined : 'none',
								borderRight: searchFilter?.search?.colorList?.includes('Blue') ? undefined : 'none',
							}}
							onClick={() => propertyColorSelectHandler('Blue')}
						>
							Blue
						</Button>
						<Button
							sx={{
								borderRadius: '0 12px 12px 0',
								border: searchFilter?.search?.colorList?.includes('Orange') ? '2px solid #181A20' : '1px solid #b9b9b9',
							}}
							onClick={() => propertyColorSelectHandler('Orange')}
						>
							Orange
						</Button>
					</Stack>
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Fuel type</Typography>
					<Stack className="button-group">
						<Button
							sx={{
								borderRadius: '12px 0 0 12px',
								border: !searchFilter?.search?.fuelList ? '2px solid #181A20' : '1px solid #b9b9b9',
							}}
							onClick={() => propertyFuelSelectHandler('')}
						>
							Any
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.fuelList?.includes('ELECTRIC') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.fuelList?.includes('ELECTRIC') ? undefined : 'none',
							}}
							onClick={() => propertyFuelSelectHandler('ELECTRIC')}
						>
							ELECTRIC
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.fuelList?.includes('GASOLINE') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.fuelList?.includes('GASOLINE') ? undefined : 'none',
							}}
							onClick={() => propertyFuelSelectHandler('GASOLINE')}
						>
							GASOLINE
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.fuelList?.includes('HYBRID') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.fuelList?.includes('HYBRID') ? undefined : 'none',
							}}
							onClick={() => propertyFuelSelectHandler('HYBRID')}
						>
							HYBRID
						</Button>
						<Button
							sx={{
								borderRadius: 0,
								border: searchFilter?.search?.fuelList?.includes('DIESEL') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.fuelList?.includes('DIESEL') ? undefined : 'none',
								// borderRight: false ? undefined : 'none',
							}}
							onClick={() => propertyFuelSelectHandler('DIESEL')}
						>
							DIESEL
						</Button>
						<Button
							sx={{
								borderRadius: '0 12px 12px 0',
								border: searchFilter?.search?.fuelList?.includes('LPG') ? '2px solid #181A20' : '1px solid #b9b9b9',
								borderLeft: searchFilter?.search?.fuelList?.includes('LPG') ? undefined : 'none',
							}}
							onClick={() => propertyFuelSelectHandler('LPG')}
						>
							LPG
						</Button>
					</Stack>
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Options</Typography>
					<Stack className={'input-box'}>
						<Checkbox
							id={'Barter'}
							className="property-checkbox"
							color="default"
							size="small"
							value={'propertyBarter'}
							checked={(searchFilter?.search?.options || []).includes('propertyBarter')}
							onChange={propertyOptionSelectHandler}
						/>
						<label htmlFor={'Barter'} style={{ cursor: 'pointer' }}>
							<Typography className="propert-type">Barter</Typography>
						</label>
					</Stack>
					<Stack className={'input-box'}>
						<Checkbox
							id={'Rent'}
							className="property-checkbox"
							color="default"
							size="small"
							value={'propertyRent'}
							checked={(searchFilter?.search?.options || []).includes('propertyRent')}
							onChange={propertyOptionSelectHandler}
						/>
						<label htmlFor={'Rent'} style={{ cursor: 'pointer' }}>
							<Typography className="propert-type">Rent</Typography>
						</label>
					</Stack>
				</Stack>
				<Stack className={'find-your-home'} mb={'30px'}>
					<Typography className={'title'}>Mileage</Typography>
					<Stack className="square-year-input">
						<FormControl>
							<InputLabel id="demo-simple-select-label">Min</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={searchFilter?.search?.mileageRange?.start ?? 0}
								label="Min"
								onChange={(e: any) => propertyMileageHandler(e, 'start')}
								MenuProps={MenuProps}
							>
								{propertyMileage.map((mileage: number) => (
									<MenuItem
										value={mileage}
										disabled={(searchFilter?.search?.mileageRange?.end || 0) < mileage}
										key={mileage}
									>
										{mileage}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<div className="central-divider"></div>
						<FormControl>
							<InputLabel id="demo-simple-select-label">Max</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={searchFilter?.search?.mileageRange?.end ?? 500000}
								label="Max"
								onChange={(e: any) => propertyMileageHandler(e, 'end')}
								MenuProps={MenuProps}
							>
								{propertyMileage.map((mileage: number) => (
									<MenuItem
										value={mileage}
										disabled={(searchFilter?.search?.mileageRange?.start || 0) > mileage}
										key={mileage}
									>
										{mileage}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
				</Stack>
				<Stack className={'find-your-home'}>
					<Typography className={'title'}>Price Range</Typography>
					<Stack className="square-year-input">
						<input
							type="number"
							placeholder="$ min"
							min={0}
							value={searchFilter?.search?.pricesRange?.start ?? 0}
							onChange={(e: any) => {
								if (e.target.value >= 0) {
									propertyPriceHandler(e.target.value, 'start');
								}
							}}
						/>
						<div className="central-divider"></div>
						<input
							type="number"
							placeholder="$ max"
							value={searchFilter?.search?.pricesRange?.end ?? 0}
							onChange={(e: any) => {
								if (e.target.value >= 0) {
									propertyPriceHandler(e.target.value, 'end');
								}
							}}
						/>
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default Filter;
