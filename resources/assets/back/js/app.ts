import '#resources/assets/back/js/vendors/unpoly'
import '#resources/assets/back/js/components/custom_alert'
import '#resources/assets/back/js/components/custom_table'

import preactCustomElement from './vendors/preact_adapter'
import CustomCounter from './components/custom_counter'

preactCustomElement('custom-counter', CustomCounter)
