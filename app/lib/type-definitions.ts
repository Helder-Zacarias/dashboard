export type User =  {
    id: string;
    name: string;
    email: string
    password: string;
}

export type Customer = {
    id: string,
    name: string,
    email: string;
    image_url: string; //This will be a path
}

export type Invoice = {
    customer_id: string; // Don't know yet how I'll add this foreign key
    amount: number;
    status: string; // Will probably use a enum
    date: string; // Will use a Date object
}

export type Revenue = {
    month: string // Probably use a enum
    revenue: number;
}

