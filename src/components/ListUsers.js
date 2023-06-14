import { useSelector } from "react-redux";

const ListUsers = () => {
    const { users, isLoading, error } = useSelector((store) => store.users)
    return (
        <>
        {isLoading ? (
            <div>loading...</div>
            ) : (
                <ul>
                    {users.map((user) => {
                        <User key={user.id} user={user}></User>
                    })}
                </ul>
            )
        }
        </>
    )
}