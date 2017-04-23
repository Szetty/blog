import InterestsView from './components/InterestsView'
import Hobbies from './children/Hobbies'
import Technologies from './children/Technologies'

// Sync route definition
export default {
  component : InterestsView
}

export const InterestsChildren = [Hobbies, Technologies]
