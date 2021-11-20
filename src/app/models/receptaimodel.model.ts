import { FormGroup } from "@angular/forms";

export class ReceptaiModel{
    constructor(        
        public email: string,
        public uid: string,
        public recipeForm: FormGroup,
        public id?: string
    ){

    }
}