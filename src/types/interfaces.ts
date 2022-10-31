import {ComponentType, StyleType, Width} from "@/types/types";
import { IFact } from "@/components/AdaptiveCard/Fact.vue";
import { IColumns } from "@/components/AdaptiveCard/ColumnSet.vue";

export interface ACBaseComponent {
    type: ComponentType,
}

export interface ACComponent extends ACBaseComponent {
    text?: string,
    facts?: IFact[],
    columns?: IColumns,
    styleType?: StyleType,
    bleed?: boolean,
    style?: StyleType,
    width?: Width
}

export interface ACTemplate {
    type: 'AdaptiveCard',
    version: string,
    body: ACComponent[]
}

export interface IColumn extends ACBaseComponent {
    items: ACComponent[],
    width: string
}