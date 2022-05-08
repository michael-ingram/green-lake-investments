import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    siteMetadata: {
        title: `Green Lake Investments`,
        siteUrl: `https://gatsby.greenlakeinvestments`,
        description: 'Real Estate Investment Company',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: '3cataqo3',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN
            }
        }
    ]
}