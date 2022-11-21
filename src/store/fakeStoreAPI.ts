import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProductItem} from "../interfaces";


// Yes, you need to declare the generic arguments of your builder.query() call - they should be builder.query<ReturnValueHere, ArgumentTypeHere>. If there is no argument, use void:
// https://github.com/reduxjs/redux-toolkit/issues/1676

export const fakeStoreAPI = createApi({
    reducerPath: 'fakeStoreAPI',
    tagTypes: ['Items'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: (build) => ({
        fetchItems: build.query<IProductItem[], void>({
            query: () => `products`
        }),
        fetchSingleItem: build.query<IProductItem, number>({
            query: (id: number) => `products/${id}`
        })
    })
});

export const {useFetchItemsQuery, useFetchSingleItemQuery} = fakeStoreAPI;
