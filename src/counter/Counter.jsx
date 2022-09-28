import { useState } from 'React';

function Counter(){
    // let contador =0;
    //El estado
    const [contador, setContador] = useState(20);
    useState();
    return(
        <div className="Componente-Counter">
            <p>HAZ HECHO CLICK {contador} VECES EN EL BOTON</p>
            <button onClick={ ()=>{ setContador(contador+1) }}>Incremetar</button>
        </div>
    );
}

export default Counter;