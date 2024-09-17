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

    }

    /**
     * Moves a directory and it's children to a new location in the file system.
     * @param sourcePath The full path to the directory being moved.
     * @param destinationPath The full path to the directory's new location in the file system.
     */
    move(sourcePath: string, destinationPath: string) {

    }

    /**
     * Deletes a directory from the file system and any children it contains.
     * @param path Full path to the directory to delete
     */
    delete(path: string) {
        
    }

    /**
     * Lists all directories in the file system starting from the root.
     */
    list() {

    }
}