https://stackoverflow.com/questions/40508487/how-can-i-reset-primeng-datatable-sort-state
\*\*Come resettare il sort della tabella
HTML
<p-table #table ...>
TS
import {Table} from 'primeng/table';
@ViewChild('table') table: Table;
//...
resetSort() {
this.table.sortOrder = 0;
this.table.sortField = '';
this.table.reset();
}
