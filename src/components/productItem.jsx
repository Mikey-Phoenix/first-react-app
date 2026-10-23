

export default function productItem({ item }) {
    return (
        <>
            <div className="absolute top-0 left-0 translate-1/2 h-[50vh] w-[30vw] bg-white shadow-md flex items-center rounded-xl">
                <div>
                    <img src={ `/assets/${item.source !== "" ? item.source : "photo1"}.jpg` } alt={item.name} width={'200px'} height={'200px'} />
                    <h2 className="text-2xl">{item.name}</h2>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
            </div>
        </>
    )
}