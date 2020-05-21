import { observable, action } from 'mobx'
import { success } from '../utils/Message'

export class AppState {
	@observable isLogin = !!localStorage.getItem('token')
	@observable isLoading = false

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
}

export default new AppState()
