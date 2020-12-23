import {DefaultCrudRepository} from '@loopback/repository';
import {Places, PlacesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlacesRepository extends DefaultCrudRepository<
  Places,
  typeof Places.prototype.id,
  PlacesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Places, dataSource);
  }
}
