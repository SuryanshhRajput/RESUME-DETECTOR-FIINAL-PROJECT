import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  BarChart3, 
  Star, 
  Upload, 
  Home,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatbotIcon from "@/components/ChatbotIcon";

interface AnalysisResult {
  category: string;
  confidence: number;
  skills: string[];
}

const Result = () => {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedResult = sessionStorage.getItem("analysisResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // Redirect to upload if no result found
      navigate("/upload");
    }
  }, [navigate]);

  if (!result) {
    return null; // Loading or redirecting
  }

  const confidencePercentage = Math.round(result.confidence * 100);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return "text-green-400";
    if (confidence >= 0.6) return "text-yellow-400";
    return "text-orange-400";
  };

  const getConfidenceLevel = (confidence: number) => {
    if (confidence >= 0.8) return "High";
    if (confidence >= 0.6) return "Medium";
    return "Low";
  };

  return (
    <div className="min-h-screen gradient-animated">
      <Navbar />
      <ChatbotIcon />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 glass-card py-2 px-4 mb-4">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-muted-foreground">Analysis Complete</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Your <span className="gradient-text">AI Analysis</span> Results
              </h1>
              <p className="text-muted-foreground text-lg">
                Based on your resume content, here's what our AI discovered about your career path.
              </p>
            </div>

            <div className="grid gap-8 mb-8">
              {/* Main Prediction Card */}
              <Card className="glass-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gradient-from/20 to-transparent rounded-bl-full"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Predicted Job Category</h2>
                      <p className="text-muted-foreground">
                        Our AI model analyzed your skills and experience
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-from to-gradient-via rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="text-center py-8">
                    <div className="text-5xl font-bold gradient-text mb-4">
                      {result.category}
                    </div>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Star className={`h-5 w-5 ${getConfidenceColor(result.confidence)}`} />
                      <span className="text-lg font-semibold">
                        {confidencePercentage}% Confidence
                      </span>
                      <Badge 
                        variant="outline" 
                        className={`${getConfidenceColor(result.confidence)} border-current`}
                      >
                        {getConfidenceLevel(result.confidence)} Match
                      </Badge>
                    </div>
                    
                    <div className="max-w-md mx-auto">
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Confidence Score</span>
                        <span>{confidencePercentage}%</span>
                      </div>
                      <Progress 
                        value={confidencePercentage} 
                        className="h-3 bg-secondary"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Skills Card */}
              <Card className="glass-card">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Key Skills Identified</h3>
                    <p className="text-muted-foreground">
                      Skills that contributed to this prediction
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-gradient-via to-gradient-to rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {result.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="glass border-border/50 text-foreground px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Insights Card */}
              <Card className="glass-card">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Career Insights</h3>
                    <p className="text-muted-foreground">
                      Recommendations based on your analysis
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-gradient-to to-accent rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 glass rounded-xl">
                    <h4 className="font-semibold mb-2">Strong Match Indicators</h4>
                    <p className="text-muted-foreground text-sm">
                      Your resume shows strong alignment with {result.category} roles, 
                      particularly in technical skills and relevant experience patterns.
                    </p>
                  </div>
                  
                  <div className="p-4 glass rounded-xl">
                    <h4 className="font-semibold mb-2">Career Advancement Tips</h4>
                    <p className="text-muted-foreground text-sm">
                      Consider highlighting your {result.skills.slice(0, 2).join(" and ")} skills 
                      when applying for {result.category} positions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-gradient-from to-gradient-via text-white shadow-glow hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg rounded-2xl"
              >
                <Link to="/upload" className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Analyze Another Resume</span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="glass border-border/50 text-foreground hover:bg-secondary/20 px-8 py-6 text-lg rounded-2xl transition-all duration-300"
              >
                <Link to="/" className="flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;