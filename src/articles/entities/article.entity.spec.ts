import mongoose from 'mongoose';
import { Article, ArticleSchema } from './article.entity';

describe('Articles Tests', () => {
  describe('Articles Class', () => {
    it('should create a tweet', () => {
      const article = new Article({ title: 'Title', text: 'texting' });
      expect(article.title).toBe('Title');
      expect(article.text).toBe('texting');
    });
  });

  describe('Using MongoDB', () => {
    let conn: mongoose.Mongoose;
    beforeEach(async () => {
      conn = await mongoose.connect(
        'mongodb://root:root@db:27017/articles_entity_test?authSource=admin',
      );
    });

    afterEach(async () => {
      await conn.disconnect();
    });
    it('create a article document', async () => {
      const ArticleModel = conn.model('Article', ArticleSchema);
      const article = new ArticleModel({
        title: 'Hello World',
        text: 'texting',
      });

      await article.save();
      const articleCreated = await ArticleModel.findById(article._id);
      console.log(articleCreated);
      expect(articleCreated.title).toBe('Hello World');
      expect(articleCreated.text).toBe('texting');
    });
  });
});
