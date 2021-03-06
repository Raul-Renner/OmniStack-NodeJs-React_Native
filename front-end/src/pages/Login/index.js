import React, { useState } from 'react';
import './style.css';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

function Login(){

    const [id, setId] = useState('');
    const history = useHistory();
   async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id );
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');   
        }   catch(err){
            alert('Erro no login, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Login</h1>
                    <input type="text" placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back_link" to="/register">
                        <FiLogIn size={16} color = "#E02041"/>
                        Não tenho cadastro
                    </Link>
                
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
export default Login;