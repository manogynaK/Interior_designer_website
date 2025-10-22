import fs from 'fs';
import path from 'path';

const leadsFilePath = path.join(process.cwd(), 'data', 'leads.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const leads = JSON.parse(fs.readFileSync(leadsFilePath, 'utf-8'));
    res.status(200).json(leads);
  } else if (req.method === 'POST') {
    const leads = JSON.parse(fs.readFileSync(leadsFilePath, 'utf-8'));
    const newLead = {
      id: Date.now(),
      ...req.body,
    };
    leads.push(newLead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2));
    res.status(201).json(newLead);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
