const axios = require('axios')

module.exports = {
  async users(_, { since }) {
    const url = `https://api.github.com/users?since=${since}`
    return axios.get(url).then(res => res.data)
  },

  async usersDetails(_, { user }) {
    const url = `https://api.github.com/users/${user}`
    return axios.get(url).then(res => res.data)
  },

  async usersRepos(_, { user }) {
    const url = `https://api.github.com/users/${user}/repos`
    return axios.get(url).then(res => res.data)
  }
}