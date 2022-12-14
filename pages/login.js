import React from 'react'

import{useSession, signIn, signOut} from 'next-auth/react'

const login = () =>{
    
    const {data: session} = useSession();
    console.log(session);
    if(session) {
        return (
            <div>
                <p>Welcome, {session.user.name}</p>
                <img src={session.user.image} alt=""/>
                <p>{session.user.email}</p>
                <button onClick={()=> signOut()}>Sign Out</button>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <p>You are not signed in</p>
                <button onClick={()=> signIn()}>Sign in</button>
            </div>
        )
    }
}

export default login