import axios from 'axios';
import pool from '../../config/db';

export default async function generateSimplifiedInvoice() {
    try {
        // Here will fetch the data needed to generate invoice
        const fetchedData = await pool.query("SELECT * FROM organization_branch_pos");
        const dataFields = fetchedData.oid;
        const invoiceData = {
            // Here restructuring the data
        }
    } catch (error: any) {
        throw new Error(`There is error occured during execution, error message: ${error.message}`);
    }
};