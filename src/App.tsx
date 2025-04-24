
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import Schemes from "./pages/Schemes";
import Contact from "./pages/Contact";
import Eligibility from "./pages/Eligibility";
import NotFound from "./pages/NotFound";
import CentralServices from "./pages/CentralServices";
import StateServices from "./pages/StateServices";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/central" element={<CentralServices />} />
          <Route path="/services/state" element={<StateServices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
