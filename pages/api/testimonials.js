import fs from 'fs';
import path from 'path';

const testimonialsFilePath = path.join(process.cwd(), 'data', 'testimonials.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const testimonials = JSON.parse(fs.readFileSync(testimonialsFilePath));
    res.status(200).json(testimonials);
  } else if (req.method === 'POST') {
    const testimonials = JSON.parse(fs.readFileSync(testimonialsFilePath));
    const newTestimonial = { id: Date.now(), ...req.body };
    testimonials.push(newTestimonial);
    fs.writeFileSync(testimonialsFilePath, JSON.stringify(testimonials, null, 2));
    res.status(201).json(newTestimonial);
  }
}