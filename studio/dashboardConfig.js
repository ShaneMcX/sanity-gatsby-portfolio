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
                  buildHookId: '6393ce22add2561fb6f5c4ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kf3afxi5',
                  apiId: 'e36dda78-1431-49f3-bc11-bc5446df292d'
                },
                {
                  buildHookId: '6393ce23f7ec7c1eb420a563',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pm5bufto',
                  apiId: '9e083481-f2a0-4516-8fc0-079d4fa0509b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ShaneMcX/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pm5bufto.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
