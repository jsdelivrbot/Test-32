import React from 'react';

const CamperListItem = ({ number, camper: { username, recent, alltime } }) => {
  return (
		<tr>
		  <td>{number}</td>
		  <td>
        <a href={`https://freecodecamp/${username}`}
          target="_blank"
        >
          <p>{username}</p>
        </a>
      </td>
		  <td>{recent}</td>
		  <td>{alltime}</td>
		</tr>
  );
}

export default CamperListItem;
