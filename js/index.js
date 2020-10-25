"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const graphql_tools_1 = require("graphql-tools");
const gql_types_1 = require("./Resources/gql-types");
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const app = express_1.default();
const rootTypes = graphql_tag_1.default `
  type Query {
    countries: [Country]
  }
  ${gql_types_1.Countries}
  ${gql_types_1.TimeLine}
`;
const coordinates = [{
        longitude: 5,
        latitude: 4
    }];
const resolvers = {
    Query: {
        countries: () => []
    }
};
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: rootTypes,
    resolvers,
});
app.get('/playground', graphql_playground_middleware_express_1.default({ endpoint: '/graphql' }));
app.use('/graphql', body_parser_1.default.json(), apollo_server_express_1.graphqlExpress({ schema }));
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphql to run queries!');
});
//# sourceMappingURL=index.js.map