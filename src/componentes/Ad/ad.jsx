
import { useState } from "react";
import "./Ad.css";
import Swal from "sweetalert2";

const Ad = () => {
    const [adVisibility, setAdVisibility] = useState(true);
    const handCloseAd = () => {
        setAdVisibility(false);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El sorteo no esta disponible!',
            footer: 'el evento ya fue sorteado el 20/01/2023, suerte para la proxima!!!'
            
        })
    }

    return (
        <div>
            {
                adVisibility === true
                    ?
                    <div className="ad">
                        <h3>Sorteo</h3>
                        <h6>Con la compra de cualquier guitarra Ibanez, estas participando por un amplificador valvular Laney Ironheard irt60h </h6>
                        <button type="button" className="btn btn-outline-warning" onClick={handCloseAd}>Mas info...</button>
                    </div>
                    :
                    null
            }
        </div>
    )
}
export default Ad