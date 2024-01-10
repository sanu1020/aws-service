import {  Controller, Get, HttpCode, HttpException, HttpStatus, Req, Res } from '@nestjs/common';
import { AwsService } from './aws.service';

@Controller('aws/log')
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @Get('group')
  async getLogGroup() 
  {
    try {
      const logs = await this.awsService.describeLogGroups();
      if (logs) return logs
    } catch (error) {
      throw new HttpException(`Logs group retrival error ${error}`,HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('stream')
  async getLogStream()
  {
    try {
          const streams = await this.awsService.describeLogStreams();
      return streams 
    } catch (error) {
      throw new HttpException(`Log Streams retrival error ${error}`,HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('event')
  async getLogEvent()
   {
    try {
      const events = await this.awsService.describeLogEvent();
      return events
     
    } catch (error) {
      throw new HttpException(`Log Streams retrival error ${error}`,HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
