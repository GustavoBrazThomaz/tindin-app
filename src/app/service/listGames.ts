export interface listGamesInterface{
    _id: string;
    title: string;
    description: string;
    photos: Array<Photos>;
    genres: Array<string>;
    platforms: Array<string>;
    tags: Array<string>;
    rating: number;
    totalVotes: number;
    videos?: Array<any>;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    mediumPrice: number;
    releaseYear: number;
    highlight: boolean
}

export interface Photos {
    name: string;
    url: string;
    _id: string;
}