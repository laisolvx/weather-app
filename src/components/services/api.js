const KEY = "af0e4be0263349e392a140006232203";

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no
`
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    return data;
};

export default fetchData;