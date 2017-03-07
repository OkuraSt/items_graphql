
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
  title: String!
  description: String
  configString: String
  deadline: String
  nextRequiredUpdate: String
  updates: [Update]
  activities: [Activities]
  tags: [Tag]
}
`];
