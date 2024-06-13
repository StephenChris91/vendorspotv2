// pages/api/test-connection.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserByEmail } from '@/lib/data/user';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await getUserByEmail('stephenchriscodes@gmail.com');
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Connection failed', details: error});
    }
}
