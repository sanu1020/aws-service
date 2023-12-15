import {  Controller, Get, Req, Res } from '@nestjs/common';
import { AwsService } from './aws.service';

@Controller('aws/log')
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @Get('group')
  async getLogGroup(
    @Req() request,
    @Res() response,
  ) {
    try {
      const logs = await this.awsService.describeLogGroups();
      return response
      .status(200)
      .json(logs)
    } catch (error) {
      return response
        .status(500)
        .json(`${error.message}`)
    }
  }

  @Get('stream')
  async getLogStream(
    @Req() request,
    @Res() response,
  ){
    try {
      const streams = await this.awsService.describeLogStreams();
      return response
      .status(200)
      .json(streams)
     
    } catch (error) {
      return response
        .status(500)
        .json(`${error.message}`)
    }
  }

  @Get('event')
  async getLogEvent(
    @Req() request,
    @Res() response,
  ) {
    try {
      const events = await this.awsService.describeLogEvent();
      return response
      .status(200)
      .json(events)
     
    } catch (error) {
      return response
        .status(500)
        .json(`${error.message}`)
    }
  }
}
