import ArticleTile from "../article/ArticleTile";
import { useFetch } from "../../services/hooks";
import "./home.css";
import type { ArticleData } from "../../services/types";

const HomePage = () => {
  const health = useFetch<string>(
    `http://localhost:${import.meta.env.VITE_PORT_BACKEND ?? 5000}/api/health`,
  );
  const articles = useFetch<ArticleData[]>(
    `http://localhost:${import.meta.env.VITE_PORT_BACKEND ?? 5000}/api/article`,
  );

  return (
    <>
      <h2>Home</h2>
      <p>API-Status: {health.data}</p>
      {articles.data &&
        articles.data.map((article: ArticleData) => {
          return (
            <ArticleTile
              key={article.id}
              id={article.id}
              title={article.webTitle}
              section={article.sectionName}
              date={article.webPublicationDate}
              thumbnail={article.thumbnail}
              trailText={article.trailText}
              url={article.webUrl}
            />
          );
        })}
    </>
  );
};

export default HomePage;
