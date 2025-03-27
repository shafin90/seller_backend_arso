async function createStore(data) {
    const {
        name,
        logo,
        banner,
        address,
        description,
        category,
        workingHours
    } = data;

    try {
        return await prisma.seller.create({
            data: {
                name,
                logo,
                banner,
                address,
                description,
                category,
                workingHours
            }
        });
    } catch (error) {
        console.error("Error creating store:", error);
        throw error;
    }
}

async function uploadProduct(data) {
    const {
        name,
        description,
        price,
        stock,
        storeId,
        category,
        brand,
        warranty,
        sku,
        details
    } = data;

    try {
        return await prisma.product.create({
            data: {
                name,
                description,
                price,
                stock,
                storeId,
                category,
                brand,
                warranty,
                sku,
                details
            }
        });
    } catch (error) {
        console.error("Error uploading product:", error);
        throw error;
    }
}   

module.exports = { createStore ,uploadProduct};