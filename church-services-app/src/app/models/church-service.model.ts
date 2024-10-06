export interface ChurchService {
    id: number;
    name: string;
    type: ChurchServiceType;
    date: string;
    description: string;
}

export interface ChurchServiceType {
    id: number;
    name: string;
}