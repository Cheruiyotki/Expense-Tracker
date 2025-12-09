// db/config.ts (FIXED: Retaining getPool Name, Using Global Pool)

import dotenv from 'dotenv';
import assert from 'assert';
import { Pool } from 'pg';

dotenv.config();

const {
    PORT,
    PG_USER,
    PG_PASSWORD,
    PG_HOST,
    PG_DATABASE,
    PG_PORT
} = process.env;

// --- 1. Assertions (Good, Keep them) ---
assert(PORT, "PORT is REQUIRED");
assert(PG_USER, "PG_USER (Database Username) is REQUIRED");
assert(PG_PASSWORD, "PG_PASSWORD (Database Password) is REQUIRED");
assert(PG_HOST, "PG_HOST (Database Server) is REQUIRED");
assert(PG_DATABASE, "PG_DATABASE (Database Name) is REQUIRED");
assert(PG_PORT, "PG_PORT (Database Port) is REQUIRED");

// --- 2. Configuration Object ---
const pgConfig = {
    user: PG_USER,
    password: PG_PASSWORD,
    host: PG_HOST,
    database: PG_DATABASE,
    port: parseInt(PG_PORT, 10),
    max: 10,           // max connections in pool
    idleTimeoutMillis: 30000,
};

export const config = {
    port: parseInt(PORT, 10),
    pgConfig,
};

// --- 3. CRITICAL FIX: Create the Pool Instance ONCE globally ---
const globalPool = new Pool(pgConfig);

// --- 4. SAFE IMPLEMENTATION: getPool now returns the global instance ---
// It is now an idempotent (always returns the same result) function.
export const getPool = async () => {
    try {
        // We only test the connection here, but always return the global instance.
        // This prevents creating a new pool on every request.
        await globalPool.query('SELECT 1'); 
        return globalPool; // Returns the single, reusable pool instance
    } catch (err) {
        console.error("❌ PostgreSQL Connection Error: The database is unreachable.", err);
        throw err;
    }
};
// Export the pool instance as default for direct use if preferred
export default globalPool;