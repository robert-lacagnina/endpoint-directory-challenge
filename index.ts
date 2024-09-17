import { FileSystem } from "./file-system";
const fs = new FileSystem();

const commands = process.argv.slice(2);

commands.forEach((command) => {
    const [operation, ...args] = command.split(' ');
    try {
        executeOperation(operation, args);
    } catch (e) {
        console.error(e.message)
    }
});

function executeOperation(operation: string, args: string[]) {
    switch (operation) {
        case 'CREATE':
            fs.create(args[0]);
            break;
        case 'MOVE':
            fs.move(args[0], args[1]);
            break;
        case 'DELETE':
            fs.delete(args[0]);
            break;
        case 'LIST':
            fs.list();
            break;
        default:
            throw new Error(`${operation} is not a valid file system operation`);
    }
}