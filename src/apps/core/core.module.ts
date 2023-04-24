import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { fileProviders } from './core.providers';
// import { CreateFileService } from './service/create-file.service';
// import { FileController } from './controller/file.controller';
import { StarController } from './controller/StarController';
import { ListstarsService } from './liststars.service';
import { RetrieveStarService } from './retrieve-star.service';
// import { ListstarsService } from './service/list-workspace.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StarController],
  providers: [ListstarsService, RetrieveStarService, ...fileProviders],
})
export class CoreModule {}
