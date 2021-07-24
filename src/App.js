import { Redirect, Route, Switch } from 'react-router-dom'
import NewQuote from './pages/NewQuote'
import Quotes from './pages/Quotes'
import QuotesDetail from './pages/QuotesDetail'

function App() {
	return (
		<Switch>
			{/* switch leads to have only one active route at a time */}
			<Route path='/' exact>
				<Redirect to='/quotes' />
			</Route>
			<Route path='/quotes' exact>
				<Quotes />
			</Route>
			<Route path='/newquote'>
				<NewQuote />
			</Route>
			<Route path='/quotes/:quoteId'>
				<QuotesDetail />
			</Route>
		</Switch>
	)
}

export default App
