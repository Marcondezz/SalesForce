'use client'
import React from "react";
import "./css/style.css";
import product_family from "./imgs/product-family.png";
import customer from "./../../../public/assets/PaginaInicial/imagem_PaginaInicial.png"
import gympass from "./../../../public/assets/PaginaInicial/gympass.png"
import sumup from "./../../../public/assets/PaginaInicial/sumup.png"
import vipal from "./../../../public/assets/PaginaInicial/vipal.png"
import tigre from "./../../../public/assets/PaginaInicial/tigre.png"
import dados1 from "./imgs-paginaInicial1.json"
import dados2 from "./imgs-paginaInicial2.json"
import Link from "next/link";

interface dados{
    id: number;
    src: string;
    text: string;
}
const Pagina_Inicial = () => {
    return(
        <>
            <section className="seção-paginaInicial">
                <div className="divOne-paginaIncial">
                    <h1 className="divOne-tituloPrincipal">Customer 360</h1>
                    <div className="organizacao-divOne">
                        <div className="divOne-OrganizacaoText">
                        <p className="divOne-textoPrincipal">A Saleforce é uma empresa de softwares que foca na solução de gerenciamento de relacionameto 
                                                            para aproximar empresas e pessoas.</p>
                        <p className="divOne-textoPrincipal">É uma platforma de CRM integrada que oferece a todos os departamentos uma visão 
                                                            única e compartilhada de cada cliente.</p>
                        </div>
                        <div className="divOne-OrgImagemCustomer">
                            <img className="divOne-imagemCustomer"src={customer.src}/>
                        </div>
                    </div>
                </div>
                <div className="divTwo-paginaIncial">
                    <div className="divTwo-organizacaoTituloPrincipal">
                        <h1 className="divTwo-tituloPrincipal">Algumas empresas que usam os nossos softwares</h1>
                    </div>
                </div>
                <div className="organizacao-parcerias">
                <div className="divTwo-organizacaoimagemGympass">
                    <Link href="https://wellhub.com/pt-br/" target="_blank"><img className="divTwo-imagemParcerias"src={gympass.src}/></Link>
                    <Link href="https://www.sumup.com/pt-br/" target="_blank"><img className="divTwo-imagemParcerias"src={sumup.src}/></Link>
                </div>
                <div className="divTwo-organizacaoimagemGympass">
                    <Link href="https://www.tigre.com.br/" target="_blank"><img className="divTwo-imagemParcerias"src={tigre.src}/></Link>
                    <Link href="https://vipal.com/" target="_blank"><img className="divTwo-imagemParcerias"src={vipal.src}/></Link>
                </div>
                </div>
                <div className="divTwo-organizacaoTituloPrincipal">
                    <h1 className="divTwo-tituloPrincipal">Personagens</h1>
                    <h3 className="divTwo-tituloPrincipal">e seus significados</h3>
                </div>
                <div className="layout-paginaInicial">
                        {dados1.map ((item1 : dados) =>(

                            <div className="imagens-paginaInicial">
                                <div className="teste">
                                    <a className="layout-imagem-paginaInicial"><img className="formatacao-imagem-paginaInicial" src={item1.src} /></a>
                                    <ul className="texto-imagem-paginaInicial">
                                        <Link href='/Personagens'><li className="texto-imagem">{item1.text}</li></Link>
                                    </ul>
                                </div>
                            </div> ))}
                </div>
                        <div className="layout-paginaInicial" >
                        {dados2.map ((item2 : dados) =>(
                                
                            <div className="imagens-paginaInicial">
                                <div className="teste">
                                    <a className="layout-imagem-paginaInicial"><img className="formatacao-imagem-paginaInicial" src={item2.src} /></a>
                                    <ul className="texto-imagem-paginaInicial">
                                        <Link href='/Personagens'><li className="texto-imagem">{item2.text}</li></Link>
                                    </ul>
                                </div>
                            </div>
                        ))}
                        </div>
            </section>
            <Link href='/Personagens'>
            <h1 className="significado-personagens">Veja o significado dos personagens</h1>
            </Link>
        </>
    )
}
export default Pagina_Inicial;
