import express from 'express';
import Schema from './data/schema';
import Resolvers from './data/resolvers';
// import Mocks from './data/mocks';

import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import  cors  from 'cors';
import bodyParser from 'body-parser';

import Item from './data/models/item'

const GRAPHQL_PORT = 8080;

const graphQLServer = express();

var whitelist = [
    'http://localhost:3000',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
graphQLServer.use(cors(corsOptions));

const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers(),
    allowUndefinedInResolve: true,
    printErrors: true,
    resolverValidationOptions: {
        requireResolversForNonScalar: false
    },
});

// addMockFunctionsToSchema({
//   schema: executableSchema,
//   mocks: Mocks,
//   preserveResolvers: true,
// });

// `context` must be an object and can't be undefined when using connectors
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: executableSchema,
    context: {},
}));

graphQLServer.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
