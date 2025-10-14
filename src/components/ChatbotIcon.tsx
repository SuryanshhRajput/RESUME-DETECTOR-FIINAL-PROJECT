import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import OpenAIChat from "./OpenAIChat";

const ChatbotIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNudge(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-gradient-from to-gradient-via shadow-glow hover:pulse-glow transition-all duration-300"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
        {showNudge && (
          <div className="mt-2 text-xs glass px-3 py-2 rounded-lg shadow">
            Hi, how can I help you?
          </div>
        )}
      </div>
      
      <OpenAIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};

export default ChatbotIcon;