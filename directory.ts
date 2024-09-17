export class Directory {
    name: string
    children: Map<string, Directory>

    constructor(name: string) {
        this.name = name;
        this.children = new Map();
    }

    createChild(directoryName: string): Directory {
        const newDirectory = new Directory(directoryName);
        this.children.set(directoryName, newDirectory);

        return newDirectory;
    }

    insertChild(directory: Directory) {
        this.children.set(directory.name, directory);
    }

    deleteChild(directoryName: string) {
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