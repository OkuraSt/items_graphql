/**
 * Created by Okura on 04/03/2017.
 */

import { database } from '../../utils';
import Item from './models/item';

database.open();

export { Item };
