import { fetch, fetchAll } from "../../lib/postgres.js";
import {
  DELETECATEGORY,
  POSTSUBCATEGORY,
  PUTSUBCATEGORY,
  GETSUBCATEGORIES,
} from "./query.js";

const GET = async ({ subcategoryId = 0 }) => {
  try {
    let subcategories = fetchAll(GETSUBCATEGORIES, [subcategoryId]);
    return subcategories;
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({ category_id, subcategory_name }) => {
  try {
    let subcategory = await fetch(POSTSUBCATEGORY, [
      category_id,
      subcategory_name,
    ]);
    return subcategory;
  } catch (error) {
    console.log(error);
  }
};

const PUT = async (
  { subcategoryId },
  { category_id = 0, subcategory_name = "" }
) => {
  try {
    let subcategory = await fetch(PUTSUBCATEGORY, [
      subcategoryId,
      category_id,
      subcategory_name,
    ]);
    return subcategory;
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ subcategoryId }) => {
  try {
    let subcategory = await fetch(DELETECATEGORY, [subcategoryId]);
    return subcategory;
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, PUT, DELETE };
