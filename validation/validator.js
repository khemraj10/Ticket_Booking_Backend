const joi = require("joi");

export const validationUser = joi.object({
  userName: joi.string().alphanum().min(3).max(25).trim(true).required(),
  email: joi.string().email().trim(true).required(),
  password: joi.string().min(8).trim(true).required(),
  mobileNumber: joi
    .string()
    .length(10)
    .pattern(/[6-9]{1}[0-9]{9}/)
    .required(),
  is_active: joi.boolean().default(true),
});

export const validationTrip = joi.object({
  tripName: joi.string().alphanum().trim(true).required(),
  city: joi.string().alphanum().required(),
  date: joi.string().date().required(),
});

export const validationBooking = joi.object({
  seat: joi.string().alphanum().required(),
  status: joi.string(),
});
