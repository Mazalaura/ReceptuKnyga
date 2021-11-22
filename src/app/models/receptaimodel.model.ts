import { FormGroup } from "@angular/forms";

export class ReceptaiModel{
    constructor(        
        public email: string,
        public uid: string,
        public receptaiForm: FormGroup,
        public id?: string
    ){

    }
}