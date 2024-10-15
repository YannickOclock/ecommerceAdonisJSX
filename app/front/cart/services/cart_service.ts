import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import type { Session } from '@adonisjs/session'

interface Product {
  id: string
  name: string
  price: number
  quantity: number
}

interface Cart {
  products: Product[]
}

@inject()
export class CartService {
  #session: Session
  // (il faut pouvoir l'initialiser s'il y a un panier existant dans la session CF getOrCreate)
  #cart: Cart

  constructor() {
    this.#cart = {
      products: [],
    }
    const ctx = HttpContext.getOrFail()
    this.#session = ctx.session
    this.#getOrCreate()
  }

  #getOrCreate() {
    const cart = this.#session?.get('cart')
    if (!cart) {
      this.#session.put('cart', this.#cart)
    } else {
      this.#cart = cart
    }
  }

  #save() {
    console.log(this.#cart)
    this.#session.put('cart', this.#cart)
  }

  getTotal() {
    let subTotal = 0
    for (const product of this.#cart.products) {
      const price = product.price
      const quantity = product.quantity
      const productTotal = price * quantity
      subTotal += productTotal
    }
    return subTotal
  }

  getTotalQuantity() {
    let totalQuantity = 0
    for (const product of this.#cart.products) {
      const quantity = product.quantity
      totalQuantity += quantity
    }
    return totalQuantity
  }

  getTotalQuantityOfProduct(productId: string) {
    const foundProduct = this.getProduct(productId)
    return foundProduct ? foundProduct.quantity : 0
  }

  getProduct(productId: string) {
    return this.#cart.products.find((product) => product.id === productId)
  }

  getProductIds() {
    const productIds = []
    for (const product of this.#cart.products) {
      productIds.push(product.id)
    }
    return productIds
  }

  addProduct(productId: string, name: string, price: number, quantity: number) {
    const foundProduct = this.getProduct(productId)
    if (!foundProduct) {
      this.#cart.products.push({ id: productId, quantity: quantity, price: price, name: name })
    } else {
      if (foundProduct.quantity + quantity >= 1) {
        foundProduct.quantity += quantity
      }
    }
    this.#save()
  }

  deleteProduct(productId: string) {
    this.#cart.products = this.#cart.products.filter((product) => product.id !== productId)
    this.#save()
  }
}
