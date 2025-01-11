import { useQuery } from "@tanstack/react-query"
import { fetchProductById } from "../services/productsAPI"


export const useProduct = ({id, isEnabled}) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id),
        enabled: false,
        ...isEnabled
    })
}