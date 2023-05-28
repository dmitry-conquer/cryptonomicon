const API_KEY = "38670903ca116672f3a5f494df8cdefefe2503b4ef3399e63c9e13ba1069bc87";

export const getExchangeData = async tickers => {
  const params = new URLSearchParams({
    fsyms: tickers.join(","),
    tsyms: "USD",
    api_key: API_KEY,
  });
  const url = `https://min-api.cryptocompare.com/data/pricemulti?${params}`;

  const res = await fetch(url);
  const rawData = await res.json();
  return Object.fromEntries(Object.entries(rawData).map(([key, value]) => [key, value.USD])) ;
};
