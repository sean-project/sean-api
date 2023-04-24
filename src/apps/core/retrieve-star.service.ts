import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { StarDocument } from './schemas/star.schema';

export class RetrieveStarService {
  constructor(
    @Inject('MONGODB_CONNECTION_StarRepository')
    private workspaceModel: Model<StarDocument>,
  ) {}
  async invoke(params) {
    const { starId } = params;
    return this.workspaceModel.findOne({ starID: starId });
  }
}
