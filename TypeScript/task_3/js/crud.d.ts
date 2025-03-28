import { RowID } from "./interface";
import { RowElement } from "./interface";


declare function insertRow (row: RowElement): RowID;
declare function deleteRow(rowID: RowID): void;
declare function updateRow(rowID: RowID, row:RowElement): RowID;

export {insertRow, deleteRow, updateRow};
