const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to retrieve tracks"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the tracks author"
    author: Author!
    "the picture to display"
    thumbnail: String
    "the tracks approx length"
    length: Int
    "the number of modules on track"
    modulesCount: Int
  }
  "Author of a complete track"
  type Author {
    id: ID!
    "Authors first and last name"
    name: String!
    "Authors profile pic URL"
    photo: String
  }
`;

module.exports = typeDefs;
