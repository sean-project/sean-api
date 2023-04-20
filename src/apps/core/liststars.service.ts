import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { StarDocument } from './schemas/star.schema';

export class ListstarsService {
  constructor(
    @Inject('MONGODB_CONNECTION_StarRepository')
    private workspaceModel: Model<StarDocument>,
  ) {}
  async invoke(params) {
    return this.workspaceModel.find(params);
  }
}
