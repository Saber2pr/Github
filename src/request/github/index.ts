import axios from 'axios'
import { GitHubAPI } from './url'
import {
  User,
  Repositories,
  Events,
  Search,
  Users,
  Repository
} from '@saber2pr/types-github-api'

export const getUserInfor = async (userId: string) =>
  await getPage<User>(`${GitHubAPI.users}/${userId}`)

export const getUserReposPage = async (
  userId: string,
  page: number = 1,
  per_page: number = 10
) =>
  await getPage<Repositories>(
    `${GitHubAPI.users}/${userId}/repos`,
    page,
    per_page
  )

export const getUserEvents = async (
  userId: string,
  page: number = 1,
  per_page: number = 10
) =>
  await getPage<Events>(`${GitHubAPI.users}/${userId}/events`, page, per_page)

export const searchRepos = async (
  q: string,
  page: number = 1,
  per_page: number = 10
) =>
  await getPage<Search<Repository>>(
    `${GitHubAPI.search}/repositories`,
    page,
    per_page,
    {
      q
    }
  )

export const getUserFollowersPage = async (
  userId: string,
  page: number = 1,
  per_page: number = 10
) =>
  await getPage<Users>(`${GitHubAPI.users}/${userId}/followers`, page, per_page)

export const getUserFollowingPage = async (
  userId: string,
  page: number = 1,
  per_page: number = 10
) =>
  await getPage<Users>(`${GitHubAPI.users}/${userId}/following`, page, per_page)

export const getUserStarred = async (
  userId: string,
  page: number = 1,
  per_page: number = 10
) =>
  await getPage<Repositories>(
    `${GitHubAPI.users}/${userId}/starred`,
    page,
    per_page
  )

export async function getPage<T>(
  url: string,
  page: number = 1,
  per_page: number = 10,
  extraParams: Object = {}
) {
  const result = await axios.get<T>(url, {
    params: {
      page,
      per_page,
      ...extraParams
    }
  })

  return result.data
}
