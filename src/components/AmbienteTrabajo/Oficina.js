import React, { useState, useEffect } from "react";

const Oficina = ({ updateTotal }) => {
  const [arriendo, setArriendo] = useState();
  const [servicios, setServicios] = useState();
  const [mantenimiento, setMantenimiento] = useState();
  const [otros, setOtros] = useState();

  const handleArriendo = (event) => {
    setArriendo(Number(event.target.value));
  };

  const handleServicios = (event) => {
    setServicios(Number(event.target.value));
  };

  const handleMantenimiento = (event) => {
    setMantenimiento(Number(event.target.value));
  };

  const handleOtros = (event) => {
    setOtros(Number(event.target.value));
  };

  useEffect(() => {
    const newTotal = arriendo + servicios + mantenimiento + otros;
    console.log(newTotal, arriendo, servicios, mantenimiento, otros);
    updateTotal(newTotal); // Llamando a la función updateTotal para actualizar el total en AmbiTrabajo
  }, [arriendo, servicios, mantenimiento, otros, updateTotal]);

  return (
    <div>
      <h4>Oficina</h4>
      <label>
        Arriendo mensual:
        <input type="number" value={arriendo} onChange={handleArriendo} />
      </label>
      <br />
      <label>
        Gastos en servicios:
        <input type="number" value={servicios} onChange={handleServicios} />
      </label>
      <br />
      <label>
        Mantenimiento de computadores:
        <input
          type="number"
          value={mantenimiento}
          onChange={handleMantenimiento}
        />
      </label>
      <br />
      <label>
        Otros:
        <input type="number" value={otros} onChange={handleOtros} />
      </label>
    </div>
  );
};

export default Oficina;
