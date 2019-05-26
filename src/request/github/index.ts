import axios from 'axios'
import { GitHubAPI } from './url'
import {
  User,
  Repositories,
  Events,
  Search,
  Repository,
  Users
} from '@saber2pr/types-github-api'

export async function getUserInfor(userId: string) {
  const userInfor = await axios.get<User>(GitHubAPI.users + userId)
  return userInfor.data
}

export async function getUserReposPage(
  userId: string,
  page: number = 1,
  perPage: number = 10
) {
  const repos = await axios.get<Repositories>(
    GitHubAPI.users + userId + `/repos?page=${page}&per_page=${perPage}`
  )
  return repos.data
}

export async function getUserEvents(userId: string) {
  const events = await axios.get<Events>(GitHubAPI.users + userId + '/events')
  return events.data
}

export async function searchRepos(
  repoName: string,
  page: number = 1,
  perPage: number = 10
) {
  const result = await axios.get<Search<Repository>>(
    GitHubAPI.search +
      `repositories?q=${repoName}&page=${page}&per_page=${perPage}`
  )
  return result.data
}

export async function getUserFollowersPage(
  userId: string,
  page: number = 1,
  perPage: number = 10
) {
  const followers = await axios.get<Users>(
    GitHubAPI.users + userId + `/followers?page=${page}&per_page=${perPage}`
  )
  return followers.data
}

export async function getUserFollowingPage(
  userId: string,
  page: number = 1,
  perPage: number = 10
) {
  const following = await axios.get<Users>(
    GitHubAPI.users + userId + `/following?page=${page}&per_page=${perPage}`
  )
  return following.data
}

export async function getUserStarred(userId: string) {
  const starred = await axios.get<Repositories>(
    GitHubAPI.users + userId + '/starred'
  )
  return starred.data
}
