import { KeyValuePairWithDefault } from './Common'

export interface ButtonStyle {
    [key: string]: {
        boilerplate: string,
        color: KeyValuePairWithDefault
    }
}