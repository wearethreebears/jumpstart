import { Boilerplate } from './Boilerplate'

export interface FormErrors {
    [key: string] : string[]
}

export interface FormLabel extends Boilerplate {
	children: {
		labelWrapper : {
            class: string
        }
	}
}