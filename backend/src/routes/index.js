import { Router } from 'express'
import taxRoutes from './taxRoutes.js'


const router = Router()
const defaultRoutes = [
    {
        path: '/',
        route: taxRoutes
    }
    
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router
