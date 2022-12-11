import { Article } from "../interfaces";
import styled from "styled-components";

interface NewsHeadlineProps {
  article: Article;
}

const Container = styled.li`
  display: flex;
  margin: 1rem;
  gap: 1rem;
`;
const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  flex-grow: 1;
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
      <ImageContainer>
        <NewsImage src={article.urlToImage} />
      </ImageContainer>
      <div>
        <Title>
          <a href={article.url} target="_blank">
            {article.title}
          </a>
        </Title>
        <div>{article.description}</div>
      </div>
    </Container>
  );
};

export default NewsHeadline;
