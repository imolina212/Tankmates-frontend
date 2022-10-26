function getCategories(products) {
    
    let distinctCategories = [];

    for (const product of products){
        if(!distinctCategories.includes(product.category)){
            distinctCategories.push(product.category)
        }
    }
    return distinctCategories;
}

export default getCategories;