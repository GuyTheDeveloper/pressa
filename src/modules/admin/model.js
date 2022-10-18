import { fetch } from "../../lib/postgres.js";
import { LOGINADMIN } from "./query.js";

const LOGIN = async ({ username, password }) => {
  try {
    const admin = await fetch(LOGINADMIN, [username, password]);
    return admin;
  } catch (error) {
    console.log(error);
  }
};

export default { LOGIN };
