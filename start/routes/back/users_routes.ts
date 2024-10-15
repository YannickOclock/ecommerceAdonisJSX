import router from '@adonisjs/core/services/router'

// CONTROLLERS USERS
const ShowListUserController = () => import('#admin/user/controllers/show_list_user_controller')
const AddUserController = () => import('#admin/user/controllers/add_user_controller')
const EditUserController = () => import('#admin/user/controllers/edit_user_controller')
const SwitchUserController = () => import('#admin/user/controllers/switch_user_controller')
const SwitchUserDarkModeController = () =>
  import('#admin/user/controllers/switch_dark_mode_controller')
const DeleteUserController = () => import('#admin/user/controllers/delete_user_controller')

// PARTIE USERS
export default function usersRoutes() {
  router
    .group(() => {
      router.get('/', [ShowListUserController, 'render']).as('list')
      router.get('/add', [AddUserController, 'render']).as('add')
      router.post('/add', [AddUserController, 'store']).as('store')
      router.get('/edit/:id', [EditUserController, 'render']).as('edit')
      router.post('/edit/:id', [EditUserController, 'update']).as('update')
      router.get('/switch/:id', [SwitchUserController, 'switch']).as('switch')
      router.get('/switch_theme', [SwitchUserDarkModeController, 'handle']).as('switch.darkMode')
      router.get('/confirm/delete/:ids?', [DeleteUserController, 'render']).as('confirm.delete')
      router.post('/delete', [DeleteUserController, 'handle']).as('delete')
    })
    .prefix('users')
    .as('user')
}
