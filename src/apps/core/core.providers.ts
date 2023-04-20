// import { Connection } from 'mongoose';
// import { FileSchema } from './schemas/file.schema';
import { StarSchema } from './schemas/star.schema';
// import { RequestSchema } from './schemas/request.schema';
// import { WorkspaceSchema } from './schemas/workspace.schema';
const { starSchemaName } = global.conf.datasource.mongodb;
export const fileProviders = [
  {
    provide: 'MONGODB_CONNECTION_StarRepository',
    useFactory: (connection: any) =>
      connection.model('star_model', StarSchema, starSchemaName),
    inject: ['MONGODB_CONNECTION'],
  },
];
