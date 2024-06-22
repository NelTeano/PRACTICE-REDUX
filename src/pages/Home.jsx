import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

// REDUX
import { useSelector, useDispatch } from 'react-redux'

// REDUCERS ( GET FNCTIONS STATE UPDATES  )
import { increment, incrementByAmount, decrement} from '../redux/counter/counterSlice';
import { setFname, setLname, setAge, increaseAge } from '../redux/user/userSlice'
import { Link } from 'react-router-dom';


function App() {

    const [userHandle, setUserHandle] = useState('')

    const count = useSelector(state => state.counter.value) // accessing the value of named counter in the store
    const user = useSelector(state => state.user);


    const dispatch = useDispatch()
    
    console.log("input value : ", userHandle)

return (
    <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => dispatch(increment())}>
                count increase
            </button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                count increaseByAmount
            </button>
            <button onClick={() => dispatch(decrement())}>
                count decrease
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        <h3>
            count {count}
        </h3>

        <div>
            <p>VALUE SETS THE USER</p>
            <input 
                value={userHandle}
                onChange={(e)=> {setUserHandle(e.target.value)}} 
                type="text" 
            />
            <button
                onClick={() => {dispatch(setFname(userHandle))}}
            >
                SetFname
            </button>
            <button
                onClick={() => {dispatch(setLname(userHandle))}}
            >
                SetLname
            </button>
            <button
                onClick={() => {dispatch(setAge(Number(userHandle)))}}
            >
                SetAge
            </button>
            <button
                onClick={() => {dispatch(increaseAge())}}
            >
                IncreaseAge
            </button>
            <h3>
                first name : {user.fname}
            </h3>
            <h3>
                last name : {user.lname}
            </h3>
            <h3>
                age : {user.age}
            </h3>
        </div>
        <Link
            to={'/SecondPage'}
        >
            Go to Second Page ( to see if the value is global )
        </Link>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>
    )
}

export default App
