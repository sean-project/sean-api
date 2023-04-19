import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { fileProviders } from './core.providers';
// import { CreateFileService } from './service/create-file.service';
// import { FileController } from './controller/file.controller';
import { WorkspaceController } from './controller/workspace.controller';
import { ListWorkspaceService } from './list-workspace.service';
// import { ListWorkspaceService } from './service/list-workspace.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkspaceController],
  providers: [ListWorkspaceService, ...fileProviders],
})
export class CoreModule {}
