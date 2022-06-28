// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Facility, User, Home } = initSchema(schema);

export {
  Facility,
  User,
  Home
};