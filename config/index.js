/**
 * Created by Okura on 04/03/2017.
 */
const {
    MONGODB_URI,
    NODE_ENV,
    PORT,
} = process.env;

// export default {
//   env: NODE_ENV || 'development',
//   database: {
//     uri: MONGODB_URI || 'mongodb://localhost:27017/enso'
//   },
//   server: {
//     port: PORT || 5000
//   }
// };
export default {
    env: NODE_ENV || 'development',
    database: {
        uri: MONGODB_URI || 'mongodb://localhost/items_db',
    },
    server: {
        port: PORT || 5000,
    },
};
