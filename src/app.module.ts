import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
// import { TweetsController } from './tweets/tweets.controller';
// import { ArticlesController } from './articles/articles.controller';

//@Decorator
@Module({
  imports: [ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
