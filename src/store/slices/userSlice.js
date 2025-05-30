const {createSlice} = require('@reduxjs/toolkit')


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state, action) => {
            state.user = null
        }
    }
})

module.exports = userSlice.reducer
module.exports.userActions = userSlice.actions;