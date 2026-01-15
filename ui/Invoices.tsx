import styles from "@/ui/invoices.module.css";
import { PlusIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

export default function Invoices() {
    return(
        <main className="dashboardMainContainer">
            <div>
                <h1>Invoices</h1>
                <button className={`commomnButton ${styles.actionButton}`}>
                    Create Invoice
                    <PlusIcon className="size-5"/>
                </button>
            </div>
            <SearchBar/>
        </main>
    );
}