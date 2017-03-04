import {Item} from './connectors';


export const resolvers = {
    Query: {
        items(_, args) {
            return Item.find().then((response) => {
                return response;
            });
        }
    },
};
