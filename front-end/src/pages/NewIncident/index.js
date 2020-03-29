import React,{useState} from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


function NewIncident(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
  async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            titulo,
            descricao,
            value,
        };
        try{
            await api.post('incidemts', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');    
        }catch (err){
            alert('Erro ao cadastra um caso,tente novamente');           
        }

    }
    return (
        <div className="newIncident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>
                   Descreva o caso detalhadamente para encontrar um herói para resolver isso. 
                </p>
                <Link className="back_link" to="/profile">
                    <FiArrowLeft size={16} color = "#E02041"/>
                Voltar ao Home
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input type="text"  
                    placeholder="Titulo do caso"
                    vaue={titulo} onChange={e => setTitulo(e.target.value)}

                />
                <textarea type="text"   
                    placeholder="Descrição"
                    vaue={descricao} onChange={e => setDescricao(e.target.value)}

                />
                <input  
                    placeholder="Valor em Reais"
                    vaue={value} onChange={e => setValue(e.target.value)}

                />

               
                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}
export default NewIncident;