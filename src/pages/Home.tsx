import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, Target, BarChart3, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatbotIcon from "@/components/ChatbotIcon";

const Home = () => {
  return (
    <div className="min-h-screen gradient-animated">
      <Navbar />
      <ChatbotIcon />
      
      {/* Hero Section */}
      <div className="pt-20 sm:pt-24 pb-14 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 float">
              <div className="inline-flex items-center space-x-2 glass-card py-2 px-4 mb-6">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">AI-Powered Career Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">AI Resume</span>
                <br />
                <span className="text-foreground">Scanner</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Upload your resume and let our advanced AI predict your most suitable job category with precision. 
                Get instant insights into your career path.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 sm:mb-16">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-gradient-from to-gradient-via text-white shadow-glow hover:shadow-2xl transition-all duration-300 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-2xl"
              >
                <Link to="/upload" className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Resume</span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="glass border-border/50 text-foreground hover:bg-secondary/20 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-2xl transition-all duration-300"
              >
                <Link to="/about" className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>Learn More</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI analyzes your resume content and predicts the most suitable job categories for your skills and experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gradient-from to-gradient-via rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Resume</h3>
              <p className="text-muted-foreground">
                Simply upload your PDF resume and our system will extract and analyze your content.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gradient-via to-gradient-to rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our trained machine learning model analyzes your skills and experience patterns.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gradient-to to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Predictions</h3>
              <p className="text-muted-foreground">
                Receive your predicted job category with confidence scores and key skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">42K+</div>
                <div className="text-muted-foreground">Resumes Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">87%</div>
                <div className="text-muted-foreground">Average Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-muted-foreground">Job Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Credit */}
      <div className="pb-6">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">developed by "SUZAIN KHAN"</p>
        </div>
      </div>
    </div>
  );
};

export default Home;