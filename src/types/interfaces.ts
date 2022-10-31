import {ComponentType, StyleType, Width} from "@/types/types";
import { IFact } from "@/components/FactSet/Fact.vue";
import { IColumns } from "@/components/ColumnSet/ColumnSet.vue";

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