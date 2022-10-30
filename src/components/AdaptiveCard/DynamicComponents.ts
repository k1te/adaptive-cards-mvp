import { defineAsyncComponent } from 'vue'

export const ACComponents = {
    ColumnSet: defineAsyncComponent(() => import('./ColumnSet.vue')),
    TextBlock: defineAsyncComponent(() => import('./TextBlock.vue')),
    FactSet: defineAsyncComponent(() => import('./FactSet.vue')),
    Image: defineAsyncComponent(() => import('./Image.vue'))
}