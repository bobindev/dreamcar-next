import { PropertyFuel, PropertyLocation, PropertyMaker, PropertyStatus, PropertyType } from '../../enums/property.enum';

export interface PropertyUpdate {
	_id: string;
	propertyType?: PropertyType;
  propertyMaker: PropertyMaker;
	propertyStatus?: PropertyStatus;
	propertyLocation?: PropertyLocation;
	propertyAddress?: string;
	propertyModel?: string;
  propertyYear?: number;
	propertyPrice?: number;
	propertyMileage?: number;
	propertyFuel?: PropertyFuel;
	propertyColor?: string;
	propertyImages?: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
}
