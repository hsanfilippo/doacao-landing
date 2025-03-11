const items = [
  {
    id: 1,
    name: "Notebook Dell",
    description: "Notebook Dell i7, 16GB RAM, 512GB SSD.",
    image: "https://placehold.co/200",
  },
  {
    id: 2,
    name: "Monitor LG",
    description: "Monitor LG 24'' Full HD.",
    image: "https://placehold.co/200",
  },
  {
    id: 3,
    name: "Cadeira Gamer",
    description: "Cadeira gamer ergonômica, cor preta e vermelha.",
    image: "https://placehold.co/200",
  },
  {
    id: 4,
    name: "Fone de Ouvido JBL",
    description: "Fone Bluetooth JBL com cancelamento de ruído.",
    image: "https://placehold.co/200",
  },
]

const CardItem = () => {
    return (
        <div className="container mt-7 pt-7 text-light bg-dark min-vh-100 p-4">
            <h1 className="text-center mb-7 mt-7">Doação</h1>
            <div className="p-5">
                <div className="row">
                    {items.map((item) => (
                        <div key={item.id} className="col-12 col-md-6 mb-4">
                            <div className="card bg-secondary text-light shadow-sm">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <button className="btn btn-purple w-100">Saiba mais</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardItem