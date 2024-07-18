import { PropertyFuel, PropertyLocation, PropertyMaker, PropertyStatus, PropertyType } from '../../enums/property.enum';
import { Member } from '../member/member';

export interface MeLiked {
	memberId: string;
	likeRefId: string;
	myFavorite: boolean;
}

export interface TotalCounter {
	total: number;
}

export interface Property {
	_id: string;
	propertyType: PropertyType;
  propertyMaker: PropertyMaker;
	propertyStatus: PropertyStatus;
	propertyLocation: PropertyLocation;
	propertyAddress: string;
	propertyModel: string;
  propertyYear: number;
	propertyPrice: number;
	propertyMileage: number;
	propertyColor: string;
	propertyFuel: PropertyFuel;
	propertyViews: number;
	propertyLikes: number;
	propertyComments: number;
	propertyRank: number;
	propertyImages: string[];
	propertyDesc?: string;
	propertyBarter: boolean;
	propertyRent: boolean;
	memberId: string;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
	/** from aggregation **/
	meLiked?: MeLiked[];
	memberData?: Member;
}

export interface Properties {
	list: Property[];
	metaCounter: TotalCounter[];
}
