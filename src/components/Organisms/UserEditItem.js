import React  from 'react';
import Modal from 'react-modal';
import {useFormik} from 'formik';



const handleCreateDatabaseAccount = (user,formikEditUser) =>{

    fetch('/api/Administrator/CreateOrUpdateDatabaseAccount', {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
        body:JSON.stringify(formikEditUser)
      })
        .then(res => console.log(res))
}
const handleCreateDatabase = (user,formikEditUser) =>{

    fetch('/api/Administrator/CreateOrUpdateDatabase', {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
        body:JSON.stringify(formikEditUser)
      })
        .then(res => console.log(res))
}


const handleDeleteDatabaseAccount = (user) =>{
    fetch('/api/Administrator/DeleteDatabaseAccount', {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
        body:JSON.stringify({user})
        })
        .then(res => console.log(res))
}



function UserEditItem({user, modalEditUser, setModalEditUser}) {
    console.log(user.userName)

    const formikEditUser = useFormik({
        initialValues:{
            userName:user.userName,
            databaseName: "", 
            databaseUser: "",
            databasePassword:"",
            databaseServerAddress: null,
            databaseServerPort: 0,
            
        },
      })

        return (
            <>
                <Modal
                        ariaHideApp={false}
                        isOpen={modalEditUser}
                        onRequestClose={() => setModalEditUser(false)}
                        style={{
                            overlay: {
                                oppacity: 0.20,
                            },
                            content: {
                                position:'absolute',
                                left:'50%',
                                top:'50%',
                                transform:'translate(-50%,-50%)',
                                width: '600px',
                                height: '400px',
                                border:' 4px solid #C4C4C4',
                                backgroundColor: 'white',
                                boxShadow: '1px 9px 81px rgba(0, 0, 0, 0.25)',
                                borderRadius: '20px',
                            }
                        }}
                    >
                    <form onSubmit={formikEditUser.handleSubmit}>
                        <h1>{user.userName}</h1>
                        
                        
                        <label>Database user</label>
                        {user.hasDatabaseAccount ? <h1>Yes</h1> :<h1>not</h1>}
                        
                        <input
                            name='databaseUser'
                            onChange={formikEditUser.handleChange}
                            values={formikEditUser.values.password}
                        />
                        <button onClick={()=>handleCreateDatabaseAccount( user, formikEditUser.values )}>Create database ACCOUNT</button>
                       
                        {user.hasDatabase ? <h1>Yes</h1> :<h1>not</h1>}
                        <label>Database name</label>
                        <input
                            name='databaseName'
                            onChange={formikEditUser.handleChange}
                            values={formikEditUser.values.password}
                        />

                        <label>Database password</label>
                        <input
                            name='databasePassword'
                            onChange={formikEditUser.handleChange}
                            values={formikEditUser.values.password}
                        />
                        <button onClick={()=>handleCreateDatabase( user, formikEditUser.values )}>Create database ACCOUNT</button>

                    </form>

                </Modal>
        </>
  );
}

export default UserEditItem;