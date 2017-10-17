import React from 'react';

const CamperListItem = (props) => {
  return (
	<div>
		<tr>
		  <td> { number } </td>
		  <td> <a href={`https://freecodecamp/${camper.username}`} target="_blank">{camper.username}</a></td>
		  <td>{camper.recent}</td>
		  <td>{camper.alltime}</td>
		</tr>
	</div>
  );
}

export default CamperListItem;