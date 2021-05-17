export interface Songs {
	[filterBy: string]: any;
	artist: string;
	title: string;
	isrc: string;
	duration: string;
	matchesArtist?: boolean;
	matchesTitle: boolean;
	matchesISRC: boolean;
	matchesDuration: boolean;
}
