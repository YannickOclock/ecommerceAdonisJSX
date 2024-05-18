interface Product {
  id: string
  name: string
  price: number
  quantity: number
}

export interface Cart {
  products: Product[]
  getTotalQuantity(): number
  getTotal(): Promise<number>
  getTotalQuantityOfProduct(productId: string): number
  getProduct(productId: string): Product | undefined
  addProduct(productId: string, name: string, price: number, quantity: number): void
  init(): void
}

export const cart: Cart = {
  products: [],

  getTotalQuantity: function () {
    let totalQuantity = 0 as number
    for (const product of this.products) {
      const quantity = product.quantity
      totalQuantity += quantity
    }
    return totalQuantity
  },

  getTotal: async function () {
    let subTotal = 0
    for (const product of this.products) {
      const price = product.price
      const quantity = product.quantity
      const productTotal = price * quantity
      subTotal += productTotal
    }
    return subTotal
  },

  getProduct: function (productId: string) {
    return this.products.find((product) => product.id === productId)
  },

  getTotalQuantityOfProduct: function (productId: string) {
    const foundProduct = this.getProduct(productId)
    return foundProduct ? foundProduct.quantity : 0
  },

  addProduct: function (productId: string, name: string, price: number, quantity: number) {
    const foundProduct = this.getProduct(productId)
    if (!foundProduct) {
      this.products.push({ id: productId, quantity: quantity, price: price, name: name })
    } else {
      foundProduct.quantity += quantity
    }
  },

  init: function () {
    console.log('Cart initialized')
  },
}

cart.init()
