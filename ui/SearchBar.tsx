import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import '@/ui/invoices.module.css';
import styles from "@/ui/invoices.module.css";

export default function SearchBar() {
    return(
        <div className={styles.searchBar}>
            <MagnifyingGlassIcon className="size-5"/>
            <input type="search" placeholder="Search" className={styles.searchBarInput}/>
        </div>
    );
}