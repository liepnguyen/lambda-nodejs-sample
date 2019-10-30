import { Model } from 'objection';
import db from 'db/knex';

Model.knex(db);

export class Sample extends Model {
  static get tableName() {
    return 'samples';
  }
}
