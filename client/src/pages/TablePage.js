import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { LoadingIndicator } from '../components/Loader'
import { Table } from '../components/Table'
import { Toolbar } from '../components/Toolbar'

export const TablePage = () => {
    const [usersData, setUsersData] = useState([])
    const auth = useContext(AuthContext)

    const { request, loading, clearError } = useHttp()
    const { token } = useContext(AuthContext)

    const fetchUsersData = useCallback(async () => {
        try {
            const fetched = await request('/api/content/users', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsersData(fetched)
        } catch (e) { }
    }, [token, request])


    useEffect(() => {
        fetchUsersData()
    }, [fetchUsersData])

    const toolbarHandler = async (event) => {
        const status = event.target.name
        const method = event.target.value
        const checkedUsers = usersData.filter(user => user.isChecked)
        const idsOfCheckedUsers = checkedUsers.map(user => user.id)

        if (method === 'DELETE') {
            idsOfCheckedUsers.forEach(id => {
                deleteUser(id)
            })
        } else {
            await request('/api/content/users', 'PUT', { status, ids: idsOfCheckedUsers }, {
                Authorization: `Bearer ${token}`
            })
        }
        fetchUsersData()
        if ((method === 'DELETE' || status === 'Blocked') && idsOfCheckedUsers.includes(auth.userId)) {
            auth.logout()
        }
    }
    const deleteUser = async (id) => {
        console.log(id);
        try {
            await request(`/api/content/users/${id}`, 'DELETE', {id}, {
                Authorization: `Bearer ${token}`
            })
            await fetchUsersData()
        } catch (error) {
            console.log('delete user error: ', error);
        }
        
    }

    useEffect(() => {
        clearError()
    }, [clearError])

    if (loading) {
        return <LoadingIndicator />
      }

    return (
        <div>
            <Toolbar handler={toolbarHandler} />
            {!loading && <Table users={usersData} setUsers={setUsersData} />}
            {loading && <LoadingIndicator />}
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Hey!</strong> If you select the block or delete button with your <strong>ID</strong>, you will be logined out
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                 </button>
            </div>
        </div>
    )
}