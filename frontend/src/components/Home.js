import React from 'react';
import { Calendar, Clipboard, Cog, DollarSign, HeartPulse, Hospital, Shield, User, Users, Clock, ChartBar, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, primary, onClick, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      primary
        ? 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
        : 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500'
    }`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ icon: Icon, title, description, primary }) => (
  <div className={`rounded-lg shadow-md p-6 ${primary ? 'bg-white' : 'bg-gray-100'}`}>
    <Icon className="w-8 h-8 text-blue-600 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button primary>Explore</Button>
  </div>
);

const Section = ({ children, bg, height }) => (
  <section className={`${height || 'py-20'} ${bg} content-center`}>
    <div className="container mx-auto px-4 h-full">
      {children}
    </div>
  </section>
);

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center gap-2">
          <Hospital className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">Hospital Management System</span>
        </div>
        <nav className="flex items-center gap-4">
          <Button primary onClick={() => handleButtonClick('/login')}>Login</Button>
          <Button onClick={() => handleButtonClick('/signup')}>Sign Up</Button>
        </nav>
      </header>
      
      <main className="flex-1">
        <Section bg="bg-red-500" height="min-h-[30rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6 text-left">
                Streamline Your Hospital Management
              </h1>
              <p className="text-xl text-white mb-10 text-left">
                Our comprehensive hospital management system helps you optimize patient care, streamline operations,
                and improve overall efficiency.
              </p>
              <div className="flex gap-4 justify-left">
                <Button primary onClick={() => handleButtonClick('/login')}>Explore Features</Button>
                <Button onClick={() => handleButtonClick('/login')}>Appointments</Button>
              </div>
            </div>
            <div className="bg-gray-200 w-full h-full min-h-[20rem] rounded-lg overflow-hidden">
              <img src="home-1.jpeg" alt="" />
            </div>
          </div>
        </Section>

       

        
      </main>

      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-gray-600">&copy; 2024 Hospital Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;