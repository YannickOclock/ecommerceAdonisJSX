import '#resources/assets/back/js/vendors/unpoly'
import '#resources/assets/back/js/components/custom_alert'
import '#resources/assets/back/js/components/custom_table'

import preactCustomElement from './vendors/preact_adapter'
import CustomCounter from './components/custom_counter'
import { Sortable } from './utils/sortable'

preactCustomElement('custom-counter', CustomCounter)

const sortable = new Sortable(document.querySelector('#sort1'))
