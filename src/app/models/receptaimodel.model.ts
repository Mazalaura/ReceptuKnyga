export class ReceptaiModel{
    constructor(
        public name:string,
        public description:string,        
        public useremail:string,
        public userid:string,     
        public ingredients?:Ingredient[],
        public id?:string
    ){

    }
}
export class Ingredient {
    constructor(
        public name:string
    ){}
}