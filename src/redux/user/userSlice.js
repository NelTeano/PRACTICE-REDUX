import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user', // namespace like for user.name and so on act as variable name
    initialState: {fname: '', lname: '', age: 1, }, // initial state value ( the default value )
    
    // state functions use to setState what update will happen ( state actions on changing values)
    reducers: {
        setFname: (state, action) =>{  
            // state ( the current state ) 
            // action ( has two prop "type" and "payload") type is the setFname fnction 
            // simply doesnt need to use in this structure
            // because it already has identifier but if it doesnt you can use :
            // export const setFname = (fname) => ({
            //     type: INCREMENT,
            //     payload: fname
            // });
            // for non parameter just use usual arrow fucntion like : const increaseAge = () => { type: increaseAge }
            // more sample structure in using type is in below
            state.fname = action.payload 
        },
        setLname: (state, action) =>{ 
            state.lname = action.payload 
        },
        setAge: (state, action) =>{ 
            state.age = action.payload 
        },
        increaseAge: state => {  
            state.age += 1  
        }    
    },
})

// export the functiions to access it for "components"
export const { setFname, setLname, setAge, increaseAge } = userSlice.actions;

// exporting the whole reducer for store as like a module
export default userSlice.reducer











// SAMPLE UUSING A ACTION TYPE STRCURE 
// NOTE: THIS TYPE DOESNT NEED NAME ONLY APPLICALBE THE NAME IN CREATESLICE FUNCTION 


// ACTION TYPES
// export const INCREASE_AGE = 'user/INCREASE_AGE';
// export const SET_FNAME = 'user/SET_FNAME';
// export const SET_LNAME = 'user/SET_LNAME';
// export const SET_AGE = 'user/SET_AGE';

// ACTION CREATORS

// export const increaseAge = () => ({
//     type: INCREASE_AGE,
// });

// export const setFname = (fname) => ({
//     type: SET_FNAME,
//     payload: fname,
// });

// export const setLname = (lname) => ({
//     type: SET_LNAME,
//     payload: lname,
// });

// export const setAge = (age) => ({
//     type: SET_AGE,
//     payload: age,
// });



// INITIAL STATE

// const initialState = {
//     fname: '',
//     lname: '',
//     age: 1,
// };




// REDUCERS

// const userSlice = (state = initialState, action) => {
//     switch (action.type) {
//         case 'user/age':
//             return {
//                 ...state,
//                 age: state.age + 1,
//             };
//         case SET_FNAME:
//             return {
//                 ...state,
//                 fname: action.payload,
//             };
//         case SET_LNAME:
//             return {
//                 ...state,
//                 lname: action.payload,
//             };
//         case SET_AGE:
//             return {
//                 ...state,
//                 age: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default userSlice;