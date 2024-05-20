import { render } from 'preact'
import { App } from './components/button'
import { Slider } from './components/home_slider'

import './vendors/unpoly'

// Utilisation des composants
document.addEventListener('DOMContentLoaded', () => {
  Slider.constructor()
})

// Pour le composant inputNumber, il est inclu dans le fichier qui gère la modale
// partials/modals/add_product_step_1.tsx

//render(<App name={'Yannick'} />, document.getElementById('myapp')!)
