import { fetch, fetchAll } from "../../lib/postgres.js";
import {
  GETCATEGORIES,
  POSTCATEGORY,
  PUTCATEGORY,
  DELETECATEGORY,
} from "./query.js";

const GET = async ({ categoryId = 0 }) => {
  try {
    const categories = await fetchAll(GETCATEGORIES, [categoryId]);
    return categories.map((category) => {
      category.sub_categories =
        category.sub_categories[0] == null ? [] : category.sub_categories;
      return category;
    });
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({ category_name }) => {
  try {
    const category = await fetch(POSTCATEGORY, [category_name]);
    return category;
  } catch (error) {
    console.log(error);
  }
};

const PUT = async ({ categoryId }, { category_name }) => {
  try {
    const category = await fetch(PUTCATEGORY, [categoryId, category_name]);
    return category;
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ categoryId }) => {
  try {
    const category = await fetch(DELETECATEGORY, [categoryId]);
    return category;
  } catch (error) {
    console.log(error);
  }
};
export default { GET, POST, PUT, DELETE };
