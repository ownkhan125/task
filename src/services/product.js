
const product = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products');

        return await response.json();
    } catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });
        return [];  // Return an empty array or handle error accordingly
    }
}

export default product;
