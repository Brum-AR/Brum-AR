import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScooterModule } from './scooter/scooter.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://root:root@cluster0.kpikx.mongodb.net/brumar?retryWrites=true&w=majority"), UserModule, ScooterModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
