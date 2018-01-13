
const mutations = {
	changeTitle(state,title){
    	state.global_title = title
   },
	//定位
	getPosition(state,city){
		state.city = city
	},
    initCar(state,car){
        state.car = car

    },
    addGood(state,{id,title,price}){
        let isHas = state.car.some(item=>{
            if(item.id==id){ 
                item.num++
                return true;
            }else{return false;}
        })
        if(!isHas){
            state.car.push({id,title,price,num:1,isSelected:true})
        }
        //为了与数据库里的car对应
        localStorage.car = JSON.stringify(state.car)
    },
    reduceGood(state,{id}){
        let len = state.car.length
        for (let i = 0; i < len; i++) {
            if(state.car[i].id==id){
                state.car[i].num--
                if(state.car[i].num==0){
                    state.car.splice(i,1)
                }
                break;
            }
        }
        localStorage.car = JSON.stringify(state.car)
    },
    removeGood(state,id){
        let len = state.car.length
        for (let i = 0; i < len; i++) {
            if(state.car[i].id==id){
               state.car.splice(i,1)
                break;
            }
        }
        localStorage.car = JSON.stringify(state.car)
    },
    seleteGood(state,val){
        state.car.forEach(item=>item.isSelected = val)
    }
}

export default mutations