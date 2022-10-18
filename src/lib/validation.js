import Joi from "joi";

export const LoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const CategoriesSchema = Joi.object({
  category_name: Joi.string().required(),
});

export const SubCategoriesSchema = Joi.object({
  category_id: Joi.number().required(),
  subcategory_name: Joi.string().required(),
});

export const EventsSchema = Joi.object({
  event_date: Joi.string().required(),
  event_time: Joi.string().required(),
  category_id: Joi.number().required(),
  subcategory_id: Joi.number().required(),
  event_type: Joi.valid("online", "offline").required(),
  link: Joi.string().max(300).required(),
  user_type: Joi.valid("yuridik shaxs", "jismoniy shaxs"),
  user_fullname: Joi.string().min(2).max(50).required(),
  user_profession: Joi.string().required(),
  user_contact: Joi.string().required(),
  user_spare_contact: Joi.string().required(),
  user_legal_name: Joi.string(),
  description: Joi.string().max(50).required(),
  event_text: Joi.string().max(500).required(),
  event_img: Joi.string().pattern(
    new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)
  ),
});
