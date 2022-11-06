export interface Pin {
    id: number;
    long: number;
    lat: number;
    updatedDate: number;
    creationDate: number;
}

export interface PaginatedPins {
    items: Pin[];
    cursor: string;
    hasNextPage: boolean;
}
