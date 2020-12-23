import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Places extends Entity {
  @property({
    type: 'any',
    required: true,
  })
  longitude: any;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'any',
    required: true,
  })
  latitude: any;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Places>) {
    super(data);
  }
}

export interface PlacesRelations {
  // describe navigational properties here
}

export type PlacesWithRelations = Places & PlacesRelations;
