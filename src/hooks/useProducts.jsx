import {useQuery} from "@tanstack/react-query";
import {getFetchProducts} from "../api/products";

export default function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: getFetchProducts,
    });
}