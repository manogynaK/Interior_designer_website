import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiPhone, FiEdit, FiTrash2, FiPlus, FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import Link from 'next/link';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [leads, setLeads] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', images: [''], category: '', location: '' });
  const [editingProject, setEditingProject] = useState(null);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', quote: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [uploadMethod, setUploadMethod] = useState('url'); // 'url' or 'file'
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState('');

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  const fetchTestimonials = async () => {
    const res = await fetch('/api/testimonials');
    const data = await res.json();
    setTestimonials(data);
  };

  const fetchLeads = async () => {
    const res = await fetch('/api/leads');
    const data = await res.json();
    setLeads(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects();
      fetchTestimonials();
      fetchLeads();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid password');
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const projectToAdd = {
      ...newProject,
      images: newProject.images.filter(img => img.trim() !== ''),
      category: newProject.category || 'General',
      location: newProject.location || ''
    };
    if (!projectToAdd.title || !projectToAdd.description || projectToAdd.images.length === 0) {
      alert('Please fill in title, description, and at least one image URL.');
      return;
    }
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectToAdd),
    });
    setNewProject({ title: '', description: '', images: [''], category: '', location: '' });
    fetchProjects();
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    const projectToUpdate = {
      ...editingProject,
      images: editingProject.images.filter(img => img.trim() !== ''),
      category: editingProject.category || 'General',
      location: editingProject.location || ''
    };
    if (!projectToUpdate.title || !projectToUpdate.description || projectToUpdate.images.length === 0) {
      alert('Please fill in title, description, and at least one image URL.');
      return;
    }
    await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectToUpdate),
    });
    setEditingProject(null);
    fetchProjects();
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await fetch('/api/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchProjects();
    }
  };

  const handleAddTestimonial = async (e) => {
    e.preventDefault();
    await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTestimonial),
    });
    setNewTestimonial({ name: '', quote: '' });
    fetchTestimonials();
  };

  const handleDeleteTestimonial = async (id) => {
    await fetch('/api/testimonials', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchTestimonials();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setUploadMessage('Uploading...');

    try {
      const formData = new FormData();

      // Append form fields
      Object.keys(newProject).forEach(key => {
        if (key !== 'images') {
          formData.append(key, newProject[key]);
        }
      });

      // Append files
      selectedFiles.forEach(file => {
        formData.append('images', file);
      });

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        setUploadMessage('✅ Project created successfully!');
        setNewProject({ title: '', description: '', images: [''], category: '', location: '' });
        setSelectedFiles([]);
        // Reset file input
        document.getElementById('file-input').value = '';
        fetchProjects();
      } else {
        setUploadMessage(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setUploadMessage(`❌ Upload failed: ${error.message}`);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-secondary mb-2">Admin Login</h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-center text-gray-800">Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Project Management */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Manage Projects</h2>

          {/* Add Project Form */}
          <form onSubmit={uploadMethod === 'file' ? handleFileUpload : handleAddProject} className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-gray-700 mb-4">Add New Project</h3>

            {/* Upload Method Toggle */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <button
                  type="button"
                  onClick={() => setUploadMethod('url')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${uploadMethod === 'url' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Image URLs
                </button>
                <button
                  type="button"
                  onClick={() => setUploadMethod('file')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${uploadMethod === 'file' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Upload Files
                </button>
              </div>

              {/* Upload Message */}
              {uploadMessage && (
                <div className={`p-3 rounded-lg text-sm ${uploadMessage.includes('✅') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {uploadMessage}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title || ''}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                className="w-full p-3 rounded border border-gray-300"
                required
              />
              <select
                value={newProject.category || ''}
                onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                className="w-full p-3 rounded border border-gray-300"
              >
                <option value="">Select Category</option>
                <option value="Living Room">Living Room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Office">Office</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Location (e.g., Mumbai, India)"
              value={newProject.location || ''}
              onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
              className="w-full p-3 rounded border border-gray-300 mb-4"
            />

            <textarea
              placeholder="Project Description"
              value={newProject.description || ''}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="w-full p-3 rounded border border-gray-300 mb-4"
              rows="3"
              required
            ></textarea>

            {/* Image Input Section */}
            {uploadMethod === 'url' ? (
              <>
                <label className="block text-gray-700 font-bold mb-2">Images</label>
                {newProject.images.map((image, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={image}
                      onChange={(e) => {
                        const images = [...newProject.images];
                        images[index] = e.target.value;
                        setNewProject({ ...newProject, images });
                      }}
                      className="w-full p-3 rounded border border-gray-300"
                    />
                    {newProject.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const images = newProject.images.filter((_, i) => i !== index);
                          setNewProject({ ...newProject, images });
                        }}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setNewProject({ ...newProject, images: [...newProject.images, ''] })}
                  className="text-accent font-bold py-2 px-4 rounded-full font-sans text-sm hover:bg-accent/10 transition-all flex items-center"
                >
                  <FiPlus className="mr-2" />Add Another Image
                </button>
              </>
            ) : (
              <>
                <label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
                  Project Images *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-accent/50 transition-colors">
                  <input
                    type="file"
                    id="file-input"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label htmlFor="file-input" className="cursor-pointer">
                    <div className="space-y-2">
                      <svg className="w-12 h-12 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <div className="text-gray-600">
                        <p className="text-lg font-medium">Click to upload images</p>
                        <p className="text-sm">PNG, JPG up to 10MB each</p>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Selected Files Preview */}
                {selectedFiles.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Selected files:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
                          {file.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            <button
              type="submit"
              disabled={uploadMethod === 'file' ? (selectedFiles.length === 0 || !newProject.title || !newProject.description) : (!newProject.title || !newProject.description || newProject.images.every(img => img.trim() === ''))}
              className="bg-accent text-white font-bold py-3 px-6 rounded-full font-sans text-lg hover:bg-accent/90 transition-all mt-4 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploadMethod === 'file' ? 'Upload & Create Project' : 'Add Project'}
            </button>
          </form>

          {/* Project List */}
          <div className="space-y-4">
            {projects.map(p => (
              <div key={p.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex-1">
                  <span className="font-bold text-gray-700">{p.title}</span>
                  {p.category && <span className="ml-2 text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{p.category}</span>}
                  {p.location && <span className="ml-2 text-xs text-gray-500">📍 {p.location}</span>}
                </div>
                <div className="flex items-center">
                  <button onClick={() => setEditingProject(p)} className="text-blue-500 hover:text-blue-700 mr-4">
                    <FiEdit size={20} />
                  </button>
                  <button onClick={() => handleDeleteProject(p.id)} className="text-red-500 hover:text-red-700">
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Potential Leads */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Potential Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leads.map(lead => (
              <div key={lead.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <FiUser className="text-accent mr-3" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-secondary">{lead.name}</h3>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FiMail className="mr-3" size={20} />
                  <a href={`mailto:${lead.email}`} className="hover:text-accent transition-colors">{lead.email}</a>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FiPhone className="mr-3" size={20} />
                  <span>{lead.phone}</span>
                </div>
                <div className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                  <FiMessageSquare className="inline-block mr-2 text-gray-500" size={20} />
                  <span className="align-middle">{lead.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Management */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Manage Testimonials</h2>
          <form onSubmit={handleAddTestimonial} className="mb-8">
            <input
              type="text"
              placeholder="Client Name"
              value={newTestimonial.name}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
              className="w-full p-3 rounded bg-gray-50 border border-gray-300 text-gray-800 mb-4"
            />
            <textarea
              placeholder="Testimonial Quote"
              value={newTestimonial.quote}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
              className="w-full p-3 rounded bg-gray-50 border border-gray-300 text-gray-800 mb-4"
              rows="4"
            ></textarea>
            <button type="submit" className="bg-accent text-white font-bold py-3 px-6 rounded-full font-sans text-lg hover:bg-accent/90 transition-all">
              Add Testimonial
            </button>
          </form>
          <div className="space-y-4">
            {testimonials.map(t => (
              <div key={t.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800">{t.name}</span>
                  <button
                    onClick={() => handleDeleteTestimonial(t.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
                <p className="text-gray-700">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Project Modal */}
      {editingProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl max-h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif font-bold text-gray-800">Edit Project</h2>
              <button onClick={() => setEditingProject(null)} className="text-gray-500 hover:text-gray-800">
                <FiX size={28} />
              </button>
            </div>
            <form onSubmit={handleUpdateProject}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={editingProject.title || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full p-3 rounded border border-gray-300"
                  required
                />
                <select
                  value={editingProject.category || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                  className="w-full p-3 rounded border border-gray-300"
                >
                  <option value="">Select Category</option>
                  <option value="Living Room">Living Room</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Bathroom">Bathroom</option>
                  <option value="Office">Office</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Location (e.g., Mumbai, India)"
                value={editingProject.location || ''}
                onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                className="w-full p-3 rounded border border-gray-300 mb-4"
              />

              <textarea
                placeholder="Project Description"
                value={editingProject.description || ''}
                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                className="w-full p-3 rounded border border-gray-300 mb-4"
                rows="4"
                required
              ></textarea>

              <label className="block text-gray-700 font-bold mb-2">Images</label>
              {editingProject.images.map((image, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => {
                      const images = [...editingProject.images];
                      images[index] = e.target.value;
                      setEditingProject({ ...editingProject, images });
                    }}
                    className="w-full p-3 rounded border border-gray-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const images = editingProject.images.filter((_, i) => i !== index);
                      setEditingProject({ ...editingProject, images });
                    }}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setEditingProject({ ...editingProject, images: [...editingProject.images, ''] })}
                className="text-accent font-bold py-2 px-4 rounded-full font-sans text-sm hover:bg-accent/10 transition-all flex items-center mb-4"
              >
                <FiPlus className="mr-2" />Add Another Image
              </button>
              <button
                type="submit"
                className="bg-accent text-white font-bold py-3 px-8 rounded-full font-sans text-lg hover:bg-accent/90 transition-all w-full"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
