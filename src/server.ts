import express from 'express';
import cors from 'cors';
//import { setupRoutes } from './infrastructure/ExpressRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//setupRoutes(app);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});