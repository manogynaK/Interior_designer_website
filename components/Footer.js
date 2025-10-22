const Footer = () => {
  return (
    <footer className="bg-white border-t border-light-gray py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="font-sans text-gray-400">&copy; {new Date().getFullYear()} Meghana Interiors. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-accent transition-colors">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;