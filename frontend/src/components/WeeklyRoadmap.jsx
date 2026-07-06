import "../styles/roadmap.css";

import {
  CalendarDays,
  Clock3,
  Gauge,
  CheckCircle2,
} from "lucide-react";

function WeeklyRoadmap() {

  // Dummy data for now.
  // Backend will generate this later.

  const roadmap = [

    {
      week: "Week 1",
      title: "Strengthen Your Foundation",
      hours: "6-8 hrs",
      difficulty: "Easy",
      tasks: [
        "Improve Resume",
        "Learn Git & GitHub",
        "Understand Core Concepts",
      ],
    },

    {
      week: "Week 2",
      title: "Build Practical Skills",
      hours: "8-10 hrs",
      difficulty: "Medium",
      tasks: [
        "Complete Mini Project",
        "Practice Required Tools",
        "Update Portfolio",
      ],
    },

    {
      week: "Week 3",
      title: "Interview Preparation",
      hours: "8 hrs",
      difficulty: "Medium",
      tasks: [
        "Technical Questions",
        "Behavioral Questions",
        "Mock Interview",
      ],
    },

    {
      week: "Week 4",
      title: "Application Readiness",
      hours: "5 hrs",
      difficulty: "Easy",
      tasks: [
        "Optimize LinkedIn",
        "Resume Review",
        "Start Applying",
      ],
    },

  ];

  return (

    <div className="roadmap-section">

      <div className="section-heading">

        <CalendarDays size={24}/>

        <h2>30-Day Learning Plan</h2>

      </div>

      <div className="week-grid">

        {

          roadmap.map((week,index)=>(

            <div
              key={index}
              className="week-card"
            >

              <span className="week-tag">

                {week.week}

              </span>

              <h3>

                {week.title}

              </h3>

              <div className="week-info">

                <div>

                  <Clock3 size={16}/>

                  {week.hours}

                </div>

                <div>

                  <Gauge size={16}/>

                  {week.difficulty}

                </div>

              </div>

              <div className="task-list">

                {

                  week.tasks.map((task,i)=>(

                    <div
                      key={i}
                      className="task-item"
                    >

                      <CheckCircle2 size={18}/>

                      <span>

                        {task}

                      </span>

                    </div>

                  ))

                }

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default WeeklyRoadmap;