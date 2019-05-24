import React, { useState, useEffect } from 'react'
import { Request } from '../../request'
import { User } from '@saber2pr/types-github-api'
import { FootBar } from '../../components/footBar/footBar'
import './profile.less'
import * as Svg from '../../components/svg'

export interface Profile {
  userId?: string
}

const useUserId = (userId = 'saber2pr') => {
  const [userInfor, setUserInfor] = useState<User>({} as User)
  useEffect(() => {
    Request.Github.getUserInfor(userId).then(setUserInfor)
  }, [userId])
  return userInfor
}

export const Profile = ({ userId = 'saber2pr' }: Profile) => {
  const { login, name, company, blog, location, bio, avatar_url } = useUserId(
    userId
  )
  return (
    <>
      <header>Profile</header>
      <main className="profile">
        <dl className="table">
          <dd>
            <img className="avatar" src={avatar_url} alt={login} />
          </dd>
          <dt>
            <h1>{name}</h1>
          </dt>
          <dd>{bio}</dd>
          <dd>
            <h2 className="login">{login}</h2>
          </dd>
          <dd>
            <Svg.Company /> {company}
          </dd>
          <dd>
            <Svg.Location /> {location}
          </dd>
          <dd>
            <Svg.Blog />
            <a className="blog" href={blog}>
              {blog}
            </a>
          </dd>
        </dl>
      </main>
      <footer>
        <FootBar />
      </footer>
    </>
  )
}
