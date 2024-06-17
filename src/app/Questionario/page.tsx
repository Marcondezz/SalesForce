'use client'
import React from "react";
import "./css/style.css"
import imagem from "./imgs/Personagem Trail Finder.png"
import Link from "next/link"


const Questionario = () => {
    return(
        <>
            <section className="secao-questionario">
                <h1 className="titulo-questionario">Trail Finder</h1>
                <div className="organizacao-questionario-tablets">
                <div className="alinhamento-questionario">
                    <div className="edicao-texto-questionario">
                        <div className="edicao-explicacao">
                        <h2 className="texto-questionario">O Trail Finder é um questionário onde o usuário responderá perguntas que descrevem suas principais características, 
                        como por exemplo, o tamanho da empresa e o ramo de atuação. Vamos coletar esses dados e como resultado desse questionário 
                        mostrar cards com as melhores ferramentas e serviços, além de sugerir uma solução para o problema apresentado.</h2>
                        <h3 className="texto-questionario">Faça o teste agora mesmo!</h3>
                        </div>
                        <div className="edicao-botao-questionario">
                           <Link href= "/TrailFinder">
                            <button className="botao-questionario" ><b>Questionário</b>
                            </button></Link>
                        </div>
                    </div>
                </div>
                  <a className="organizacao-trailfinder"><img src={imagem.src} className="personagem-trailFinder" alt="personagem Trail Finder" /></a>
                </div>
            </section>
        </>
    )
}
export default Questionario;