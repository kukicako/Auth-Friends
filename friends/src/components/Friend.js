import React from 'react'

const Friend = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>email: {user.email}</p>
    </div>
  )
}

export default Friend;