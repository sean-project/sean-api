import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { ListstarsService } from '../liststars.service';
import { RetrieveStarService } from '../retrieve-star.service';
@Controller()
export class StarController {
  constructor(
    private liststarsService: ListstarsService,
    private retrieveStarService: RetrieveStarService,
  ) {}
  @Post('liststars')
  liststars(@Request() req, @Body() reqBody): Promise<any> {
    return this.liststarsService.invoke(reqBody);
  }
  @Get('star/:starId')
  retrieveStar(@Request() req, @Param() param): Promise<any> {
    console.log(param);
    return this.retrieveStarService.invoke({ starId: param.starId });
  }
}
