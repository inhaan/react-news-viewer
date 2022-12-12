export interface Article {
  title: string;
  description: string | null;
  urlToImage: string | null;
  url: string;
  source: { id: string | null; name: string | null };
  author: string | null;
  publishedAt: string | null;
  content: string | null;
}
