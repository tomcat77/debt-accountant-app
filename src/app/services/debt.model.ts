export interface DebtRecord {
    id: string;
    sum: number;
    currency: string;
    creditorId: string; // кто дал
    debtorId: string; // кому дали, кто должен
    dueDate: Date | null,
    description: string | null,
    status: 'OPEN' | 'CLOSED';
    created: Date,
    updated?: Date,
}

export interface CounterpartyRecord {
    id: string;
    title: string;
}