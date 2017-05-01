import Home from 'routes/Home'
import Interests from 'routes/Interests'
import Hobbies from 'routes/Interests/children/Hobbies'
import Technologies from 'routes/Interests/children/Technologies'
import About from 'routes/About'

const baseName = (__PROD__) ? '/~sasd1136' : ''

const interestsChildren = [
  { path: baseName + '/interests/hobbies', component: Hobbies, name: 'Hobbies' },
  { path: baseName + '/interests/technologies', component: Technologies, name: 'Technologies' }
]

export const PAGES = [
  { indexRoute: Home, children: [], path: baseName + '/', name: 'Home' },
  { route: About, children: [], path: baseName + '/about', name: 'About me' },
  { route: Interests, children: interestsChildren, path: baseName + '/interests', name: 'Interests' },
  { route: null, children: [], path: baseName + '/posts', name: 'Posts' },
  { route: null, children: [], path: baseName + '/life', name: 'Life' },
  { route: null, children: [], path: baseName + '/tutorials', name: 'Tutorials' },
  { route: null, children: [], path: baseName + '/apps', name: 'Applications I use' }
]

// For mobile header title
const pageNames = {}
pageNames[baseName + '/'] = 'HOME'
pageNames[baseName + '/interests'] = 'INTERESTS'
pageNames[baseName + '/interests/hobbies'] = 'HOBBIES'
pageNames[baseName + '/interests/technologies'] = 'TECHNOLOGIES'
pageNames[baseName + '/about'] = 'ABOUT ME'

export const PAGE_NAME_BY_PATH = pageNames
