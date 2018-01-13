import getPosition from '../../modules/getPosition'
const actions = {
	getPosition({commit}){
		getPosition((city)=>{
			commit('getPosition',city)
		})
	},
    addGood({commit},params){
       setTimeout(() => {
            let result = 'ok'   
            if(result=='ok'){
                commit('addGood',params)
            }
       }, 300);
    },
    initCar({commit}){
        setTimeout(() => {
           let results = JSON.parse(localStorage.car||'[]')
           commit('initCar',results)
        }, 300);
    },
    reduceGood({commit},params){
        setTimeout(() => {
            let result = 'ok'   
            if(result=='ok'){
                commit('reduceGood',params)
            }
        }, 300);
    },
    removeGood({commit},id){
        setTimeout(() => {
            let result = 'ok'   
            if(result=='ok'){
                commit('removeGood',id)
            }
        }, 300);
    },
    seleteGood({commit},val){
        setTimeout(() => {
            let result = 'ok'   
            if(result=='ok'){
                commit('seleteGood',val)
            }
        }, 300);
    }
}
 
export default actions