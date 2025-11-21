import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { MapPin, Clock, Calendar, Briefcase } from "lucide-react";

interface JobPosterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
  experience: string;
  date: string;
  category: string;
  onApplyClick: () => void;
}

const JobPoster = ({
  open,
  onOpenChange,
  jobTitle,
  experience,
  date,
  category,
  onApplyClick,
}: JobPosterProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground">
            {jobTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Job Meta Info */}
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>{category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{experience} Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Posted: {date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Remote / On-site</span>
            </div>
          </div>

          {/* Job Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                About the Role
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are looking for a talented {jobTitle} to join our dynamic team. 
                You will work on cutting-edge projects and collaborate with passionate 
                professionals to deliver exceptional solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Key Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Design and develop high-quality software solutions</li>
                <li>Collaborate with cross-functional teams</li>
                <li>Write clean, maintainable, and efficient code</li>
                <li>Participate in code reviews and technical discussions</li>
                <li>Stay updated with industry trends and best practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{experience} of professional experience</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communication and teamwork abilities</li>
                <li>Bachelor's degree in Computer Science or related field</li>
                <li>Experience with modern development tools and practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What We Offer
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Competitive salary and benefits package</li>
                <li>Flexible work arrangements</li>
                <li>Professional development opportunities</li>
                <li>Collaborative and inclusive work environment</li>
                <li>Health and wellness programs</li>
              </ul>
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-end pt-4 border-t border-border">
            <Button 
              onClick={() => {
                onOpenChange(false);
                onApplyClick();
              }}
              size="lg"
              className="font-semibold"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobPoster;
