## Setup
To get started, install depedencies: `npm i`

## Run the application
Compile the application with `npm run build`
To run the application you can call the compiled index file directly with node: `node out/index.js "args"`.

## Passing input
All file system command inputs should be passed as command line arguments contained in string quotes. For example

```bash
node out/index.js "CREATE fruits" "CREATE vegetables" "CREATE grains" "CREATE fruits/apples" "CREATE fruits/apples/fuji" "LIST" "CREATE grains/squash" "MOVE grains/squash vegetables" "CREATE foods" "MOVE grains foods" "MOVE fruits foods" "MOVE vegetables foods" "LIST" "DELETE fruits/apples" "DELETE foods/fruits/apples" "LIST"
```
