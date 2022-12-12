import { Article } from "../interfaces";
import styled from "styled-components";
import { memo } from "react";

interface NewsHeadlineProps {
  article: Article;
}

const Container = styled.li`
  display: flex;
  margin: 3rem 1rem;
  gap: 1.2rem;
`;
const ImageContainer = styled.div`
  width: 150px;
  height: 100px;
  overflow: hidden;
  flex-shrink: 0;
`;
const NewsImage = styled.img`
  width: 150px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: underline;
  margin-bottom: 0.7rem;
`;

const NewsHeadline = ({ article }: NewsHeadlineProps) => {
  return (
    <Container>
      {article.urlToImage && (
        <ImageContainer>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <NewsImage src={article.urlToImage} />
          </a>
        </ImageContainer>
      )}

      <div>
        <Title>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </Title>
        <div>{article.description}</div>
      </div>
    </Container>
  );
};

export default memo(NewsHeadline);
