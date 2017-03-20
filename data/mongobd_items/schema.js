
export const schema = [`
type Update {
  description: String
  status: String
  date: String
}
type Activities {
  description: String
  createdAt: String
  status: String
}
type Tag {
  type: String
  name: String
}
type Item {
  _id: ID!
  title: String!
  description: String
  configString: String
  deadline: String
  nextRequiredUpdate: String
  updates: [Update]
  activities: [Activities]
  tags: [Tag]
}
input ItemInput{
  title: String!
  description: String
}

type Mutation {
  createItem (input: ItemInput! ): Item
  updateItem (
    id: ID!
    title: String
    description: String 
  ): Item
}

type Query {
  items: [Item]
}

schema {
  query: Query
  mutation: Mutation
}
`];
