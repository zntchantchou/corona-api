import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress} from 'apollo-server-express';
import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import {Countries, TimeLine} from "./resources/gql-types";
import * as dotenv from "dotenv";
import { default as playground } from 'graphql-playground-middleware-express';
import { ICountryInput } from './resources/Countries/types';
import {getCountries, getCountry} from "./resources/Countries/resolvers";
import { getTimelines } from './resources/TimeLine/resolvers';


dotenv.config();

const API_URL = process.env.CORONA_API_URL

const app = express();
// The GraphQL schema in string form
const typeDefs = gql`
  type Query {
    country(isoCode: String): Country
    countries: [Country]
    timelines: [TimeLine]
  }
  ${Countries}
  ${TimeLine}
`

// The resolvers
const resolvers: any = {
  Query: { 
    country: (__:any, args: ICountryInput,) => getCountry(args),
    countries: () => getCountries(),
    timelines: () => getTimelines() 
  }
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// endpoint used by browser
app.get('/playground', playground({ endpoint: '/graphql' }));

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));


app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphql to run queries!');
});
