import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import geoip from 'geoip-lite';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos de seguridad y CORS
app.use(helmet());
app.use(cors());

// Endpoint GET que devuelve timestamp, IP y región
app.get('/api/info', (req, res) => {
  // Obtener la IP (considera que en entornos de producción puede venir en x-forwarded-for)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // Lookup de la IP para obtener información geográfica
  const geo = geoip.lookup(ip) || {};
  const region = geo.region || 'N/A';

  res.json({
    timestamp: Date.now(),
    ip,
    region,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
