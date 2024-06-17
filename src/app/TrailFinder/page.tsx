'use client'
import { useState } from "react";
import "./css/estilo.css";
import interrogacao from "./../../../public/assets/formulario/interrogacao.png"

const TrailFinder = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        cargo:'',
        tipoEmpresa: '',
        setor: '',
        dataContato: '',
        probabilidadeContratacao: 0.0
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormEdit = (event:any, name:any) => {
        setData({
            ...data,
            [name]: event.target.value
        })
    }

    const handleForm = async (event:any) => {
        try {
            event.preventDefault();

            // Verifica se todos os campos obrigatórios foram preenchidos
            const formIsValid = Object.values(data).every(value => value !== '');
            if (!formIsValid) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Verifica se o e-mail possui o formato correto
            const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
            if (!emailIsValid) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            const response = await fetch(`http://localhost:8080/projetoTeste/rest/trailFinder/inserir`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const text = await response.text();
                const json = text ? JSON.parse(text) : {}; 
                console.log(json);
                setFormSubmitted(true); 
                window.location.href = "/sucesso"; 
            } else {
                console.error('Erro ao enviar formulário:', response.statusText);
            }
        } catch (err) {
            console.error('Erro ao enviar formulário:', err);
        }
    }

    function handleAlert1(){
        alert(`Para Empresas do Tipo Serviços:
            - Microempresa (ME): Até 9 empregados"
            - Empresa de Pequeno Porte (EPP): De 10 a 49 empregados"
            - Empresa de Médio Porte: De 50 a 99 empregados
            - Grandes Empresas: 100 ou mais empregados`);
    }

    return (
        <section className="secao-total">
            <form className="form card-formulario" onSubmit={handleForm}>
                <div className="card_header">
                    <svg className="svg-trailfinder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path className="svg-trailfinder" fill="none" d="M0 0h24v24H0z"></path>
                        <path className="svg-trailfinder" fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                    </svg>
                    <h1 className="form_heading">Trail Finder</h1>
                </div>
                <div className="field">
                    <label className="label-trailfinder" htmlFor="name">Qual é o seu Nome</label>
                    <input className="input" name="name" type="text" placeholder="Nome" value={data.name} onChange={(e) => {handleFormEdit(e, "name")}} required />
                </div>
                <div className="field">
                    <label className="label-trailfinder" htmlFor="email">Informe seu e-mail:</label>
                    <input className="input" name="email" type="email" placeholder="E-mail" value={data.email} onChange={(e) => {handleFormEdit(e, "email")}} required />
                </div>
                <div className="field">
                    <label className="label-trailfinder" htmlFor="data">Data:</label>
                    <input className="input" name="data" type="date" placeholder="Data" value={data.dataContato} onChange={(e) => {handleFormEdit(e, "dataContato")}} required/>
                </div>
                <div className="field">
                    <label className="label-trailfinder" htmlFor="cargo">Qual seu cargo:</label>
                    <select id="cargo" name="cargo" value={data.cargo} onChange={(e) => {handleFormEdit(e, "cargo")}} required>
                        <option value=""></option>
                        <option value="Assistente">Assistente</option>
                        <option value="Diretor">Diretor</option>
                        <option value="Estagiário">Estagiário</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Analista">Analista</option>
                    </select>
                </div>
                <div className="field">
                    <label className="label-trailfinder" htmlFor="tipoEmpresa">Qual o tamanho da sua empresa:</label>
                    <select id="tipoEmpresa" name="tipoEmpresa" value={data.tipoEmpresa} onChange={(e) => {handleFormEdit(e, "tipoEmpresa")}} required>
                        <option value=""></option>
                        <option value="Pequena">Pequena</option>
                        <option value="Média">Média</option>
                        <option value="Grande">Grande</option>
                    </select>
                    <img className="interrogacaoTF" src={interrogacao.src} onClick={handleAlert1} />
                </div>
                <div className="field">
                    <label className="label-trailfinder" htmlFor="setor">Qual o setor da sua empresa:</label>
                    <select id="setor" name="setor" value={data.setor} onChange={(e) => {handleFormEdit(e, "setor")}} required>
                        <option value=""></option>
                        <option value="Automotivo">Automotivo</option>
                        <option value="Comunicações">Comunicações</option>
                        <option value="Bens de Consumo">Bens de Consumo</option>
                        <option value="Educação">Educação</option>
                        <option value="Energia & Utilities">Energia & Utilities</option>
                        <option value="Serviços Financeiros">Serviços Financeiros</option>
                        <option value="Saúde & Ciências da Vida">Saúde & Ciências da Vida</option>
                        <option value="Manufatura">Manufatura</option>
                        <option value="Mídia">Mídia</option>
                        <option value="Sem fins lucrativos">Sem fins lucrativos</option>
                        <option value="Setor Público">Setor Público</option>
                        <option value="Varejo">Varejo</option>
                        <option value="Tecnologia">Tecnologia</option>
                    </select>
                </div>
                <div className="botao-submit">
                    <button className="button-trailfinder" type="submit">ENVIE</button>
                </div>
                {formSubmitted && <p className="mensagem-sucesso">Enviado com sucesso</p>}
            </form>
        </section>
    )
}

export default TrailFinder;
