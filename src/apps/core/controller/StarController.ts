import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ListstarsService } from '../liststars.service';
@Controller()
export class StarController {
  constructor(private liststarsService: ListstarsService) {}
  @Post('liststars')
  liststars(@Request() req, @Body() reqBody): Promise<any> {
    return this.liststarsService.invoke(reqBody);
  }
}
