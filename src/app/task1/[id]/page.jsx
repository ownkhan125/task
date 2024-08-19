import product from "@/services/product"


const page = async ({ params }) => {
    let getdata = product();
    let user = await getdata;
    let id = params.id;
    let userinfo = user[id - 1];

    return (
        <>
            <div className="container-1">
                <div className="card">
                    <h5>id: {userinfo.id}</h5>
                    <h5>price: {userinfo.price}</h5>
                    <h3>title: {userinfo.title}</h3>
                    <p>{userinfo.rating.count}</p>
                </div>
            </div>
        </>
    )
}

export default page;

export const generateStaticParams = async () => {
    const data = product();
    const user = await data;

    return user.map(user => ({
        id: user.id.toString()
    }))
}