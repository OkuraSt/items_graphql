const typeDefinitions = `
type Update {
  Descripcion: String
  Tipo: String
}

type Item {
  Titulo: String
  Descripcion: String
  Updates: [Update]
}

type Query {
  items: [Item]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
