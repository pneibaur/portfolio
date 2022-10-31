module.exports = {
  siteMetadata: {
    title: `Phil Neibaur`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "projects",
      "path": `${__dirname}/projects`
    },
    __key: "projects"
  }, {resolve: 'gatsby-plugin-manifest',
  options: {
    "name": "GatsbyJS",
    "short_name": "GatsbyJS",
    "start_url": "/",
    "icon": "src/images/PRNfavicon.png",
  }
},
]
};
