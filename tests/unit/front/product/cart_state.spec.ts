import { cart } from '#app/front/cart_state'
import { test } from '@japa/runner'

test.group('Cart State', () => {
  test('it should create an empty cart', ({ assert }) => {
    cart.init()
    assert.equal(cart.products.length, 0)
  })
  test('it should add a product to the cart', ({ assert }) => {
    cart.addProduct('1', 'Product 1', 10, 1)
    assert.equal(cart.products.length, 1)
  })
  test('it should add quantity to an existing product', ({ assert }) => {
    cart.addProduct('1', 'Product 1', 10, 1)
    assert.equal(cart.products.length, 1)
    assert.equal(cart.products.find((product) => product.id === '1')?.quantity, 2)
  })
  test('it should get the total quantity of products', ({ assert }) => {
    cart.addProduct('1', 'Product 1', 10, 1)
    cart.addProduct('2', 'Product 2', 20, 2)
    assert.equal(cart.getTotalQuantity(), 5)
  })
  test('it should get the total of the cart', async ({ assert }) => {
    cart.addProduct('1', 'Product 1', 10, 1)
    cart.addProduct('2', 'Product 2', 20, 2)
    assert.equal(await cart.getTotal(), 120)
  })
  test('it should get the total quantity of a product', ({ assert }) => {
    assert.equal(cart.getTotalQuantityOfProduct('1'), 4)
  })
  test('it should get a total of 0 for a non-existing product', ({ assert }) => {
    assert.equal(cart.getTotalQuantityOfProduct('3'), 0)
  })
})
