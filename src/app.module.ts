import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, AwsModule, ConfigModule.forRoot({ isGlobal: true})],

})
export class AppModule {}
