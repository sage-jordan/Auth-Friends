import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

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
    console.log(friendsObj);
    return (
        <div>
            <h1>Friends List</h1>
            {friendsObj.map((friend) => {
                return (
                    <div className="friend-cards">
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
    );
};
export default Friends;