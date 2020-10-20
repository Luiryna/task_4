import React, { useState, useEffect } from 'react'
import { Checkbox } from './Checkbox'

export const UserDataList = ({ users, setUsers }) => {
    const [allChecked, setAllChecked] = useState(false)
    useEffect(function () {
        console.log(users);
    }, [users]) 
    

    const handleCheck = e => {
        const { name, checked } = e.target

        if (name === "checkAll") {
            setAllChecked(checked)
            setUsers(prevUsers => prevUsers.map(user => ({ ...user, isChecked: checked })))
        } else {
            setUsers(prevUsers => prevUsers.map(user =>
                user.id.toString() === name ? { ...user, isChecked: checked } : user))
                console.log(name, checked)
            setAllChecked(users.every(user => user.isChecked))
        }
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">
                           
                            <input type="checkbox"
                                name="checkAll"
                                checked={allChecked}
                                onChange={(e) => handleCheck(e)} />
                        </th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created</th>
                        <th scope="col">Last login</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <th scope="row">
                                <Checkbox
                                    name={user.id}
                                    checked={user.isChecked}
                                    onChange={(e) => handleCheck(e)}
                                    key={`${user.id} ${user.isChecked}`}
                                />
                            </th>
                            <td>{user.id}</td>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.updatedAt}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 