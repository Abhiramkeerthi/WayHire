import "../styles/roadmap.css";

import {
  Flame,
  Star,
  ArrowUpRight,
} from "lucide-react";

function PrioritySkills() {

  // Dummy data for now.
  // Backend will generate this later.

  const skills = [

    {
      skill: "Docker",
      priority: "High",
      stars: 5,
    },

    {
      skill: "REST APIs",
      priority: "High",
      stars: 5,
    },

    {
      skill: "AWS",
      priority: "Medium",
      stars: 4,
    },

    {
      skill: "System Design",
      priority: "Medium",
      stars: 4,
    },

  ];

  return (

    <div className="priority-card">

      <div className="section-heading">

        <Flame size={24} />

        <h2>Top Priority Skills</h2>

      </div>

      <p>

        These are the highest impact skills that can
        improve your profile for the selected opportunity.

      </p>

      <div className="priority-grid">

        {

          skills.map((item,index)=>(

            <div
              key={index}
              className="priority-item"
            >

              <div>

                <h3>

                  {item.skill}

                </h3>

                <span>

                  {item.priority} Priority

                </span>

              </div>

              <div className="priority-right">

                <div className="stars">

                  {

                    [...Array(item.stars)].map((_,i)=>(

                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                      />

                    ))

                  }

                </div>

                <ArrowUpRight size={20} />

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default PrioritySkills;