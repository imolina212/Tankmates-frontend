function getCategories(products) {
    
    let distinctCategories = new Set();

    for (const product of products){
        if(!distinctCategories.has(product.category)){
            distinctCategories.add(product.category)
        }
    }
    return [...distinctCategories];
}

export default getCategories;