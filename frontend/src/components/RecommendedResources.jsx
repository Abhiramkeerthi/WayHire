import "../styles/roadmap.css";

import {
  PlayCircle,
  BookOpen,
  Monitor,
  Globe,
  ExternalLink,
} from "lucide-react";

function RecommendedResources() {

  // Dummy data for now.
  // Backend will replace this later.

  const resources = [

    {
      icon: <PlayCircle size={24} />,
      title: "Video Tutorials",
      description:
        "Curated video playlists recommended for your target career path.",
    },

    {
      icon: <BookOpen size={24} />,
      title: "Official Documentation",
      description:
        "Learn directly from trusted documentation and official learning resources.",
    },

    {
      icon: <Monitor size={24} />,
      title: "Practice Platforms",
      description:
        "Hands-on exercises and practical projects to strengthen your skills.",
    },

    {
      icon: <Globe size={24} />,
      title: "Articles & Blogs",
      description:
        "Industry blogs, career tips and best practices recommended by AI.",
    },

  ];

  return (

    <div className="resources-section">

      <div className="section-heading">

        <BookOpen size={26} />

        <h2>Recommended Resources</h2>

      </div>

      <p>

        These recommendations will become personalized once
        your resume is analyzed against your selected role
        and company.

      </p>

      <div className="resources-grid">

        {

          resources.map((resource,index)=>(

            <div
              key={index}
              className="resource-card"
            >

              <div className="resource-icon">

                {resource.icon}

              </div>

              <h3>

                {resource.title}

              </h3>

              <p>

                {resource.description}

              </p>

              <button className="resource-btn">

                Explore

                <ExternalLink size={18} />

              </button>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default RecommendedResources;