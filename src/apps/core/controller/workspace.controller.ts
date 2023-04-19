import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ListWorkspaceService } from '../list-workspace.service';
// import { CreateFileService } from '../service/create-file.service';
// import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
// import { GetCollectionTreeService } from '../service/get-collection-tree.service';
// import { RetrieveRequestService } from '../service/retrieve-request.service';
// import { UpdateRequestService } from '../service/update-request.service';
// import { DeleteFileService } from '../service/delete-file.service';
// import { UpdateFileService } from '../service/update-file.service';
// import { ListWorkspaceService } from '../service/list-workspace.service';
// import { CreateWorkspaceService } from '../service/create-workspace.service';
// import { UpdateWorkspaceService } from '../service/update-workspace.service';
// import { RetrieveWorkspaceService } from '../service/retrieve-workspace.service';
// import { DeleteWorkspaceService } from '../service/delete-workspace.service';
// import {RetrieveRequestService} from "../../request/service/retrieve-request.service";

@Controller()
export class WorkspaceController {
  constructor(private listWorkspaceService: ListWorkspaceService) {}
  @Post('listworkspace')
  listworkspace(@Request() req, @Body() reqBody): Promise<any> {
    return this.listWorkspaceService.invoke();
  }
}
