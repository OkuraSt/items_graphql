import {Item} from './connectors';


export const resolvers = {
    Query: {
        items(_, args) {
            return Item.find().then((response) => {
                return response;
            });
        }
    },
    Mutation: {
        updateItem(_, {id, title, description}){
            Item.findById(id, function (err, item) {
                if (err) return null;

                item.title = title;
                item.description = description;
                item.save(function (err, updated) {
                    return err ? null : updated ;
                });
            });
        },
        createItem(_, {input}, ){
            return Promise.resolve()
                .then(() => {
                    return Item.create({title: input.title, description: input.description});
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};
