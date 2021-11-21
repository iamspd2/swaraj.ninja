// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'swaraj priyadarshan dash',
  domain: 'swaraj.ninja', // add without https:// , used in meta tags and share urls
  image: '/images/bighead.png',
  email: 'swarajdash40@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'swaraj.ninja',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'iamspd2',
    linkedin: 'theswaraj',
    facebook: 'swaraj6',
    twitter: 'swalaxh',
    instagram: 'swaraj2',
    codestats: 'swaraj-ninja'
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/swaraj.pdf'
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'Ubuntu 20.04 LTS / Windows 10 Pro'},
      {title: 'Memory', value: '8 GB 2133 MHz DDR4'},
      // {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      // {title: 'Mouse', value: 'Logitech Silent Pebble'},
      // {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'Acer Aspire E5-575G (15.6-inch, 2017) • 2.5 GHz 4-Core Intel Core i5 • NVIDIA GeForce 940MX 2 GB + Intel HD Graphics 620 4158 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Spikewell', src: '/images/spikewell.png', url: 'https://www.spikewell.com/' },
      { name: 'Mindfire', src: '/images/mindfire.png', url: 'https://www.mindfiresolutions.com/' }
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buybuyMeACoffee: 'buy me a coffee',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'i am a software engineer. i share everything i do in my life here, including blogs, projects etc.',
        words: ['developer', 'designer', 'engineer', 'programmer'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. these are about my life experiences mostly.'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      }
    }
  }
}
