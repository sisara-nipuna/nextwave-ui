import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";
import MyResumePDF from "../assets/nipuna.pdf";

interface ResumeViewerProps {
  resumeUrl?: string;
  className?: string;
}

const ResumeViewer = ({ resumeUrl = MyResumePDF, className }: ResumeViewerProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Nipuna_Mahaliyana_Resume.pdf";
    link.click();
  };

  return (
    <div className={className}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="border-glass-border hover:bg-muted/50 gap-2"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-[80vh] glass-card border-glass-border">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Resume / CV</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="border-glass-border hover:bg-muted/50 gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-glass-border hover:bg-muted/50 gap-2"
                >
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Open
                  </a>
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 h-full min-h-0 mt-4">
            <iframe
              src={resumeUrl}
              className="w-full h-[60vh] rounded-lg border border-glass-border bg-background"
              title="Resume PDF"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeViewer;
