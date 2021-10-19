import axios from 'axios';
import React, {useState, useEffect, useMemo} from 'react';

function UseMemoDemo() {
  const [comments, setComments] = useState(null);
  useEffect(() => axios
  .get('https://jsonplaceholder.typicode.com/comments')
  .then(resp => setComments(resp.data)), []);

  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = '';
    for (let i=0; i<comments.length; i++) {
      if (comments[i]['name'].length > longestName.length) {
        longestName = comments[i]['name'];
      }  
    }
    return longestName;
  }
  const longestName = useMemo(() => findLongestName(comments), [comments]);  // for static data

  return (
    <div>
      <h4>Use Memo Demo</h4>
      <b>{longestName}</b>
      <br/><br/><hr/>
    </div>
  );
}


export default UseMemoDemo;