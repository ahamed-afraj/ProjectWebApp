import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Google Pixel 10 Release date'},
  {id: 3, suggestion: 'Oculus Quest 2 specs'},
  {id: 4, suggestion: 'Tesla Share Price'},
  {id: 5, suggestion: 'Price of Ethereum today'},
  {id: 6, suggestion: 'Latest trends in AI'},

  //   {id: 7, suggestion: 'Latest trends in ML'},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App
