import { Header, Footer } from '../../organisms';

const MainLayout = ({ 
  children, 
  title, 
  onSearch, 
  onLogin, 
  onRegister,
  className = '' 
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col ${className}`.trim()}>
      <Header 
        title={title}
        onSearch={onSearch}
        onLogin={onLogin}
        onRegister={onRegister}
      />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;