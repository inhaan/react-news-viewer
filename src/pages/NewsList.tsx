import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import NewsHeadline from "../components/NewsHeadline";
import { Article } from "../interfaces";

const API_KEY = "35d0a17655044817af00e526fbdf2348";

interface HeadlinesResponse {
  status: string;
  totalResult: number;
  articles: Article[];
}

interface URLParams extends Record<string, string> {
  category: string;
}

const NewsList = () => {
  const { category } = useParams<URLParams>();
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getArticles = useCallback(async (apiKey: string, category?: string) => {
    let url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`;
    if (category) {
      url += `&category=${category}`;
    }
    const response = await axios.get<HeadlinesResponse>(url);
    return response.data.articles;
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        setArticles(await getArticles(API_KEY, category));
      } catch {}

      setLoading(false);
    })();
  }, [category]);

  if (loading) {
    return null;
  }
  return (
    <ul>
      {articles?.map((article) => (
        <NewsHeadline key={article.title} article={article} />
      ))}
    </ul>
  );
};

export default NewsList;
