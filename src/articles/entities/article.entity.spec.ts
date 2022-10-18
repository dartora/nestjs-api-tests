import mongoose from 'mongoose';
import { Article, ArticleSchema } from './article.entity';

describe('Articles Tests', () => {
  it('should create a tweet', () => {
    const article = new Article({ title: 'Title', text: 'texting' });
    expect(article.title).toBe('Title');
    expect(article.text).toBe('texting');
  });

  it('create a article document', async () => {
    const conn = await mongoose.connect(
      'mongodb://root:root@localhost:27017/article_test?authSource=admin',
    );
    const ArticleModel = conn.model('Article', ArticleSchema);
    const article = new ArticleModel({
      title: 'Hello World',
      text: 'texting',
    });

    await article.save();
    const articleCreated = await ArticleModel.findById(article._id);
    console.log(articleCreated);
  });
});
