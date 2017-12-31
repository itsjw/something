export class Record {
    year: number;
    number: number;
    userName: string;
    parkingFees: ParkingFees;
    updateMonth: number;
    note: string;
}

export interface ParkingFees {
    january: number;
    february: number;
    march: number;
    april: number;
    may: number;
    june: number;
    july: number;
    august: number;
    september: number;
    october: number;
    november: number;
    december: number;
}
