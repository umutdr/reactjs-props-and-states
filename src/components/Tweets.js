import React from 'react';
import Tweet from './Tweet';

const Tweets = (props) => {
	const tweets = [
		{
			id: 1,
			ownerName: 'umutdr',
			content: 'reactjs is cool',
		},
		{
			id: 2,
			ownerName: 'deved',
			content: 'reactjs ughh, I needed to drink',
		},
		{
			id: 3,
			ownerName: 'deved',
			content: 'reactjs ughh, I needed to drink',
		},
		{
			id: 4,
			ownerName: 'deved',
			content: 'reactjs ughh, I needed to drink',
		},
		{
			id: 5,
			ownerName: 'deved',
			content: 'reactjs ughh, I needed to drink',
		},
		{
			id: 6,
			ownerName: 'traversy media',
			content: 'reactjs? im out.',
		}
	];

	return (
		<section>
			{tweets.map((tweet) => (
				<Tweet key={tweet.id} ownerName={tweet.ownerName} content={tweet.content} />
			))}
		</section>
	);
};

export default Tweets;
