
const resolvers = (models) => ({
    Query: {
        items(_, args) {
            return models.Item.find().then((response) => {
                return response;
            });
        }
    },
});

export default resolvers;
