import express, { Request, Response, Router } from 'express';
import { healthCheckAsync, healthCheckSync } from '../controllers/health.controller';

const router: Router =
  express.Router();

router.get('/sync', (_req: Request, res: Response) => {
  const result = healthCheckSync();
  res.json({
    health: result,
    status: 200
  });
});

router.get('/async', async (_req: Request, res: Response) => {
  const result = await healthCheckAsync();
  res.json({
    health: result,
    status: 200
  });
});

export default router