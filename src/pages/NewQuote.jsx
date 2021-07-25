import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom';

const NewQuote = () => {
	const history = useHistory()
	
	const addQuoteHandler = ({ author, text }) => {
		console.log(author, text)

		history.push('/quotes') //programmatic navigation
	}

	return (
		<div>
			<QuoteForm onAddQuote={addQuoteHandler} />
		</div>
	)
}

export default NewQuote
