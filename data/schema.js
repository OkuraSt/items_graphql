/**
 * Created by Okura on 04/03/2017.
 */

import {merge} from 'lodash';
import {schema as mongoSchema} from './mongobd_items/schema';
import {resolvers as mongoResolvers} from './mongobd_items/resolvers';
import {makeExecutableSchema} from 'graphql-tools';

// Definicion de root resolvers y schemas
const rootSchema = [`
type Query {
  items: [Item]
}

schema {
  query: Query
}
`];
const rootResolvers = {
    Query: {
    },
};

const schema = [...rootSchema, ...mongoSchema];
const resolvers = merge(rootResolvers, mongoResolvers);

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers,
    allowUndefinedInResolve: true,
    printErrors: true,
    resolverValidationOptions: {
        requireResolversForNonScalar: false
    },
});

export default executableSchema;
