import Link from "next/link";
import "./CSS/sucesso.css"
import imagens from "./navbar-sucesso.json"
import fotoSucesso from "./../../../public/assets/sucesso/complete.png"

interface dados{
    id: number;
    src: string;
    text: string;
    href: string;
}
const sucesso = () =>{
    return(
        <>
            <section className="OrgTotal_sucesso">
                    <div className="Org-sucesso">
                        <div className="edicao-sucesso">
                            <h2 className="texto-sucesso">Informações enviadas com sucesso</h2>
                            <img className="bolinhaSucesso" src={ fotoSucesso.src }/>
                            </div>
                            <h4 className="textodois-sucesso">Retornaremos com a resposta em breve</h4>
                            <h3 className="textodois-sucesso">Enquanto aguarda o retorno, confira as opções recomendadas para suas características:</h3>
                            <br></br>
                        <div className="org-opcoesSucesso">
                            <div className="layout-sucesso" >
                            {imagens.map ((item2 : dados) =>(
                                    
                                <div className="imagens-sucesso">
                                    <div className="layout">
                                        <a className="layout-imagem-sucesso" href={item2.href} target="_blank"><img className="formatacao-imagem-sucesso" src={item2.src} /></a>
                                        <ul className="texto-imagem-paginaInicial">
                                            <li className="texto-imagem">{item2.text}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
export default sucesso;