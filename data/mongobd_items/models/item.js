/**
 * Created by Okura on 19/02/2017.
 */
import Mongoose from 'mongoose';

const ItemsSchema = Mongoose.Schema({
    title: String,
    description: String,
    configString: String,
    deadline: Date,
    updates: [
        {
            description: String,
            status: String,
            date: String // TODO: Definir correctamente esta fecha
        }
    ],
    activities: [
        {
            description: String,
            createdAt: Date,
            status: String
        }
    ],
    tags: [
        {
            type: String,
            name: String
        }
    ]
},{timestamps: { createdAt: 'created_at' }});

ItemsSchema.virtual('nextRequiredUpdate').get(function () {
    //TODO: Implementar la generacion de la fecha de siguiente update

    return this.updates.length ? this.updates[0].date : "";
});

export default Mongoose.model('Item', ItemsSchema);
