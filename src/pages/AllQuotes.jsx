import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const Quotes = () => {
	const DUMMY_QUOTES = [
		{
			id: 'q1',
			author: 'Buzz Lightyear',
			text: "This Isn't Flying, This Is Falling With Style",
		},
		{ id: 'q2', author: 'Buzz Lightyear', text: 'To Infinity, And Beyond!' },
	]

	return (
		<>
			<QuoteList quotes={DUMMY_QUOTES} />
		</>
	)
}

export default Quotes
