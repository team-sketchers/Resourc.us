import React from 'react'
import { Dropdown } from 'react-bootstrap';
const Sort = ({setSorting}) => {
  
  const handleSorting = (e, key) => {
    e.preventDefault();
    if(key === 'newest') setSorting(key)
    else if(key === 'random') setSorting(key)
    else if(key === 'most-upvoted') setSorting(key)
  }

  return (
    <div>
    <Dropdown>
    <Dropdown.Toggle variant="primary" id="dropdown-basic">
      Sort By
    </Dropdown.Toggle>
  
    <Dropdown.Menu>
      <Dropdown.Item onClick = {((e, key) => handleSorting(e, "newest"))} href="/ResourceCard">Newest</Dropdown.Item>
      <Dropdown.Item onClick = {((e, key) => handleSorting(e, "most-upvoted"))} href="/ResourceCard">Most Upvoted</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
    </div>
  )
}

export default Sort
