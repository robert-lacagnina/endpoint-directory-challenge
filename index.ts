import { FileSystem } from "./file-system";
const fs = new FileSystem();

const [operation, ...args] = process.argv.slice(2);
executeOperation(operation, args);

function executeOperation(operation: string, args: string[]) {
    switch (operation) {
        case 'CREATE':
            fs.create(args[0]);
        case 'MOVE':
            fs.move(args[0], args[1]);
        case 'DELETE':
            fs.delete(args[0]);
        case 'LIST':
            fs.list();
        default:
            throw new Error('Not a valid file system operation');
    }
}