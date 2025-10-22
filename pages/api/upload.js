import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), 'public/uploads'),
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10MB
  });

  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), 'public/uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(500).json({ message: 'Upload failed', error: err.message });
    }

    try {
      const uploadedFiles = [];

      // Handle multiple files if needed
      const fileArray = Array.isArray(files.images) ? files.images : [files.images];

      for (const file of fileArray) {
        if (file && file.filepath) {
          const fileName = `${Date.now()}_${file.originalFilename}`;
          const newPath = path.join(uploadDir, fileName);

          // Move file to final location
          fs.renameSync(file.filepath, newPath);

          uploadedFiles.push(`/uploads/${fileName}`);
        }
      }

      // If this is for a project, also handle project data
      if (fields.title && fields.description) {
        const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');
        let projects = [];

        try {
          projects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));
        } catch (e) {
          // File doesn't exist or is invalid, start with empty array
        }

        const newProject = {
          id: Date.now(),
          title: fields.title,
          description: fields.description,
          images: uploadedFiles,
          category: fields.category || 'General',
          location: fields.location || '',
          link: fields.link || '',
          createdAt: new Date().toISOString()
        };

        projects.unshift(newProject); // Add to beginning
        fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));

        return res.status(200).json({
          message: 'Project created successfully',
          project: newProject,
          uploadedFiles
        });
      }

      return res.status(200).json({
        message: 'Files uploaded successfully',
        uploadedFiles
      });

    } catch (error) {
      console.error('Processing error:', error);
      return res.status(500).json({ message: 'Processing failed', error: error.message });
    }
  });
}
