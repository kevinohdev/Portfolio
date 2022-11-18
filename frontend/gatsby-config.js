const dotenv = require('dotenv');

dotenv.config({ path: '.env'});

module.exports = {
  siteMetadata: {
    title: `frontend`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: `bryroqks`,
      dataset: `production`,
      // a token with read permissions is required
      // if you have a private dataset
      token: process.env.SANITY_TOKEN,
      watchMode: true,
      // If the Sanity GraphQL API was deployed using `--tag <name>`,
      // use `graphqlTag` to specify the tag name. Defaults to `default`.
      graphqlTag: 'default',
    },
  },
]
};