const Joi = require('joi');

const boilersSchema = Joi.object({
  description: Joi.string()
    .required(),
  boilerType: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  hourMaintenanceCost: Joi.number()
    .min(0)
    .required(),
  hourEventualCost: Joi.number()
    .min(0)
    .required(),
  maintenanceRate: Joi.number()
    .min(0)
    .required(),
});

const techniciansSchema = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(30)
    .required(),
  address: Joi.string()
    .alphanum()
    .min(4)
    .max(40)
    .required(),
  lastName: Joi.string()
    .min(3)
    .max(30)
    .required(),
  phone: Joi.string()
    .min(5)
    .max(15)
    .required(),
  boilerTypes: Joi.array()
    .items()
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .error(() => 'The email is not valid. Please try again')
    .required(),
  dateOfBirth: Joi.date()
    .required(),
  monthlyCapacity: Joi.number()
    .min(1)
    .max(6)
    .required(),
  hourRate: Joi.number()
    .min(1)
    .max(6)
    .required()
});

const companiesSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  address: Joi.string()
    .min(3)
    .max(30)
    .required(),
  cuit: Joi.string()
    .alphanum()
    .max(11)
    .required(),
  phone: Joi.string()
    .min(9)
    .max(18)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
});

const boilerTypesSchema = Joi.object({
  description: Joi.string()
    .required(),
});

const buildingSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  company: Joi.string(),
  boilers: Joi.array().items(Joi.string()).required(),
});

const idSchema = Joi.object().keys({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
});

module.exports = {
  boilersSchema,
  companiesSchema,
  boilerTypesSchema,
  buildingSchema,
  techniciansSchema,
  idSchema,
};
