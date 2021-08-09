import React from "react";
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2>¡Suscribite a nuestro newsletter!</h2>
                <form>
                    <input type="text" placeholder="E-mail" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Newsletter;