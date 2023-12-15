import { CloudWatchLogsClient, DescribeLogGroupsCommand, DescribeLogStreamsCommand, GetLogEventsCommand } from '@aws-sdk/client-cloudwatch-logs';
import {  CreateBucketCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AwsService {
    constructor(private  configService: ConfigService) {}

    region = this.configService.get('REGION')
  
    cloudWatchLogClient = new CloudWatchLogsClient({
        region: this.region,
        credentials: {
            accessKeyId:this.configService.get('ACCESS_KEY'),
            secretAccessKey:this.configService.get('SECRET_ACCESS_KEY'),
            sessionToken:this.configService.get('SESSION_TOKEN')
        }
    })

    async describeLogGroups() {
        try {
            const response = await this.cloudWatchLogClient.send(new DescribeLogGroupsCommand({}));
            console.log(response)
            return { LogGroup: response.logGroups}
        } catch (error) {
            throw error; 
        }
    }

    async describeLogStreams() {
        try {
            const response = await this.cloudWatchLogClient.send(new DescribeLogStreamsCommand({
                "logGroupName": "/aws/eks/skyu-sandbox-k8s-cluster/cluster"
            }));
            console.log(response)
            return { Streams: response.logStreams}
            
        } catch (error) {
            throw error; 
        }
    }

    async describeLogEvent() {
        try {
            const response = await this.cloudWatchLogClient.send(new GetLogEventsCommand({
                "logGroupName":"/aws/eks/skyu-sandbox-k8s-cluster/cluster",
                "logStreamName":"authenticator-d05160b5f34dbdf02f553688081267ef",
                "limit":10
            }));
            console.log(response)
            return { Events: response.events}
        } catch (error) {
            throw error; 
        }
    }
}
