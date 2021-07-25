import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Quotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'

function App() {
	return (
		<>
			<Layout>
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
					<Route path='/*'>
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		</>
	)
}

export default App
