// import { Connection } from 'mongoose';
// import { FileSchema } from './schemas/file.schema';
import { FolderSchema } from './schemas/folder.schema';
// import { RequestSchema } from './schemas/request.schema';
// import { WorkspaceSchema } from './schemas/workspace.schema';
const {
  fileSchemaName,
  requestSchemaName,
  workspaceSchemaName,
  folderSchemaName,
} = global.conf.datasource.mongodb;
export const fileProviders = [
  {
    provide: 'MONGODB_CONNECTION_FolderRepository',
    useFactory: (connection: any) =>
      connection.model('folder_model', FolderSchema, folderSchemaName),
    inject: ['MONGODB_CONNECTION'],
  },
];
