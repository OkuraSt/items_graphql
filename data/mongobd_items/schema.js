
export const schema = [`
type Update {
  Descripcion: String
  Tipo: String
}

type Item {
  Titulo: String
  Descripcion: String
  Updates: [Update]
}
`];
