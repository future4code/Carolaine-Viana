import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Titulo do Video"
  const views = '5.7 mi de visualizações'
  const date = 'há 1 semana'

function reproduzVideo(){
    alert("O video está sendo reproduzido!")
}
  return (
    <div className="App">
       <div className="tela-inteira">
        <header>
            <div className="logo">
            <img src="https://img.icons8.com/plasticine/100/000000/youtube-squared.png"/>
            </div>
            <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <img src="https://img.icons8.com/plasticine/100/000000/search-more.png" id="teste"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
                <div className="box-pagina-principal media3" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
                <div className="box-pagina-principal media4" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
                <div className="box-pagina-principal media5" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
                <div className="box-pagina-principal media6" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
                <div className="box-pagina-principal media7" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
                <div className="box-pagina-principal media8" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}<br></br>{views}<br></br>{date}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>YOUTUBE CORP - ALL RIGHTS RESERVED</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
