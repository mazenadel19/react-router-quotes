import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
	const addQuoteHandler = ({ author, text }) => {
		console.log(author, text)
	}

	return (
		<div>
			<QuoteForm onAddQuote={addQuoteHandler} />
		</div>
	)
}

export default NewQuote
