import {Item} from './connectors';


const resolvers = () => ({
    Query: {
        items(_, args) {
            return Item.find().then((response) => {
                return response;
            });
        }
    },
});

export default resolvers;
