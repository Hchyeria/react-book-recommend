import {observable, action}  from "mobx"

export class Rate {
    @observable
	list = {}
    
    @action
    setList = (list) => {
		this.list = list
	}
}
export default new Rate()