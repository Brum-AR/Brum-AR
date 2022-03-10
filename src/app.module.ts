import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScooterModule } from './scooter/scooter.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot(process.env.DATABASE_URI), ScooterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
