const initialState = {
    data:[]
};

export default  function landingReducer(state = initialState, action) {
    switch(action.type){
        /*
        case "SOME_ACTION":
            return Object.assign(
                {},
                state,
                {stage: action.stageName}
            );
        */
        default:
            return state;
    }
}