import React from 'react'
import { Svg, RoutesBar, Label } from '../../components'
import { Link } from '@saber2pr/router'
import { useStore } from '../../store'
import { useUserInfor } from '../../hooks'
import './style.less'

export const Profile = () => {
  const [{ userId }] = useStore()

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
        <Link className="right" to="/menu">
          <Svg.Menu />
        </Link>
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
            <Link to="/followers">Followers</Link>
            <Label>{followers}</Label>
          </dd>
          <dd>
            <Link to="/following">Following</Link>
            <Label>{following}</Label>
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
