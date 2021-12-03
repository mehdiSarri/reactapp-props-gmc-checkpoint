import React from "react";

// {fullName='Default FullName', bio='Default Bio', profession='The default Profession'}

const Profile = (props) => {
    const { fullName , bio, profession , setBio} = props
    
    
    return (
        <>
            <img src={props.children} alt={'Alt'}/>

            <h1 onClick={()=>setBio("hello from profile")} >{fullName}</h1>
            <h2>{bio}</h2>
            <h3>{profession}</h3>
        </>
    )
}

// Profile.defaultProps = {
//     fullName: 'New Default fullName',
//     bio: 'New default bio',
//     profession: 'New default profession'
// }

export default Profile
