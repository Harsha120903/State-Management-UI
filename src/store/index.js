import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter';
import privacySlice from './privacy';

const counterStore=configureStore({
  reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer
  }
});
export default counterStore;
    // const INITIAL_VALUE={
      //   counter:0,
    //   privacy:false
    // }
      // const counterReducer=(store=INITIAL_VALUE,action)=>{
      //   if(action.type==='INCREMENT'){
      //     return {...store,counter:store.counter+1};
      //   }
      //   else if(action.type==='DECREMENT'){
      //    return {counter:store.counter-1,privacy:store.privacy};
      //  }
      //   else if(action.type==='ADD'){
        //    return {counter:store.counter+Number(action.payload.num),privacy:store.privacy};
      //  }
      //   else if(action.type==='SUBSTRACT'){
      //    return {counter:store.counter-Number(action.payload.num),privacy:store.privacy};
      //  }
      //   else if(action.type==='PRIVACY_TOGGLE'){
        //    return {counter:store.counter,privacy:!store.privacy};
      //  }
      //   return store;
      // } 