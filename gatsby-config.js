require('source-map-support').install();
require('ts-node').register();

const { PRISMIC_REPOSITORY_NAME, PRISMIC_DEFAULT_LANG, PRISMIC_ACCESS_TOKEN, PRISMIC_REF } = process.env;

if (!PRISMIC_REPOSITORY_NAME) {
  console.error('Error! PRISMIC_REPOSITORY_NAME environment variable is undefined');
  process.exit();
}

if (!PRISMIC_ACCESS_TOKEN) {
  console.error('Error! PRISMIC_ACCESS_TOKEN environment variable is undefined');
  process.exit();
}

module.exports = {
  siteMetadata: {
    title: 'Finnish Electronic Music Association',
    description: '',
    url: 'https://fema.fi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    {
      resolve:'gatsby-plugin-tslint',
      options: {
        stages: ['develop']
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: PRISMIC_REPOSITORY_NAME,
        defaultLang: PRISMIC_DEFAULT_LANG || 'en-gb',
        accessToken: PRISMIC_ACCESS_TOKEN,
        path: '/preview',
        previews: false
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
