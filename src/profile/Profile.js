import React from "react";

// {fullName='Default FullName', bio='Default Bio', profession='The default Profession'}

const Profile = (props) => {
    return (
        <>

            <img src={props.children} alt={'Alt'}/>

            <h1>{props.fullName}</h1>
            <h2>{props.bio}</h2>
            <h3>{props.profession}</h3>
        </>
    )
}

Profile.defaultProps = {
    fullName: 'New Default fullName',
    bio: 'New default bio',
    profession: 'New default profession'
}

export default Profile
