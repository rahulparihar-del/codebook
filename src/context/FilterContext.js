import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducer/filterReducer";

const filterInitialState = {
    productList : [],
    onlyInStock : false,
    bestSellerOnly : false,
    sortBy : null,
    ratings : null
}


const FilterContext = createContext(filterInitialState);
export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function inititalProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products : products
            }
        });
    }

    function bestSeller(products){
        return state.bestSellerOnly ? products.filter((product)=> product.best_seller === true) : products;
    }

    function inStock(products){
        return state.onlyInStock ? products.filter((product)=> product.in_stock === true) : products;
    }

    function sort(products){
        if(state.sortBy === "price-low-to-high"){
            return products.sort((a,b)=> Number(a.price) - Number(b.price));
        }

        if(state.sortBy === "price-high-to-low"){
            return products.sort((a,b)=> Number(b.price) - Number(a.price));
        }

        return products;
    }

    function ratings(products){
        if(state.ratings === "4STARTSABOVE"){
            return products.filter(product => product.rating >= 4);
        }

        if(state.ratings === "3STARTSABOVE"){
            return products.filter(product => product.rating >= 3);
        }

        if(state.ratings === "2STARTSABOVE"){
            return products.filter(product => product.rating >= 2);
        }

        if(state.ratings === "1STARTSABOVE"){
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }

    const filteredProductList = ratings(sort(inStock(bestSeller(state.productList))));

    const value = {
        state,
        dispatch,
        productList : filteredProductList,
        inititalProductList,
       
        
    };
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
   const context =  useContext(FilterContext);
   return context;
}