module.exports = {
    siteMetadata: {
        title: `Skien Live 2019`,
        description: `Skien live er en helårs arrangør. `,
        author: `Skien Live`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-117932173-1",
            },
        },
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                "transpileTemplateLiterals": false,
                "displayName": false
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/SL-icon.png`, // This path is relative to the root of the site.
            },
        },
    ],
}
