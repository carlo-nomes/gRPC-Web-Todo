const PORT = 9090;
const PROTO_PATH = `${__dirname}/todo.proto`;

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

let todos = [
  { id: "0", text: "Set up Envoy Proxy", done: true },
  { id: "1", text: "Write .proto file", done: true }
];

function getTodos(call, callback) {
  callback(null, { todos });
}

function addTodo(call, callback) {
  const todo = {
    id: `${todos.length}`,
    text: call.request.text,
    done: false
  };
  todos.push(todo);
  callback(null, { todo });
}

function finishTodo(call, callback) {
  const index = todos.findIndex(({ id }) => id === call.request.id);
  if (index === -1) {
    callback({ message: `Todo item with id ${call.request.id} not found` });
    return;
  }
  const todo = { ...todos[index], done: true };
  todos[index] = todo;
  callback(null, { todo });
}

function getGrpcServer() {
  const server = new grpc.Server();

  server.addService(protoDescriptor.TodoService.service, {
    getTodos,
    addTodo,
    finishTodo
  });

  return server;
}

if (require.main === module) {
  var server = getGrpcServer();
  server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server started on port ${PORT}`);
}
