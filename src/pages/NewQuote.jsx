import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'

const NewQuote = () => {
	const { sendRequest, status } = useHttp(addQuote)

	const history = useHistory()

	useEffect(() => {
		if (status === 'completed') {
			history.push('/quotes') //programmatic navigation
		}
	}, [status, history])

	const addQuoteHandler = ({ author, text }) => {
		console.log(author, text)
		sendRequest({ author, text })
	}

	return (
		<div>
			<QuoteForm
				isLoading={status === 'pending'}
				onAddQuote={addQuoteHandler}
			/>
		</div>
	)
}

export default NewQuote
