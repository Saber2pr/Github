import axios from 'axios'
import { GitHubAPI } from './url'
import { User, Repositorys } from '@saber2pr/types-github-api'

export async function getUserInfor(userId: string) {
  const userInfor = await axios.get<User>(GitHubAPI.users + userId)
  return userInfor.data
}

export async function getUserRepos(userId: string){
  const repos = await axios.get<Repositorys>(GitHubAPI.users + userId + '/repos')
  return repos.data
}