import { Directory } from "./directory";

export class FileSystem {
    root: Directory
    
    constructor() {
        this.root = new Directory('');
    }

    /**
     * 
     * @param path creates a new directory at the specified path.
     */
    create(path: string) {
        console.log(`CREATE ${path}`);

        // TODO: similar to the find, iterate over the child directories
        // if not found create at that level and continue recursively creating from there
    }

    /**
     * Moves a directory and it's children to a new location in the file system.
     * @param sourcePath The full path to the directory being moved.
     * @param destinationPath The full path to the directory's new location in the file system.
     */
    move(sourcePath: string, destinationPath: string) {
        console.log(`MOVE ${sourcePath} ${destinationPath}`);

        const destinationDirectory = this.findDirectory(destinationPath);
        const directoryToMove = this.findDirectory(sourcePath);

        // TODO: get the parent directory so we can add the directory to move to it as a child
    }

    /**
     * Deletes a directory from the file system and any children it contains.
     * @param path Full path to the directory to delete
     */
    delete(path: string) {
        console.log(`DELETE ${path}`);

        const pathParts = path.split('/');
        const directoryToDelete = path.split('/').pop();

        try {
            const parent = this.findDirectory(pathParts.join('/'));
            parent.deleteChild(directoryToDelete);
        } catch(e) {
            const { message: errorReason } = e;
            throw new Error(`Cannot delete ${path} - ${errorReason}}`)
        }
    }

    /**
     * Lists all directories in the file system starting from the root.
     */
    list() {
        console.log('LIST');
        this.root.listContents();
    }

    private findDirectory(path: string): Directory {
        const pathDirectories = path.split('/');

        let currentDirectory = this.root;

        for (let i = 0; i < pathDirectories.length; i++) {
            if (currentDirectory.children.has(pathDirectories[i])) {
                const foundDirectory = currentDirectory.children.get(pathDirectories[i]);
                
                if (!foundDirectory) {
                    throw new Error(`${pathDirectories[i]} does not exist`);
                }

                currentDirectory = foundDirectory;
            }
        }

        return currentDirectory;
    }
}