import type { ApiRequestLike, ApiResponseLike } from './_lib/analytics';

export default function handler(_req: ApiRequestLike, res: ApiResponseLike) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    status: 'ok',
    service: 'Mindcare public psychiatry education portal',
    runtime: 'vercel-function',
    timestamp: new Date().toISOString(),
  });
}
