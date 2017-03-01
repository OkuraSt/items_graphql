/**
 * Created by Okura on 19/02/2017.
 */
import Mongoose from 'mongoose';

const ItemsSchema = Mongoose.Schema({
    Titulo: String,
    Descripcion: String,
    Updates: [{Description: String, Tipo: String}]
});

export default Mongoose.model('Item', ItemsSchema);
