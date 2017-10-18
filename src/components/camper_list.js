import React from 'react';
import CamperListItem from './camper_list_item';

const CamperList = ({ campers }) => {
  const items = campers.map((camper, index) => {
    return <CamperListItem key={index} camper={camper} number={index+1} />
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Last 30 days</th>
          <th>All Time</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
}

export default CamperList;
