// db/config.ts
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

// Ensure all required env variables are defined
assert(PORT, "PORT is REQUIRED");
assert(PG_USER, "PG_USER (Database Username) is REQUIRED");
assert(PG_PASSWORD, "PG_PASSWORD (Database Password) is REQUIRED");
assert(PG_HOST, "PG_HOST (Database Server) is REQUIRED");
assert(PG_DATABASE, "PG_DATABASE (Database Name) is REQUIRED");
assert(PG_PORT, "PG_PORT (Database Port) is REQUIRED");

// Config object
export const config = {
    port: parseInt(PORT, 10),
    pgConfig: {
        user: PG_USER,
        password: PG_PASSWORD,
        host: PG_HOST,
        database: PG_DATABASE,
        port: parseInt(PG_PORT, 10),
        max: 10,          // max connections in pool
        idleTimeoutMillis: 30000,
    }
};

// Export a getPool function like the MSSQL example
export const getPool = async () => {
    try {
        const pool = new Pool(config.pgConfig);
        // Test connection
        await pool.query('SELECT 1');
        return pool;
    } catch (err) {
        console.error("PostgreSQL Connection Error: ", err);
        throw err;
    }
};
