"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const graphql_tools_1 = require("graphql-tools");
const gql_types_1 = require("./resources/gql-types");
const dotenv = __importStar(require("dotenv"));
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const resolvers_1 = require("./resources/Countries/resolvers");
const resolvers_2 = require("./resources/TimeLine/resolvers");
dotenv.config();
const API_URL = process.env.CORONA_API_URL;
const app = express_1.default();
const typeDefs = graphql_tag_1.default `
  type Query {
    country(isoCode: String): Country
    countries: [Country]
    timelines: [TimeLine]
  }
  ${gql_types_1.Countries}
  ${gql_types_1.TimeLine}
`;
const resolvers = {
    Query: {
        country: (__, args) => resolvers_1.getCountry(args),
        countries: () => resolvers_1.getCountries(),
        timelines: () => resolvers_2.getTimelines()
    }
};
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers,
});
app.get('/playground', graphql_playground_middleware_express_1.default({ endpoint: '/graphql' }));
app.use('/graphql', body_parser_1.default.json(), apollo_server_express_1.graphqlExpress({ schema }));
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphql to run queries!');
});
//# sourceMappingURL=index.js.map