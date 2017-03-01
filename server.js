import express from 'express';
import Schema from './data/schema';
import Resolvers from './data/resolvers';
// import Mocks from './data/mocks';

import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';

import Item from './data/models/item'

const GRAPHQL_PORT = 8080;
const mongo = Mongoose.connect('mongodb://localhost/items_db');

//Verificacion de la conexion con mongo
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Conectado');
    // we're connected!
});

const graphQLServer = express();

const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers({ Item }),
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
