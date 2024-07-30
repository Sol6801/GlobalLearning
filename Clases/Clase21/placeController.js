import { PrismaClient } from '@prisma/client'
import httpStatus from '../helpers/httpStatus.js'



const prisma = new PrismaClient()

export const placeController = () => {
  const getPlaces = async (request, response, next) => {
    const { query } = request

    try {
      const places = await prisma.places.findMany({
        where: {
          name: {
            contains: query?.name ?? ''
          }
        }
      })

      const responseFormat = {
        data: places,
        message: 'Places retrieved successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getAllPlaces = async (_request, response, next) => {
    try {
      const places = await prisma.places.findMany()


      const responseFormat = {
        data: places,
        message: 'Places retrieved successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }
  const getPlaceById = async (request, response, next) => {
    const { id } = request.params
    const placeId = Number(id)

    try {
      const place = await prisma.places.findUnique({
        where: {
          id: placeId
        }
      })

      const responseFormat = {
        data: place,
        message: 'Place retrieved successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const createPlace = async (request, response, next) => {
    const { name, } = request.body
    try {
      const place = await prisma.places.create({
        data: {
          name
        }
      })


      return response.status(httpStatus.CREATED).json(place)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const updateById = async (request, response, next) => {

    const { id } = request.params
    const placeId = Number(id)
    const newPlaceData = request.body

    try {
      const place = await prisma.places.findUnique({
        where: {
          id: placeId
        },
        data: {
          ...newPlaceData
        }
      })


      const responseFormat = {
        data: place,
        message: 'Place updated successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }

  }

  const deleteById = async (request, response, next) => {
    const { id } = request.params
    const placeId = Number(id)

    try {
      const place = await prisma.places.delete({
        where: {
          id: placeId
        }
      })

      const responseFormat = {
        data: place,
        message: 'Place deleted successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  return {
    getPlaces,
    getPlaceById,
    getAllPlaces,
    createPlace,
    updateById,
    deleteById
  }
}