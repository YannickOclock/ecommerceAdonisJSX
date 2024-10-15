import router from '@adonisjs/core/services/router'

// CONTROLLERS ADDRESSES
const ShowListAddressController = () =>
  import('#admin/address/controllers/show_list_address_controller')
const AddAddressController = () => import('#admin/address/controllers/add_address_controller')
const EditAddressController = () => import('#admin/address/controllers/edit_address_controller')
const DeleteAddressController = () => import('#admin/address/controllers/delete_address_controller')

// PARTIE ADRESSES
export default function addressesRoutes() {
  router
    .group(() => {
      router.get('/', [ShowListAddressController, 'render']).as('list')
      router.get('/add', [AddAddressController, 'render']).as('add')
      router.post('/add', [AddAddressController, 'store']).as('store')
      router.get('/edit/:id', [EditAddressController, 'render']).as('edit')
      router.post('/edit/:id', [EditAddressController, 'update']).as('update')
      router.get('/confirm/delete/:ids?', [DeleteAddressController, 'render']).as('confirm.delete')
      router.post('/delete', [DeleteAddressController, 'handle']).as('delete')
    })
    .prefix('addresses')
    .as('address')
}
