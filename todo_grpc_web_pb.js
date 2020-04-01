/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.TodoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetTodosRequest,
 *   !proto.GetTodosResponse>}
 */
const methodDescriptor_TodoService_GetTodos = new grpc.web.MethodDescriptor(
  '/TodoService/GetTodos',
  grpc.web.MethodType.UNARY,
  proto.GetTodosRequest,
  proto.GetTodosResponse,
  /**
   * @param {!proto.GetTodosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetTodosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetTodosRequest,
 *   !proto.GetTodosResponse>}
 */
const methodInfo_TodoService_GetTodos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetTodosResponse,
  /**
   * @param {!proto.GetTodosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetTodosResponse.deserializeBinary
);


/**
 * @param {!proto.GetTodosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetTodosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetTodosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.getTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/GetTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetTodos,
      callback);
};


/**
 * @param {!proto.GetTodosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetTodosResponse>}
 *     A native promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.getTodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/GetTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetTodos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddTodoRequest,
 *   !proto.AddTodoResponse>}
 */
const methodDescriptor_TodoService_AddTodo = new grpc.web.MethodDescriptor(
  '/TodoService/AddTodo',
  grpc.web.MethodType.UNARY,
  proto.AddTodoRequest,
  proto.AddTodoResponse,
  /**
   * @param {!proto.AddTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddTodoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddTodoRequest,
 *   !proto.AddTodoResponse>}
 */
const methodInfo_TodoService_AddTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AddTodoResponse,
  /**
   * @param {!proto.AddTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddTodoResponse.deserializeBinary
);


/**
 * @param {!proto.AddTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AddTodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddTodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.addTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/AddTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_AddTodo,
      callback);
};


/**
 * @param {!proto.AddTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddTodoResponse>}
 *     A native promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.addTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/AddTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_AddTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.FinishTodoRequest,
 *   !proto.FinishTodoResponse>}
 */
const methodDescriptor_TodoService_FinishTodo = new grpc.web.MethodDescriptor(
  '/TodoService/FinishTodo',
  grpc.web.MethodType.UNARY,
  proto.FinishTodoRequest,
  proto.FinishTodoResponse,
  /**
   * @param {!proto.FinishTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FinishTodoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.FinishTodoRequest,
 *   !proto.FinishTodoResponse>}
 */
const methodInfo_TodoService_FinishTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.FinishTodoResponse,
  /**
   * @param {!proto.FinishTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FinishTodoResponse.deserializeBinary
);


/**
 * @param {!proto.FinishTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.FinishTodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.FinishTodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TodoServiceClient.prototype.finishTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TodoService/FinishTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_FinishTodo,
      callback);
};


/**
 * @param {!proto.FinishTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.FinishTodoResponse>}
 *     A native promise that resolves to the response
 */
proto.TodoServicePromiseClient.prototype.finishTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TodoService/FinishTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_FinishTodo);
};


module.exports = proto;

