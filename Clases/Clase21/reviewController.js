import httpStatus from '../helpers/httpStatus.js'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const reviewController = () => {
  const getReviews = async (request, response, next) => {
    const { query } = request

    try {
      const reviews = await prisma.reviews.findMany({
        where: {
          title: {
            contains: query?.title ?? ''
          }
        },
        include: {
          place: {
            select: {
              name: true
            }
          },
          user: {
            select: {
              name: true
            }
          }
        }
      })

      return response.status(httpStatus.OK).json(reviews)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getReviewByPlace = async (request, response, next) => {
    const { query } = request
    const placeName = query?.name ?? ''

    try {
      const reviews = await prisma.reviews.findMany({
        where: {
          place: {
            name: {
              contains: placeName,
              mode: 'insensitive'
            }
          }
        },
        include: {
          place: {
            select: {
              name: true
            }
          },
          user: {
            select: {
              name: true
            }
          }
        }

      })


      return response.status(httpStatus.OK).json(reviews)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getReviewByUser = async (request, response, next) => {
    const { query } = request
    const userName = query?.name ?? ''

    try {
      const reviews = await prisma.reviews.findMany({
        where: {
          user: {
            name: {
              contains: userName,
              mode: 'insensitive'
            }
          }
        },
        include: {
          place: {
            select: {
              name: true
            }
          },
          user: {
            select: {
              name: true
            }
          }
        }

      })


      return response.status(httpStatus.OK).json(reviews)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }


  const createReview = async (request, response, next) => {
    const { body } = request
    const placeId = Number(body?.placeId ?? null)
    const userId = Number(body?.userId ?? null)
    const { title, content } = body

    try {
      const review = await prisma.reviews.create({
        data: {
          title,
          content,
          placeId,
          userId
        },
        include: {
          place: {
            select: {
              name: true
            }
          },
          user: {
            select: {
              name: true
            }
          }
        }
      })


      return response.status(httpStatus.CREATED).json(review)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getReviewById = async (request, response, next) => {
    const { id } = request.params
    const reviewId = Number(id)

    try {
      const review = await prisma.reviews.findUnique({
        where: {
          id: reviewId
        }
      })

      const responseFormat = {
        data: review,
        message: 'Review retrieved successfully'
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
    const reviewId = Number(id)

    try {
      const review = await prisma.reviews.delete({
        where: {
          id: reviewId
        }
      })

      const responseFormat = {
        data: review,
        message: 'Review deleted successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const updateById = async (request, response, next) => {

    const { id } = request.params
    const reviewId = Number(id)
    const newReviewData = request.body

    try {
      const review = await prisma.reviews.update({
        where: {
          id: reviewId
        },
        data: {
          ...newReviewData
        },
        include: {
          place: {
            select: {
              name: true
            }
          },
          user: {
            select: {
              name: true
            }
          }
        }
      })


      const responseFormat = {
        data: review,
        message: 'Review updated successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }

  }




  return {
    getReviews,
    getReviewById,
    createReview,
    deleteById,
    updateById,
    getReviewByPlace,
    getReviewByUser
  }
}