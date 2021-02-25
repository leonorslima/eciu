const initialState = {

    users: {
        login: false,
        email: null,
        id: '',
        destinyuniversity: '',
        homeuniversity: '',
        categories: [],
        roleid: '',
    }

}



const rootReducer = (state = initialState, action) => {

    if (action.type === 'SIGN_IN') {

        return {
            ...state,
            users: {
                ...state.users,
                login: true,
                email: action.email,
                id: action.user.id,
                destinyuniversity: action.destinyuniversity,
                homeuniversity: action.homeuniversity,
                roleid: action.roleid,

            }
        }
    }


    return state;
}

export default rootReducer()