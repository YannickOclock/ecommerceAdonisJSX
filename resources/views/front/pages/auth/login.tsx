import { route } from '#start/view'
import { Base } from '#viewsfront/layouts/base'
import { HttpContext } from '@adonisjs/core/http'
import { FormField } from '#viewsfront/components/form/form_field'
import { csrfField } from '#resources/helpers/csrf_field'

export async function Login() {
  const { auth } = HttpContext.getOrFail()
  await auth.check()

  console.log(auth.user)

  return (
    <Base>
      <>
        <section class="wrapper form_login">
          <ol>
            <li>
              <a href={route('front.home')}>Accueil</a>
            </li>
            <li>Connectez-vous à votre compte</li>
          </ol>
          <h1>Connectez-vous à votre compte</h1>
          <section class="flex flex-center">
            <div class="center_column">
              <div class="block_white">
                {auth.user && (
                  <div class="mb-3">
                    Vous êtes connecté(e) comme {auth.user.$attributes.email},{' '}
                    <a href={route('front.logout')}>Me déconnecter</a>
                  </div>
                )}
                <form method="post">
                  <FormField name="email" label="Email" required autofocus />
                  <FormField name="password" label="Mot de passe" inputType="password" required />
                  {csrfField()}
                  <div class="flex forgot-password">
                    <a href="{{ path('forgotten_password') }}" class="btn btn-secondary mt-3">
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <div class="flex submit_button">
                    <button class="btn btn-lg btn-primary mt-3" type="submit">
                      Me connecter
                    </button>
                  </div>
                  <hr />
                  <div class="flex no-account">
                    <a href={route('front.register')} class="btn btn-secondary mt-3">
                      Pas de compte ? Créez-en un !
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      </>
    </Base>
  )
}
