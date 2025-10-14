import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Database, 
  Target, 
  Shield, 
  Zap, 
  Users,
  Upload,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatbotIcon from "@/components/ChatbotIcon";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Model",
      description: "Trained on 42,000+ resumes with state-of-the-art machine learning algorithms for accurate predictions."
    },
    {
      icon: Target,
      title: "High Accuracy",
      description: "87% average accuracy rate in predicting job categories across 15+ different career fields."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get your career predictions in seconds with detailed confidence scores and skill analysis."
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your resume data is processed securely and not stored on our servers for privacy protection."
    },
    {
      icon: Database,
      title: "Comprehensive Dataset",
      description: "Our model is trained on diverse resume data spanning multiple industries and experience levels."
    },
    {
      icon: Users,
      title: "Industry Validated",
      description: "Predictions validated against real-world hiring patterns and industry requirements."
    }
  ];

  const jobCategories = [
    "Data Science", "Software Engineer", "Web Development", "HR Specialist",
    "Testing & QA", "DevOps Engineer", "Marketing", "Sales", 
    "Consulting", "Finance", "Design", "Management", "Analytics", "Research"
  ];

  return (
    <div className="min-h-screen gradient-animated">
      <Navbar />
      <ChatbotIcon />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">ResumeAI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                ResumeAI is an advanced AI-powered platform that analyzes your resume content and 
                predicts the most suitable job categories for your skills and experience using 
                cutting-edge machine learning technology.
              </p>
            </div>

            {/* How It Works Section */}
            <Card className="glass-card mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">How Our AI Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gradient-from to-gradient-via rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Text Extraction</h3>
                  <p className="text-sm text-muted-foreground">
                    Extract and preprocess text content from your PDF resume using advanced parsing techniques.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gradient-via to-gradient-to rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Feature Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Transform text into numerical features using TF-IDF vectorization and skill pattern recognition.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gradient-to to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">ML Prediction</h3>
                  <p className="text-sm text-muted-foreground">
                    Apply trained machine learning models to predict job categories with confidence scores.
                  </p>
                </div>
              </div>
            </Card>

            {/* Features Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center gradient-text">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-from to-gradient-via rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Supported Job Categories */}
            <Card className="glass-card mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Supported Job Categories</h2>
              <p className="text-muted-foreground text-center mb-6">
                Our AI can predict across 15+ different job categories with high accuracy
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {jobCategories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 glass rounded-full text-sm border border-border/50"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </Card>

            {/* Stats Section */}
            <Card className="glass-card mb-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">42K+</div>
                  <div className="text-muted-foreground">Training Resumes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">87%</div>
                  <div className="text-muted-foreground">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-muted-foreground">Job Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">&lt; 3s</div>
                  <div className="text-muted-foreground">Analysis Time</div>
                </div>
              </div>
            </Card>

            {/* Technology Stack */}
            <Card className="glass-card mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Technology Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-accent">Frontend</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• React & TypeScript</li>
                    <li>• TailwindCSS with Glassmorphism</li>
                    <li>• Modern gradient design system</li>
                    <li>• Responsive & accessible UI</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-accent">Backend & AI</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• FastAPI with Python</li>
                    <li>• Scikit-learn ML models</li>
                    <li>• TF-IDF text vectorization</li>
                    <li>• PDF processing with PyPDF2</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Discover Your Career Path?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Upload your resume and let our AI provide insights into your most suitable job categories 
                with detailed analysis and confidence scores.
              </p>
              
              <Button
                asChild
                className="bg-gradient-to-r from-gradient-from to-gradient-via text-white shadow-glow hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg rounded-2xl"
              >
                <Link to="/upload" className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Start Analysis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;