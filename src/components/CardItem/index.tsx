const items = [
  {
    id: 1,
    name: "TV 40 Polegadas",
    description: "Em bom estado, nenhum defeito na imagem",
    image: "https://static-file-vault.vercel.app/fotos-doacao/tv.jpeg",
    price: "JPY 10.000",
    venda: true,
  },
  {
    id: 2,
    name: "Mesa em L",
    description: "Mesa em L separável em 2 mesas comuns.",
    image: "https://static-file-vault.vercel.app/fotos-doacao/mesas_pc.jpeg",
    price: "Doação",
    venda: false,
  },
  {
    id: 3,
    name: "Mesa de centro",
    description: "Mesa de centro com espaço para armazenamento interno",
    image: "https://static-file-vault.vercel.app/fotos-doacao/mesa_centro.jpeg",
    price: "JPY 3.000",
    venda: true,
  },
  {
    id: 4,
    name: "Halteres (10kg cada)",
    description: "Halteres modulares para musculação.",
    image: "https://static-file-vault.vercel.app/fotos-doacao/halteres.jpeg",
    price: "Doação",
    venda: false,
  },
  {
    id: 5,
    name: "Fogão elétrico",
    description: "Fogão de indução 2 bocas, até 1400w ou 700w nas duas juntas.",
    image: "https://static-file-vault.vercel.app/fotos-doacao/fogao.jpeg",
    price: "JPY 3.500",
    venda: true,
  },
  {
    id: 6,
    name: "Espelho de mesa",
    description: "Espelho de mesa oval.",
    image: "https://static-file-vault.vercel.app/fotos-doacao/espelho.jpeg",
    price: "Doação",
    venda: false,
  },
  {
    id: 7,
    name: "Cadeira de escritório",
    description: "Cadeira de escritório com apoio para os braços.",
    image: "https://static-file-vault.vercel.app/fotos-doacao/cadeira.jpeg",
    price: "Doação",
    venda: false,
  },
  {
    id: 8,
    name: "Armário de cozinha",
    description: "Armário com 2 tomadas escondidas",
    image: "https://static-file-vault.vercel.app/fotos-doacao/armario.jpeg",
    price: "Doação",
    venda: false,
  },
  {
    id: 9,
    name: "Forno com microondas",
    description: "Forno, microondas e grill. Em bom estado, funcionando normal.",
    image: "https://static-file-vault.vercel.app/fotos-doacao/forno.jpeg",
    price: "JPY 7.000",
    venda: true,
  },
]

const phoneNumber = "8109063813550"

const CardItem = () => {
    return (
        <div className="container mt-7 pt-7 text-light bg-dark min-vh-100 p-4">
            <h1 className="text-center mb-7 mt-7">Venda e Doação</h1>
            <div className="p-1">
                <div className="row">
                    {items.map((item) => (
                        <div key={item.id} className="col-12 col-md-6 mb-4">
                            <div className="card bg-secondary text-light shadow-sm">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className={item.venda ? "card-text text-center fs-4 fw-bold bg-success p-2" : "card-text text-center fs-4 fw-bold bg-primary p-2"}>{item.price}</p>
                                    <a 
                                    href={`https://wa.me/${phoneNumber}?text=Olá, tenho interesse no item "${item.name}"`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-purple w-100"
                                    >
                                        Tenho interesse
                                    </a>
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