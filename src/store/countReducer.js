const initialState = {
    count:0
  }

const INC = "INC";
const DEC = "DEC";
export const countReduser = (state = initialState, action) =>{
    switch(action.type) {
      case INC:
        return {...state, count:state.count+1};
      case DEC:
        return {...state, count: state.count-1};
      default :
        return state
    }
}

export const incCountAction = (payload) => ({type:INC, payload})
export const decCountAction = (payload) => ({type:DEC, payload})
