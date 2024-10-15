import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

import mainRoutes from '#start/routes/back/main_routes'
import productsRoutes from '#start/routes/back/products_routes'
import addressesRoutes from '#start/routes/back/addresses_routes'
import categoriesRoutes from '#start/routes/back/categories_routes'
import testRoutes from '#start/routes/back/test_routes'
import usersRoutes from '#start/routes/back/users_routes'

export default function backRoutes() {
  router
    .group(() => {
      addressesRoutes()
      categoriesRoutes()
      mainRoutes()
      productsRoutes()
      testRoutes()
      usersRoutes()
    })
    .prefix('admin')
    .as('admin')
    .use([middleware.auth(), middleware.admin()])
}
