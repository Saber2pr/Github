import React from 'react'
import { Svg, RoutesBar, CountLabel } from '../../components'
import { Anchor } from '@saber2pr/router'
import { store } from '../../store'
import { useUserInfor } from '../../hooks'
import './style.less'

export const Profile = () => {
  const userId = store.getState().userId

  const {
    login,
    name,
    company,
    blog,
    location,
    bio,
    avatar_url,
    followers,
    following,
    created_at,
    updated_at
  } = useUserInfor(userId)

  return (
    <>
      <header>
        <span className="title">Profile</span>
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

          <dd>
            <Anchor href="/followers">Followers</Anchor>
            <CountLabel count={String(followers)} />
          </dd>
          <dd>
            <Anchor href="/following">Following</Anchor>
            <CountLabel count={String(following)} />
          </dd>

          <dd>注册时间{new Date(created_at).toLocaleString()}</dd>
          <dd>最近登录{new Date(updated_at).toLocaleString()}</dd>
        </dl>
      </main>
      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
