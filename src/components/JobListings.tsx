import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import ApplicationForm from "./ApplicationForm";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
            onClick={() => {
              setSelectedJob(job);
              setIsDialogOpen(true);
            }}
            className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="flex items-center gap-8 flex-1">
              <h3 className="text-lg font-semibold text-foreground min-w-[200px]">
                {job.title}
              </h3>
              <span className="text-muted-foreground">{job.experience}</span>
              <span className="text-muted-foreground">{job.date}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        ))}
      </div>

      {/* Application Form Dialog */}
      {selectedJob && (
        <ApplicationForm
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          jobTitle={selectedJob.title}
        />
      )}
    </div>
  );
};

export default JobListings;
