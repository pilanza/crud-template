import { useDebounce } from "@/hooks/debounce";
import { queryType } from "@/types/query";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export const SearchBar = ({fetchData}: queryType) => {
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query)

    useEffect(() => {
        fetchData(0, query)
    }, [debouncedQuery])
    
    return (
        <div className="flex px-3 py-2 rounded-full border-2 overflow-hidden max-w-md">
            <input 
                type="text" 
                placeholder="Search..." 
                className="w-full outline-none bg-transparent pl-1"
                onChange={(e) => {setQuery(e.target.value)}}
            />
            <IoSearch className="size-5 mt-1/2 mx-2 hover:cursor-pointer"/>
        </div>
    )
}