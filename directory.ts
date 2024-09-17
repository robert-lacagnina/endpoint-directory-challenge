export class Directory {
    name: string
    children: Map<string, Directory>

    constructor(name: string) {
        this.name = name;
        this.children = new Map();
    }

    addChild(directoryName) {
        this.children.set(directoryName, new Directory(directoryName));
    }

    deleteChild(directoryName) {
        const deleted = this.children.delete(directoryName);

        if (!deleted) {
            throw new Error(`${directoryName} does not exist`);
        }
    }

    listContents(level: number = 0) {
        const indenation = ' '.repeat(level);
        this.children.forEach((child) => {
            console.log(`${indenation}${child.name}`);
            child.listContents(level++);
        });
    }
}