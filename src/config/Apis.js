import axios from "axios"
export const test = async() => {
    const url = "http://127.0.0.1:8000/categories/"

    return await axios.get(url,
    {
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        }
    })

}

