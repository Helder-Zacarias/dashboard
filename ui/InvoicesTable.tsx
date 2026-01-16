import { Customer, Invoice } from "@/app/lib/type-definitions";
import { invoices, customers } from "@/app/lib/mock-data";

export default function InvoicesTable() {
    return(
        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Email</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map((invoice: Invoice, index: number) => {
                    // This logic should not be here at all

                    const customer: Customer = customers.find(customer => invoice.customer_id === customer.id) as Customer;
                    return(
                    <tr key={index}>
                        <th scope="row">{customer.id}</th>
                        <th scope="row">{customer.name}</th>
                        <th scope="row">{customer.email}</th>
                        <th scope="row">{invoice.amount}</th>
                        <th scope="row">{invoice.status}</th>
                        <th scope="row">{invoice.date}</th>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
}