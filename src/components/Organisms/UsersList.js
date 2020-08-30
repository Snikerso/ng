import React , {useState} from 'react';
import {useQuery} from "react-query";
import UserEditItem from 'components/Organisms/UserEditItem';
import ListTable from 'components/Organisms/ListTable'



const handleDeleteUser = (user) =>{

    fetch("/api/Administrator/DeleteAccount", {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
        body:JSON.stringify({content:user.userName})
      })
        .then(res => console.log(res))

}
const handleDeleteDatabase = (user) =>{
    console.log(user)
    const body = {  databaseServerAddress: null,
    databaseServerPort: 0,
    userName: user.userName,
    databaseUser: user.databaseUser,
    databaseName: user.databaseName,
    databasePassword: "",
}

    fetch("/api/Administrator/DeleteDatabase", {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
        body:JSON.stringify(body)
      })
        .then(res => console.log(res))
}
const handleDeleteDatabaseUser = (user) =>{
    const body = {  
        databaseServerAddress: null,
        databaseServerPort: 0,
        userName: user.userName,
        databaseUser: user.databaseUser,
        databaseName: user.databaseName,
        databasePassword: "",
}

    fetch('/api/Administrator/DeleteDatabaseAccount', {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
        body:JSON.stringify(body)
      })
        .then(res => console.log(res))

}


function UsersList() {

    const [modalEditUser,setModalEditUser] = useState(false)
    const [modalList,setModalList] = useState([])


    const handleEditUser = (userName,e ,data) =>{
        const lala = data.filter(item=>item.userName === userName)
        setModalEditUser(true)
        setModalList(lala)
      }



  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("/api/Administrator/GetUsers", {
        method: 'GET',
        credentials: 'include',
        headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Cookie' : document.cookie },
   
            
        })
            .then(res => res.json())
            .then(data=>data)
        );

        if (isLoading) return "Loading...";

        if (error) return "An error has occurred: " + error.message;
        return (
            <>

                <ListTable
                    type='USERS'
                    heads={['Username','Database user' , 'database name' ,'Edit' , 'Delete']} 
                    templateColums={'20% 20% 20% 15% 15% '}
                    rows={data}
                    handleEditUser={handleEditUser}
                    handleDeleteUser={handleDeleteUser}
                    handleDeleteDatabase={handleDeleteDatabase}
                    handleDeleteDatabaseUser={handleDeleteDatabaseUser} />
        


                    {modalList.map(item=> {
                        return(
                            <UserEditItem key={item.userName} user={item} modalEditUser={modalEditUser} setModalEditUser={setModalEditUser} />
                        )
                    })}
            </> 
            
            );
}

export default UsersList;