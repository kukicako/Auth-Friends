
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AddFriend from './AddFriend.js';
import Friend from "./Friend.js";

const FriendList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() =>{
        axiosWithAuth()
        .get('/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    })
    return(
        <>
        <AddFriend />
        {friends.map(friend => (
            <div key={friend.id}>
                <Friend user={friend} />
            </div>
        ))}
        </>
    )
};

export default FriendList;