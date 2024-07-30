import httpStatus from '../helpers/httpStatus.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const reviewFavController = () => {
  const markAsFavorite = async (request, response, next) => {
    const { body } = request
    const reviewId = Number(body?.reviewId ?? null)
    const userId = Number(body?.userId ?? null)

    try {
      const favoriteReview = await prisma.usersFavoriteReviews.create({
        data: {
          reviewId,
          userId
        }
      })

      return response.status(httpStatus.CREATED).json(favoriteReview)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getAllFavoriteReviews = async (request, response, next) => {
    const { query } = request
    const userId = Number(query?.id)

    try {
      const favoriteReviews = await prisma.usersFavoriteReviews.findMany({
        where: {
          userId
        },
        select: {
          reviewId: true,
          userId: true,
          review: {
            select: {
              title: true,
              content: true,
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

      return response.status(httpStatus.OK).json(favoriteReviews)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }



  const getAllUsersWhoFavedAReview = async (request, response, next) => {
    const { query } = request
    const reviewId = Number(query?.id)

    try {
      const usersWhoFavedReviews = await prisma.usersFavoriteReviews.findMany({
        where: {
          reviewId
        },
        select: {
          reviewId: true,
          userId: true,
          review: {
            select: {
              title: true,
              content: true,
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

      return response.status(httpStatus.OK).json(usersWhoFavedReviews)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }



  return {
    markAsFavorite,
    getAllFavoriteReviews,
    getAllUsersWhoFavedAReview
  }
}