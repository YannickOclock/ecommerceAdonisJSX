import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { inject } from '@adonisjs/core'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import imageThumbnail from 'image-thumbnail'
import fs from 'node:fs'

@inject()
export class CategoryImagesService {
  constructor(private categoryRepository: CategoryRepository) {}
  async create(image: MultipartFile | undefined): Promise<string | undefined> {
    if (image) {
      const publicPath = app.makePath('public/images/categories')
      const imageName = `${cuid()}`
      const imagePath = `${imageName}.${image.extname}`
      const imageMinPath = `${imageName}-min.${image.extname}`
      await image.move(publicPath, {
        name: imagePath,
      })
      const thumbnail = await imageThumbnail(`${publicPath}/${imagePath}`, {
        width: 350,
        height: 350,
        responseType: 'base64',
      })
      fs.writeFile(`${publicPath}/${imageMinPath}`, Buffer.from(thumbnail, 'base64'), (err) => {
        console.log(err)
      })
      return imageMinPath
    }
  }
  async deleteFromCategory(categoryId: string): Promise<boolean> {
    const category = await this.categoryRepository.find(categoryId)
    const publicPath = app.makePath('public/images/categories')

    const imageMin = category.imagePath

    // Supprimer l'ancienne image uniquement s'il y a en a une sur la catégorie
    if (imageMin) {
      const image = imageMin?.replace('-min', '')
      if (fs.existsSync(`${publicPath}/${imageMin}`) && fs.existsSync(`${publicPath}/${image}`)) {
        fs.unlinkSync(`${publicPath}/${imageMin}`)
        fs.unlinkSync(`${publicPath}/${image}`)
        await this.categoryRepository.deleteImage(categoryId)
        return true
      }
    }

    return false
  }
}
