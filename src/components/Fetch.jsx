import product from "@/services/product"




const Fetch = async () => {
    let data = product();
    let user = await data;


    return (
        <>
            {
                user.map((get) => (
                    <div className="card">
                        <p>{get.title}</p>
                    </div>
                ))
            }

        </>
    )
}

export default Fetch