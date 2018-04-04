export const chatOpenReducer = (state = {chatOpen: false}, action)=>{
    switch(action.type){
        case 'openChatArea':
            return Object.assign({}, state, {chatOpen:true});
        case 'closeChatArea':
            return Object.assign({}, state, {chatOpen:false});
        default:
            return state;
    }
};