import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress} from 'apollo-server-express';
import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import {Countries, TimeLine} from "./Resources/gql-types";
import * as dotenv from "dotenv";
import { default as playground } from 'graphql-playground-middleware-express';

const app = express();
// The GraphQL schema in string form
const rootTypes = gql`
  type Query {
    countries: [Country]
  }
  ${Countries}
  ${TimeLine}
`

const coordinates = [{
  longitude: 5,
  latitude: 4
}]

// The resolvers
const resolvers = {
  Query: { 
    countries: () => []
   }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs: rootTypes,
  resolvers,
});

// endpoint used by browser
app.get('/playground', playground({ endpoint: '/graphql' }));

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));


app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphql to run queries!');
});
