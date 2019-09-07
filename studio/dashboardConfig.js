export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7434b14e71d02f352dee6d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bnd95zgo',
                  apiId: 'a50d78ca-affa-453b-b6eb-3961326a9730'
                },
                {
                  buildHookId: '5d7434b21f9af73bfcd8a347',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t28v5n7o',
                  apiId: '0859d2f6-8def-4323-ba65-9a511ea435f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bjerh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t28v5n7o.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
