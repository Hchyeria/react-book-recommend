import { BASE_URL } from './request'
import { Base64 } from 'js-base64'
import appState from '../stores/appState'


const generateId = () => {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

const actionsSet = new Set(['pv-5', 'pv', 'want', 'cart', 'buy', 'click', 'review'])

const key = 'userBehavior'

const actionProxy = function () {
  let actionData = []
  let count = 0
	const setAction = (index, val) => {
    let data = localStorage.getItem(key) || '[]'
    if (data) {
      data = JSON.parse(data)
      const type = val.action
      if (actionsSet.has(type)) {
        val.uuid = generateId()
        val.userId = appState.user.userId
        data[index] = val
        count++
      }

    } else {
      data = []
    }
    
    localStorage.setItem(key, JSON.stringify(data))
  }

	return new Proxy(actionData, {
		set: (obj, prop, val) => {
      setAction(prop, val)
      Reflect.set(obj, prop, val)
      if (count == 3) {
        fetchBatch()
        localStorage.setItem(key, '[]')
        obj.length = 0
        count = 0
      }
      return true
    }

	})
}

const fetchBatch = () => {
  const data = localStorage.getItem(key)
	let base64 = Base64.encode(data + Date.now())
	fetch(`${BASE_URL}/streaming.gif?${base64}`, {
		method: 'HEAD',
		mode: 'no-cors',
	})
}

export default new actionProxy()