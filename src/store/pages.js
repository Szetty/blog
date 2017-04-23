import Home from 'routes/Home'
import Interests from 'routes/Interests'
import Hobbies from 'routes/Interests/children/Hobbies'
import Technologies from 'routes/Interests/children/Technologies'

const interestsChildren = [
  { path: '/interests/hobbies', component: Hobbies, name: 'Hobbies' },
  { path: '/interests/technologies', component: Technologies, name: 'Technologies' }
]

export const PAGES = [
  { indexRoute: Home, children: [], path: '/', name: 'Home' },
  { route: null, children: [], path: '/about', name: 'About me' },
  { route: Interests, children: interestsChildren, path: '/interests', name: 'Interests' },
  { route: null, children: [], path: '/posts', name: 'Posts' },
  { route: null, children: [], path: '/life', name: 'Life' },
  { route: null, children: [], path: '/tutorials', name: 'Tutorials' },
  { route: null, children: [], path: '/apps', name: 'Applications I use' }
]

export const PAGE_NAME_BY_PATH = {
  '/': 'HOME',
  '/interests': 'INTERESTS',
  '/interests/hobbies': 'HOBBIES',
  '/interests/technologies': 'TECHNOLOGIES'
}
