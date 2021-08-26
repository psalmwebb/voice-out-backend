const Joi = require("@hapi/joi");



module.exports = {

    loginSchema:Joi.object({
           username:Joi.string().required(),
           password:Joi.string().min(5).required()
       }),

    registerSchema:Joi.object({
           username:Joi.string().min(3).required(),
           password:Joi.string().min(6).alphanum().required()
    })
}