import { Admin } from '#viewsbackv2/layouts/admin'
import { Label } from '#viewsbackv2/components/form/label'
import { Input } from '#viewsbackv2/components/form/input'
import { FormGroup } from '#viewsbackv2/components/form/form_group'
import { Textarea } from '#viewsbackv2/components/form/textarea'
import { Select } from '#viewsbackv2/components/form/select'

export function TestForm() {
  return (
    <Admin>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Catalogue</a>
              </li>
              <li>
                <a>Produits</a>
              </li>
              <li>Ajout d'un produit</li>
            </ul>
          </div>
          <h1 class="text-2xl">Ajout d'un produit</h1>
        </div>
        <div class="p-4 pt-8">
          <form>
            <FormGroup>
              <Label id={'name'} label="Nom du produit" />
              <Input name="name" id={'name'} placeholder={'Taper un nom ...'} />
            </FormGroup>
            <FormGroup>
              <Label id={'description'} label="Description" />
              <Textarea name="description" id={'description'} defaultValue={'Un test'} />
            </FormGroup>
            <FormGroup>
              <Label id={'category'} label="Catégorie" />
              <Select
                id={'category'}
                name={'category'}
                placeholder={'Ajouter une catégorie'}
                options={[
                  { value: '1', label: 'Informatique' },
                  { value: '2', label: 'Jeux-vidéos' },
                ]}
              />
            </FormGroup>
          </form>
        </div>
      </>
    </Admin>
  )
}
