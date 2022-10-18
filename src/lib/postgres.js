import pg from "pg";
import { pgConfig } from "../config.js";

const pool = new pg.Pool(pgConfig);

async function fetchAll(SQL, params = []) {
  const client = await pool.connect();
  try {
    let { rows } = await client.query(SQL, params);
    return rows;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
}

async function fetch(SQL, params = []) {
  const client = await pool.connect();
  try {
    let {
      rows: [row],
    } = await client.query(SQL, params);
    return row;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
}

export { fetchAll, fetch };
