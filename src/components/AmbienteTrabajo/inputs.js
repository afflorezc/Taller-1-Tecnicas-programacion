

function InputsTiempo({inputText,inputId, botonFunct}){
    return(
        <div className="divTiempo">
            <label>{inputText}</label>
            <input id={inputId} type="number" min="0" step="1" className=""></input>
            <button type="button" onClick={botonFunct} className="buttonTime Main-button">Agregar</button>
        </div>
    );
}
export default InputsTiempo;
