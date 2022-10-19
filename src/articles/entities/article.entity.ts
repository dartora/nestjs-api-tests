import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ArticleDocument = Article & Document;

export type ArticleProps = {
  title: string;
  text: string;
};

@Schema()
export class Article {
  constructor(props: ArticleProps) {
    Object.assign(this, props);
    // this.title = props.title;
    // this.text = props.text;
  }
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  text: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
