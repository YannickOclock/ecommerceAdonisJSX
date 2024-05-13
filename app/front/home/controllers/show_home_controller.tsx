import { Home } from '#viewsfront/pages/home/home'
import { HttpContext } from '@adonisjs/core/http'
import { HomeProductRepository } from '../repositories/product_repository.ts'
import { inject } from '@adonisjs/core'

@inject()
export default class ShowHomeController {
  constructor(private homeProductRepository: HomeProductRepository) {}

  async render({}: HttpContext) {
    const homeProducts = await this.homeProductRepository.home()
    return <Home products={homeProducts} />
  }
}
