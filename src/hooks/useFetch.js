import { useEffect, useState } from "react"


const useFetch = (url) => {
    // state
    const[data, setdata]=useState(null)
    // logic
    useEffect(() => {
        fetch(url).then(res => {
            res.json().then(result => {
               setdata(result.products)
            })
        })
    }, [])
    return data
}
export default useFetch