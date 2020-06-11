import axios from 'axios'

const annual_base_url = `/fakeApi/ithil_j/activity/movie_annual2018`

export const apiBook = axios.create({
  baseURL: annual_base_url,
  // headers: {}
})
