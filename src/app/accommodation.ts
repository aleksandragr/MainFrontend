export class AccommodationDTO{

	id: number;
    idAccommodation: number;
	name: string;
	type: string; 
	description: string;
	rating: number;
	free: boolean;
	category: number;
	idAdditionalS: number;
	idLocation: number; 
	country: string; 
	city: string; 
	address: string;
	idAgent: number;
	twobeds: number;
	theerebeds: number;
	fourbeds: number;
	fivebeds: number;
	onebeds: number;
	reservedFrom: string;
	reservedTo: string;
	aditionalServices: any;
}