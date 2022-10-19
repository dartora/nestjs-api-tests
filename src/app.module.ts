import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

const uri = 'mongodb://root:root@db:27017/articles?authSource=admin';
//@Decorator
@Module({
  imports: [MongooseModule.forRoot(uri), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
