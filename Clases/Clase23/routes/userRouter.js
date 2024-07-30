import { Router } from 'express'
import { userController } from '../controllers/userController.js'
import { isAdmin } from '../middlewares/checkRole.js'
import { schemaValidator } from '../middlewares/validations.js'
import { bodyUserSchema, updateUserSchema } from '../schemas/userSchemas.js'



export const userRoutes = () => {
    const userRouter = Router()
    const { register, login, profile, deleteUser, updateUser, refreshToken } = userController()

    userRouter.route('/register')
        .post(schemaValidator(bodyUserSchema), register)

    userRouter.route('/login')
        .post(schemaValidator(bodyUserSchema), login)

    userRouter.route('/profile/:id')
        .get(profile)
        .delete(isAdmin, deleteUser)
        .patch(isAdmin, schemaValidator(updateUserSchema), updateUser)

    userRouter.route('/refresh-token')
        .post(schemaValidator(bodyUserSchema), refreshToken)

    return userRouter
}
