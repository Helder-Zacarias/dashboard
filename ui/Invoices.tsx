import styles from "@/ui/invoices.module.css";
import { PlusIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import Pager from "./Pager";
import InvoicesTable from "./InvoicesTable";

export default function Invoices() {
    return(
        <main className="dashboardMainContainer">
            <div className={styles.flexContainer}>
                <h1>Invoices</h1>
                <button className={`commomnButton ${styles.actionButton}`}>
                    Create Invoice
                    <PlusIcon className="size-5"/>
                </button>
            </div>
            <div className={styles.flexContainer}>
                <SearchBar/>
                <Pager/>
            </div>
            <section>
                <InvoicesTable/>
            </section>
        </main>
    );
}