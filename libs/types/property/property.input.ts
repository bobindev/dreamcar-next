import { PropertyFuel, PropertyLocation, PropertyMaker, PropertyStatus, PropertyType } from '../../enums/property.enum';
import { Direction } from '../../enums/common.enum';

export interface PropertyInput {
	propertyType: PropertyType;
  propertyMaker: PropertyMaker;
	propertyLocation: PropertyLocation;
	propertyAddress: string;
	propertyModel: string;
  propertyYear: number;
	propertyPrice: number;
	propertyMileage: number;
	propertyFuel: PropertyFuel;
	propertyColor: string;
	propertyImages: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	memberId?: string;
	constructedAt?: Date;
}

interface PISearch {
	memberId?: string;
  makeList?: PropertyMaker[];
	locationList?: PropertyLocation[];
	typeList?: PropertyType[];
	colorList?: string[];
	options?: string[];
	fuelList?: string[];
	pricesRange?: Range;
	periodsRange?: PeriodsRange;
	mileageRange: MileageRange;
	text?: string;
}

export interface PropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: PISearch;
}

interface APISearch {
	propertyStatus?: PropertyStatus;
}

export interface AgentPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: APISearch;
}

interface ALPISearch {
	propertyStatus?: PropertyStatus;
	propertyLocationList?: PropertyLocation[];
}

export interface AllPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: ALPISearch;
}

interface Range {
	start: number;
	end: number;
}

interface PeriodsRange {
	start: Date | number;
	end: Date | number;
}

interface MileageRange {
  start: number;
	end: number;
}
