import { OldApp } from '#views/example/components/layouts/oldapp'
import { route } from '#start/view'
import { csrfField } from '#resources/helpers/csrf_field'
import { getFlashMessages } from '#resources/helpers/flash_messages'

export function About() {
  const flashMessages = getFlashMessages()
  return (
    <OldApp>
      <h1>A propos de nous !</h1>
      <p>Voici un petit formulaire pour ajouter un post :</p>
      <form method={'post'} action={route('example.posts.add.post')}>
        <label>Titre</label>
        <input
          class={flashMessages.has('inputErrorsBag.title') ? 'is-invalid' : ''}
          type={'text'}
          name={'title'}
          value={flashMessages.get('title') || ''}
        />
        {flashMessages.has('inputErrorsBag.title') &&
          flashMessages.get('inputErrorsBag.title').map((message: string) => {
            return <div class={'flash-message error'}>{message}</div>
          })}
        <label>Contenu</label>
        <input
          class={flashMessages.has('inputErrorsBag.content') ? 'is-invalid' : ''}
          type={'text'}
          name={'content'}
          value={flashMessages.get('content') || ''}
        />
        {flashMessages.has('inputErrorsBag.content') &&
          flashMessages.get('inputErrorsBag.content').map((message: string) => {
            return <div class={'flash-message error'}>{message}</div>
          })}
        <label>Auteur</label>
        <input
          class={flashMessages.has('inputErrorsBag.author') ? 'is-invalid' : ''}
          type={'text'}
          name={'author'}
          value={flashMessages.get('author') || ''}
        />
        {flashMessages.has('inputErrorsBag.author') &&
          flashMessages.get('inputErrorsBag.author').map((message: string) => {
            return <div class={'flash-message error'}>{message}</div>
          })}
        <label>Statut</label>
        <input
          class={flashMessages.has('inputErrorsBag.status') ? 'is-invalid' : ''}
          type={'text'}
          name={'status'}
          value={flashMessages.get('status') || ''}
        />
        {flashMessages.has('inputErrorsBag.status') &&
          flashMessages.get('inputErrorsBag.status').map((message: string) => {
            return <div class={'flash-message error'}>{message}</div>
          })}
        {csrfField()}
        <button type={'submit'}>Envoyer</button>
      </form>
    </OldApp>
  )
}
