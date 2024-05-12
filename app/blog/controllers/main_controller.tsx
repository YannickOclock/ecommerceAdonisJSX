import { HttpContext } from '@adonisjs/core/http'
import { Home } from '#views/example/pages/home'
import { About } from '#views/example/pages/about'
import { createPostValidator } from '#blog/validators/post'
import { PostRepository } from '#blog/repositories/post_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class MainController {
  constructor(private repository: PostRepository) {}

  async index({}: HttpContext) {
    const posts = await this.repository.all()
    return <Home posts={posts} />
  }

  async about({}: HttpContext) {
    return <About />
  }

  async aboutPost({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)
    await this.repository.create(payload)
    session.flash('notification', {
      type: 'success',
      message: 'Votre post a bien été ajouté à la base de données !',
    })
    response.redirect().toRoute('home')
  }
}
