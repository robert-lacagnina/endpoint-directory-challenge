export class Directory {
    name: string
    children: Map<string, Directory>

    constructor(name: string) {
        this.name = name;
        this.children = new Map();
    }
}