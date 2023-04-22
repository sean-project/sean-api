import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { StarDocument } from './schemas/star.schema';

export class ListstarsService {
  constructor(
    @Inject('MONGODB_CONNECTION_StarRepository')
    private workspaceModel: Model<StarDocument>,
  ) {}
  async invoke(params) {
    const { current, pageSize } = params;

    const shaixuantiaojian = {
      starID: isNaN(Number(params.starID)) ? undefined : Number(params.starID),
      starName: { $regex: RegExp(params.starName) },
      $or: [
        {
          professions: { $regex: RegExp(params.professions) },
        },
        {
          starCustomTags: { $regex: RegExp(params.starCustomTags) },
        },
      ],
    };
    console.log(shaixuantiaojian, 'shaixuantiaojian');

    const aaa = Object.keys(shaixuantiaojian)
      .filter(
        (key) =>
          shaixuantiaojian[key] !== null && shaixuantiaojian[key] !== undefined,
      )

      .reduce((acc, key) => ({ ...acc, [key]: shaixuantiaojian[key] }), {});

    return {
      data: await this.workspaceModel
        .find(aaa)
        .skip((current - 1) * pageSize)
        .limit(pageSize)
        .sort({ birthdayDate: -1 }),
      total: await this.workspaceModel.find(aaa).countDocuments(),
      success: true,
    };
  }
}
