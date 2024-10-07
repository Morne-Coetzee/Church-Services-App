export interface ChurchService {
    id?: number;
    name: string;
    description: string;
    date: string;
    type: string;
}

export interface ChurchServiceType {
    id: number;
    name: string;
}