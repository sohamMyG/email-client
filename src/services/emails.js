import axios from "axios";

const baseUrl = 'https://flipkart-email-mock.vercel.app/'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const service = {getAll}
export default service