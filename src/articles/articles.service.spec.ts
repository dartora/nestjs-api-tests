import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { Article, ArticleSchema } from './entities/article.entity';

describe('ArticlesService', () => {
  let service: ArticlesService;
  let module: TestingModule;
  beforeEach(async () => {
    service = module.get<ArticlesService>(ArticlesService);
  });

  afterEach(async () => {
    await module.close();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an article', async () => {
    const article = await service.create({
      title: 'Title',
      text: 'texting',
    });
    expect(article.title).toBe('Title');
    expect(article.text).toBe('texting');
  });
});
