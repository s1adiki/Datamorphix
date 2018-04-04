
export const botReducer = (state=[], action) => {
    switch(action.type){
        case 'requestCall':
            return [
                ...state,
                {   id:action.id,
                    send:action.send,
                    result:action.result,
                    timestamp:action.timestamp,
                    action:action.action,
                    actionChange:action.actionChange,
                    parameters:action.parameters
                }

            ];

        default:
            return state;
    }
};