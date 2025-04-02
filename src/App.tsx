import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { TransportationOptions } from './components/TransportationOptions';
import { DomesticRoutes } from './components/routes/DomesticRoutes';
import { InternationalRoutes } from './components/routes/InternationalRoutes';
import { Contact } from './components/Contact';
import { Tracking } from './components/Tracking';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Hero />
      <TransportationOptions />
      <DomesticRoutes />
      <InternationalRoutes />
      <Tracking />
      <Contact />
      <Footer />
    </div>
  );
}