/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

const SongPayloadSchema = Joi.object({
    title: Joi.string().required(),
    year: Joi.number().integer().min(1997).max(2022).required(),
    performer: Joi.string().required(),
    genre: Joi.string().required(),
    duration: Joi.number(),
    body: Joi.string(),
});

module.exports = { SongPayloadSchema };