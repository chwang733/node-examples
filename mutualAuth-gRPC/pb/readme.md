npm install grpc-tools -D
npm install grpc_tools_node_protoc_ts -D

#Generated Typescript
grpc_tools_node_protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=./src/pb/_generated  ./src/pb/*.proto

#Generated JS
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/pb/_generated/ --grpc_out=./src/pb/_generated --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./src/pb/*.proto

