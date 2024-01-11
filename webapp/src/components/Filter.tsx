import { useEffect, useState, type ChangeEvent } from "react";

const Filter = () => {
    const [searchValue, setSearchValue] = useState("");
    const searchParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        const initialSearch = searchParams.get("search") || "";
        setSearchValue(initialSearch);
    }, []);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        setSearchValue(search);
        searchParams.set("search", search);
        window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
    }

    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch} value={searchValue} />
        </div>
    );
}

export default Filter;