import React from 'react'
import Header from '../../Common/Head/Header'
import './UserPage.css'
import Changepassword from '../../Common/Profile/User/More/Changepassword'
import Notifi from '../../Common/Profile/User/More/Notifi'
import Purchased from '../../Common/Profile/User/More/Purchased'
import Yourvoucher from '../../Common/Profile/User/More/Yourvoucher'
import Admin from '../../Common/Profile/Admin/Admin'


const UserPage = () => {
    return (
        <>

            <Header />
            <div className='container-userpage'>
                <div className='pro'>
                    <h1>Congkun</h1>
                    <Changepassword />
                      <Notifi />
                    <Purchased />
                    <Yourvoucher />
                  <Admin/>
                </div>
                <h1 className='inf'>X</h1>
            </div>
        </>

    )
}

export default UserPage