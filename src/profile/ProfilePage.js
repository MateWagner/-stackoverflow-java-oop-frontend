import React from 'react'
import ProfileCard from './ProfileCard'
import { useParams } from 'react-router-dom'
function ProfilePage() {
  const { id } = useParams();
  return (
    <ProfileCard clientId={id}/>
  )
}

export default ProfilePage