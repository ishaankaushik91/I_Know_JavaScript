import axios from "axios";

function ping()
{
    return axios.get("http://ishaankaushik.com:5000");
}

async function call()
{
    try {
        
        let res = await ping();
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
}
call();