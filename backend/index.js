import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import geoip from 'geoip-lite';

const app = express();

// Middlewares básicos de seguridad y CORS
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Bienvenido al API del backend.');
});

// Endpoint GET que devuelve timestamp, IP y región
app.get('/api/info', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const geo = geoip.lookup(ip) || {};
  const region = geo.region || 'N/A';

  res.json({
    timestamp: Date.now(),
    ip,
    region,
  });
});

// Remueve el app.listen() y exporta la app para que Vercel la use
export default app;
