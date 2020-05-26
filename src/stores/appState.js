import { observable, action } from 'mobx'
import { success } from '../utils/Message'

export class AppState {
	@observable isLogin = !!localStorage.getItem('token')
	@observable isLoading = true

	@observable
	user = {
		userId: 1,
		userName: 'test',
		age: 20,
		gender: true,
		introduction: '',
	}

	@action
	login = () => {
		this.isLogin = true
	}

	@action
	logout = () => {
		localStorage.clear()
		this.isLogin = false
		success('Logout Successfully!')
	}

	@action
	setUser = (user) => {
		this.user = user
	}

	@action
	setLoading = (value) => {
		this.isLoading = value
		console.log(this.isLoading)
	}
}

export default new AppState()
