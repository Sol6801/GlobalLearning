import Joi from 'joi'

export const bodyPlaceSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().max(80).required(),
  })
})

export const idPlaceSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().pattern(/^[0-9]+$/, 'Debe ser un número').required()
  })
})

export const updatePlaceSchema = Joi.object({
  body: bodyPlaceSchema.extract('body'),
  params: idPlaceSchema.extract('params')
})