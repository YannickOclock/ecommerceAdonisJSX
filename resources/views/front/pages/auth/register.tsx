import { route } from '#start/view'
import { Base } from '#viewsfront/layouts/base'
import { FormField } from '#viewsfront/components/form/form_field'
import { csrfField } from '#resources/helpers/csrf_field'

export async function Register() {
  return (
    <Base>
      <>
        <section class="wrapper form_login">
          <ol>
            <li>
              <a href={route('front.home')}>Accueil</a>
            </li>
            <li>Créer votre compte</li>
          </ol>
          <h1>Créer votre compte</h1>
          <section class="flex flex-center">
            <div class="center_column">
              <div class="block_white">
                <div class="mb-3">
                  Vous avez déjà un compte ? <a href={route('front.login')}>Connectez-vous</a>
                </div>
                <form method="post">
                  <FormField name="civility" label="Titre (M./Mme)" required autofocus />
                  <FormField name="firstname" label="Prénom" required />
                  <div class="flex flex-help">
                    <label>&nbsp;</label>
                    <div>
                      <small class="form-text text-muted">
                        <div id="registration_form_firstname_help" class="help-text">
                          Seules les lettres et le point (.), suivi d'un espace, sont autorisés.
                        </div>
                      </small>
                    </div>
                  </div>
                  <FormField name="lastname" label="Nom" required />
                  <div class="flex flex-help">
                    <label>&nbsp;</label>
                    <div>
                      <small class="form-text text-muted">
                        <div id="registration_form_firstname_help" class="help-text">
                          Seules les lettres et le point (.), suivi d'un espace, sont autorisés.
                        </div>
                      </small>
                    </div>
                  </div>
                  <FormField name="email" label="E-mail" required />
                  <FormField
                    name="plainPassword"
                    label="Mot de passe"
                    inputType="password"
                    required
                  />
                  <FormField name="birthdayAt" label="Date de naissance" inputType="date" />
                  <div class="flex flex-help">
                    <label>&nbsp;</label>
                    <div>
                      <small class="form-text text-muted">
                        <div id="registration_form_firstname_help" class="help-text">
                          Exemple : 01/01/1980
                        </div>
                      </small>
                    </div>
                  </div>
                  <FormField name="addressLine1" label="Principale ligne d'adresse" />
                  <FormField name="addressLine2" label="Adresse complémentaire (facultatif)" />
                  <FormField name="postCode" label="Code postal" />
                  <FormField name="city" label="Ville" />
                  <FormField name="country" label="Pays" />
                  {/* todo: ajouter les conditions RGPD */}
                  {csrfField()}
                  <div class="flex submit_button">
                    <button class="btn btn-lg btn-primary mt-3" type="submit">
                      Enregistrer
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
