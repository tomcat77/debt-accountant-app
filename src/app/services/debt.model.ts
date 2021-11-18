export interface DebtRecord {
    id: string;
    sum: number;
    currency: string;
    creditorId: string; // кто дал
    debtorId: string; // кому дали, кто должен
    dueDate: Date | null,
    status: 'OPEN' | 'CLOSED';
}

export interface CounterpartyRecord {
    id: string;
    title: string;
}