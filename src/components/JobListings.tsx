import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import ApplicationForm from "./ApplicationForm";
import JobPoster from "./JobPoster";

interface Job {
  id: string;
  title: string;
  experience: string;
  date: string;
  category: string;
}

const JobListings = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const jobs: Job[] = [
    {
      id: "1",
      title: "Full-Stack Developer",
      experience: "2 Years",
      date: "2025-05-08",
      category: "ENGINEERING",
    },
    // Add more jobs here as needed
  ];

  const categories = [
    { label: "ALL", count: 5 },
    { label: "ENGINEERING", count: 3 },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesTab = activeTab === "ALL" || job.category === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-muted rounded-lg p-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 bg-background border-border"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-6 border-b border-border">
        {categories.map((category) => (
          <button
            key={category.label}
            onClick={() => setActiveTab(category.label)}
            className={`pb-3 px-2 font-medium transition-colors relative ${
              activeTab === category.label
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {category.label} ({category.count})
            {activeTab === category.label && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="space-y-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-8 flex-1">
              <h3 className="text-lg font-semibold text-foreground min-w-[200px]">
                {job.title}
              </h3>
              <span className="text-muted-foreground">{job.experience}</span>
              <span className="text-muted-foreground">{job.date}</span>
            </div>
            <Button
              onClick={() => {
                setSelectedJob(job);
                setIsPosterOpen(true);
              }}
              variant="outline"
              className="gap-2"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Job Poster Dialog */}
      {selectedJob && (
        <>
          <JobPoster
            open={isPosterOpen}
            onOpenChange={setIsPosterOpen}
            jobTitle={selectedJob.title}
            experience={selectedJob.experience}
            date={selectedJob.date}
            category={selectedJob.category}
            onApplyClick={() => setIsApplicationOpen(true)}
          />
          <ApplicationForm
            open={isApplicationOpen}
            onOpenChange={setIsApplicationOpen}
            jobTitle={selectedJob.title}
          />
        </>
      )}
    </div>
  );
};

export default JobListings;
