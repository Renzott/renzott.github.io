import { useEffect, useState } from "react";

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            ).then((res) => res.json());

            console.log(result);
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {data.map((user: any) => (
                    <li key={user.id}>
                        {user.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Table;