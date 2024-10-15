import router from '@adonisjs/core/services/router'

// CONTROLLERS CATEGORIES
const ShowListCategoryController = () =>
  import('#admin/category/controllers/show_list_category_controller')
const AddCategoryController = () => import('#admin/category/controllers/add_category_controller')
const EditCategoryController = () => import('#admin/category/controllers/edit_category_controller')
const SwitchCategoryController = () =>
  import('#admin/category/controllers/switch_category_controller')
const DeleteCategoryController = () =>
  import('#admin/category/controllers/delete_category_controller')

// PARTIE CATEGORIES
export default function categoriesRoutes() {
  router
    .group(() => {
      router.get('/list/:parentId?', [ShowListCategoryController, 'render']).as('list')
      router.get('/add', [AddCategoryController, 'render']).as('add')
      router.post('/add', [AddCategoryController, 'store']).as('store')
      router.get('/edit/:id', [EditCategoryController, 'render']).as('edit')
      router.post('/edit/:id', [EditCategoryController, 'update']).as('update')
      router.get('/switch/:id', [SwitchCategoryController, 'switch']).as('switch')
      router.get('/confirm/delete/:ids?', [DeleteCategoryController, 'render']).as('confirm.delete')
      router.post('/delete', [DeleteCategoryController, 'handle']).as('delete')
    })
    .prefix('categories')
    .as('category')
}
