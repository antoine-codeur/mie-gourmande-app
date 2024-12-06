export interface Promotion {
    id: string;
    name: string;
    type: 'percentage' | 'fixed';
    value: number;
    productIds: string[];
    startDate: string;
    endDate: string;
    status: 'active' | 'inactive';
    code: string;
} 