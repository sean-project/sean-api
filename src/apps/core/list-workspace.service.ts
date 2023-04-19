import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { FolderDocument } from './schemas/folder.schema';
// import { FileDocument } from '../schemas/file.schema';
// import { RequestDocument } from '../schemas/request.schema';
// import { WorkspaceDocument } from '../schemas/workspace.schema';

export class ListWorkspaceService {
  constructor(
    @Inject('MONGODB_CONNECTION_FolderRepository')
    private workspaceModel: Model<FolderDocument>,
  ) {}
  async invoke() {
    return this.workspaceModel.find({ BirthPlace: '北京' });
  }
}
