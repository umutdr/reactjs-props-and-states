import React from 'react';

const Tweet = (props) => (
	<div>
		<h1>{props.ownerName}</h1>
		<p>{props.content}</p>
	</div>
);

export default Tweet;
