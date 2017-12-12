export class Employee {
    public id ?: number;
    public name ?: string;
    constructor(id ?: number,
        name ?: string){
this.id = id ? id : null;
this.name = name ? name : null;

}
}