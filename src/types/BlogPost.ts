export type BlogPost = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  body: {
    code: string;
    raw: string;
  };
  image: string;
  tags?: string[] | undefined;
};
