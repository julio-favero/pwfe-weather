import './Topo.css'

function Topo(props) {
	return (
            <header>
                    <div>
                        <h2>Previsão do Tempo</h2>
                    </div>
                    <div className="pesquisa">
                        <input
                            type="text"
                            placeholder="Buscar"
                        />
                        <span>&#x1F50E;&#xFE0E;</span>
                        {/* <img src='/images/search.png' height="40px" alt="Instagram icons created by pictranoosa - Flaticon" /> */}
                    </div>
            </header>

	);
}
export default Topo;


