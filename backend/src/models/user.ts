export default class User {
    id: number;
    name: string;
    message: string;

    private static nextId = 1;

    constructor(name: string, message: string) {
        this.id = User.nextId++;
        this.name = name;
        this.message = message;
    }
}