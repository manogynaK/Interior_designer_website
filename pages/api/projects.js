import fs from 'fs';
import path from 'path';

const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');

export default function handler(req, res) {
  let projects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));

  switch (req.method) {
    case 'GET':
      res.status(200).json(projects);
      break;
    case 'POST':
      const newProject = {
        id: Date.now(),
        ...req.body,
      };
      projects.push(newProject);
      fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
      res.status(201).json(newProject);
      break;
    case 'PUT':
      const { id, ...updatedData } = req.body;
      projects = projects.map(p => (p.id === id ? { ...p, ...updatedData } : p));
      fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
      res.status(200).json({ id, ...updatedData });
      break;
    case 'DELETE':
      const { id: deleteId } = req.body;
      projects = projects.filter(p => p.id !== deleteId);
      fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
      res.status(200).json({ message: 'Project deleted' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}