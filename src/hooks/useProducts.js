import { useQuery } from "@tanstack/react-query"

//fetch api function 
import { fetchProducts } from "../services/productsAPI"

export const useProducts = () => {

    return useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProducts(),
        retry: 3,
    })
}