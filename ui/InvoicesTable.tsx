import { Invoice } from "@/app/lib/type-definitions";
import { invoices } from "@/app/lib/mock-data";

export default function InvoicesTable() {
    return(
        <table>
            <thead>
                <tr>#</tr>
                <tr>Customer</tr>
                <tr>Email</tr>
                <tr>Amount</tr>
                <tr>Date</tr>
                <tr>Status</tr>
            </thead>
            <tbody>
                {/* {invoices.map((invoice) => 
                    <tr>
                        <th>invoice.</th>
                    </tr>
                )} */}
            </tbody>
        </table>
    );
}