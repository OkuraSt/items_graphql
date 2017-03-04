/**
 * Created by Okura on 04/03/2017.
 */
import mongoose from 'mongoose';
import config from '../config';

export default {
    open () {
        mongoose.Promise = global.Promise;
        mongoose.connect(config.database.uri);
        console.log('Conectado');
    },
    close () {
        mongoose.connection.close();
    }
};
