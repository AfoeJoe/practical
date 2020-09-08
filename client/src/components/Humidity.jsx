import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
export default function Humidity() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      './humidity',
    );
 result.then((res) => res.json())
      .then((data) => console.log(data));
    //setData(result.data);
  }, []);
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
 
