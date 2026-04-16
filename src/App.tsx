import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Programs from "./pages/Programs.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";
import Donate from "./pages/Donate.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading && <PageLoader onComplete={handleLoadComplete} />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
            <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
