import Link from "next/link";
import "./style/Sucesso.css"
import complete from "../../../public/assets/sucesso/complete.png"


const Sucesso = () =>{
    return(
        <>
        <section className="secao-sucesso">
            <div className="organizacao-secaoSucesso">
            <div className="organizacao-complete">
                <h1 className="titulo-sucesso">Enviado com sucesso</h1>
                <img className="complete-sucesso" src={complete.src}/>
            </div>
            <div className="organizacao-TextoComplete">
                <p className="texto-sucesso">Seu formulário foi enviado para o setor responsável! Logo receberá o retorno.</p>
            </div>
            <Link href='/TrailFinder'><p className="retorno-sucesso">Retornar ao Trail Finder</p></Link>
            </div>
        </section>
        </>
    )
}

export default Sucesso;