import React, { useState } from 'react';

function AddFriend() {

    const [ newFriend, setNewFriend ] = useState({
        id: '',
        name: '',
        age: '',
        email: '',
    });

    const addFriend = () => {

    };

    const handleChange = e => {
        e.preventDefault();
        setNewFriend({
            ...newFriend,
            [e.target.name]: [e.target.value]
        })
    };

    return (
        <div className="add-friend">
            <form onSubmit={addFriend}>
                <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
};
export default AddFriend;