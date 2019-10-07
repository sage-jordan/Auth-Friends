import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import AddFriend from './AddFriend';

function Friends(){
    const [ friendsObj, setFriendsObj ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                return setFriendsObj(res.data);
            })
            .catch(err => console.log('Error: ', err));
    }, [] );

    return (
        <div>
            <h1>Friends List</h1>
            <div className="cards-container">
                {friendsObj.map((friend) => {
                    return (
                        <div className="friend-card">
                            <Card
                                header={friend.name}
                                meta={friend.age}
                                description={friend.email}
                                extra={friend.id}
                            />
                        </div>
                    );
                })}
            </div>
            <AddFriend />
        </div>
    );
};
export default Friends;