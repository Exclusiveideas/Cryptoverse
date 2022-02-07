import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key':'37a02fdb29mshf1d79efa7ce95ebp1aac32jsnbb5e86fe18bb' //process.env.REACT_APP_API_KEY_COIN_LIST
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`./coins?limit=${count}`)
        }), 
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
          }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`./coin/${coinId}`)
        })
    })
});

export const {
  useGetCryptosQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoDetailsQuery,
} = cryptoApi;