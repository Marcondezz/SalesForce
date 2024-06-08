import Link from "next/link";
import "./CSS/sucesso.css"
import imagens from "./navbar-sucesso.json"

interface dados{
    id: number;
    src: string;
    text: string;
}
const sucesso = () =>{
    return(
        <>
            <section className="OrgTotal_sucesso">
                    <div className="Org-sucesso">
                        <div className="edicao-sucesso">
                        <h2 className="texto-sucesso">Informações enviadas com sucesso</h2>
                        <h3 className="texto-questionario">Faça o teste agora mesmo!</h3>
                        </div>
                        <div>
                            <div className="layout-paginaInicial" >
                            {imagens.map ((item2 : dados) =>(
                                    
                                <div className="imagens-paginaInicial">
                                    <div className="layout">
                                        <a className="layout-imagem-paginaInicial"><img className="formatacao-imagem-paginaInicial" src={item2.src} /></a>
                                        <ul className="texto-imagem-paginaInicial">
                                            <Link href='/Personagens'><li className="texto-imagem">{item2.text}</li></Link>
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