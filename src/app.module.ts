import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [AuthModule, AwsModule, ConfigModule.forRoot({ isGlobal: true}), DatabaseModule, ItemsModule],

})
export class AppModule {}
