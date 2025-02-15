import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/info`);
        setData(response.data);
      } catch (error) {
        console.error('Error al consumir el endpoint:', error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <div>
      <h1>Información del Backend</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default App;
