// REDUX
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom';

export default function SecondPage() {

    const count = useSelector(state => state.counter.value) // accessing the value of named counter in the store
    const user = useSelector(state => state.user);


    const dispatch = useDispatch();


    return (
        <div>
            <h3>count {count}</h3>
            <h3>
                firstname : {user.fname}
            </h3>
            <h3>
                lastname : {user.lname}
            </h3>
            <h3>
                age : {user.age}
            </h3>
            <Link
            to={'/'}
            >
                Go Back
            </Link>
        </div>
    )
}
