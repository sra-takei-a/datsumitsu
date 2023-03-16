// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Genre, GenreMaster, User, Facility, Home, FilterVenues, Venues } = initSchema(schema);

export {
  Genre,
  GenreMaster,
  User,
  Facility,
  Home,
  FilterVenues,
  Venues
};