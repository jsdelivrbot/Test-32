import React from 'react';
import CamperListItem from './camper_list_item';


const CamperList = ({ campers }) => {
  
  const Items = campers.map((camper, index) => {
    return <CamperListItem key={index} camper={camper} number={index+1} > </CamperListItem>
  });
  
  return (
  
    <table className="table table-striped">
      <thead>
        <tr>
          <th> # </th>
          <th> Username </th>
          <th> Last 30 days </th>
          <th> All Time </th>
        </tr>
      </thead>
      <tbody>
        {Items}
      </tbody>
      
    </table>
    
    
  );
}

export default CamperList;