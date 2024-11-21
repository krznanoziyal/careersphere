import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, []);

  return (
    <div className="mt-0">
      <Navbar />
      <div className="bg-blue-100">
        <HeroSection />
      </div>
     
      <div className="bg-slate-300 py-5">
        <CategoryCarousel />
      </div>
      
      <div className="bg-red-50 pt-8">
        <LatestJobs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
