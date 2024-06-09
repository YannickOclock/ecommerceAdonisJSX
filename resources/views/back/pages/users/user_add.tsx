import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { Vite } from '#resources/helpers/asset'
import { csrfField } from '#resources/helpers/csrf_field'
import { Admin } from '#viewsback/layouts/admin'
import { randomUUID } from 'node:crypto'
import { FormField } from '../../components/form/form_field.tsx'
import { UserRoleText } from "#admin/user/enums/user_role";

interface ProductAddProps {
  categories: AdminCategoryListQueryResult
}

export function ProductAdd(props: ProductAddProps) {
  const { categories } = props
  const random = randomUUID()
  return (
    <Admin
      title={'Administration - Ajouter un utilisateur'}
      breadcrumb="Catalogue &gt; Utilisateurs &gt; Nouvel utilisateur"
      header="Ajouter un utilisateur"
      bodyTitle="Ajouter un utilisateur"
    >
      <form method="post">
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <FormField name="firstname" label="Prénom" required />
        <FormField name="lastname" label="Nom" required />
        <FormField name="email" label="E-mail" required />
        <FormField name="password" label="Mot de passe" required inputType="password" />
        <FormField
          name="role"
          label="Rôle attribué"
          inputTagName="select"
          inputValues={UserRoleText}
        />

        <div class="form-group">
          <label for="images">Images du produit</label>
          <input type="file" id="images" name="images[]" multiple class="form-control my-2" />
        </div>
        {csrfField()}
        <button type="submit" class="btn btn-primary my-2">
          Ajouter
        </button>
      </form>
    </Admin>
  )
}
