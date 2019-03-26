import { buildSchema } from 'graphql';

export default buildSchema(`

type Article {
 _id: ID!,
 title: String!
 creator: String!
 createdAt: String!
 updatedAt: String!
}
input ArticleInput{
  title: String!
  creator: String!
  createdAt: String!
  updatedAt: String!
}
type RootQuery {
  articles: [Article!]!
}
type RootMutation {
  createArticle(articleInput: ArticleInput):Article!
}
schema{
  query: RootQuery,
  mutation: RootMutation

}

`);