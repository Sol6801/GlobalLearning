import httpStatus from '../helpers/httpStatus.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const placeFavController = () => {
  const markAsFavorite = async (request, response, next) => {
    const { body } = request
    const placeId = Number(body?.placeId ?? null)
    const userId = Number(body?.userId ?? null)

    try {
      const favoritePlace = await prisma.usersFavoritePlaces.create({
        data: {
          placeId,
          userId
        }
      })

      return response.status(httpStatus.CREATED).json(favoritePlace)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getAllFavoritePlaces = async (request, response, next) => {
    const { query } = request
    const userId = Number(query?.id)

    try {
      const favoritePlaces = await prisma.usersFavoritePlaces.findMany({
        where: {
          userId
        },
        select: {
          placeId: true,
          userId: true,
          place: {
            select: {
              name: true,
            }
          },
          user: {
            select: {
              name: true,
              email: true,
            }
          }
        },
      })

      return response.status(httpStatus.OK).json(favoritePlaces)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getAllUsersWhoFavedAPlace = async (request, response, next) => {
    const { query } = request
    const placeId = Number(query?.id)

    try {
      const usersWhoFavedPlaces = await prisma.usersFavoritePlaces.findMany({
        where: {
          placeId
        },
        select: {
          placeId: true,
          userId: true,
          place: {
            select: {
              name: true,
            }
          },
          user: {
            select: {
              name: true,
              email: true,
            }
          }
        },
      })

      return response.status(httpStatus.OK).json(usersWhoFavedPlaces)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  return {
    markAsFavorite,
    getAllFavoritePlaces,
    getAllUsersWhoFavedAPlace
  }
}