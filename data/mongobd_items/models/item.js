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
            createdAt: String // TODO: Definir correctamente esta fecha
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
},{timestamps: { createdAt: 'createdAt' }});

ItemsSchema.virtual('nextRequiredUpdate').get(function () {
    if (this.updates.length) {
        return this.updates[0].createdAt;
    } else {
        return null;
    }
});

export default Mongoose.model('Item', ItemsSchema);
