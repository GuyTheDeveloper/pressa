import {
  LoginSchema,
  CategoriesSchema,
  EventsSchema,
  SubCategoriesSchema,
} from "../lib/validation.js";
export default (req, res, next) => {
  try {
    if (req.url == "/admin/login") {
      let { error } = LoginSchema.validate(req.body);
      if (error) throw error;
    }
    if (req.url == "/categories") {
      let { error } = CategoriesSchema.validate(req.body);
      if (error) throw error;
    }
    if (req.url == "/subcategories") {
      let { error } = SubCategoriesSchema.validate(req.body);
      if (error) throw error;
    }
    if (req.url == "/events") {
      let { error } = EventsSchema.validate(req.body);
      if (error) throw error;
    }
    return next();
  } catch (error) {
    return next(new Error(401, error.message));
  }
};
