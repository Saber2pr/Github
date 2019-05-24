import React, { useState, useEffect } from 'react'
import { Request } from '../../request'
import { User } from '@saber2pr/types-github-api'
import { Svg, RoutesBar } from '../../components'
import { Anchor } from '@saber2pr/router'
import { store } from '../../store/store'
import './profile.less'

const useUserId = (userId = 'saber2pr') => {
  const [userInfor, setUserInfor] = useState<User>({} as User)
  useEffect(() => {
    Request.Github.getUserInfor(userId).then(setUserInfor)
  }, [userId])
  return userInfor
}

export const Profile = () => {
  const { login, name, company, blog, location, bio, avatar_url } = useUserId(
    store.getState().userId
  )
  return (
    <>
      <header>
        Profile
        <Anchor className="right" href="/menu">
          <Svg.Menu />
        </Anchor>
      </header>
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
        <RoutesBar />
      </footer>
    </>
  )
}
