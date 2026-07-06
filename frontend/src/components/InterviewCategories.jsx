import { useState } from "react";

import "../styles/interview.css";

import {
  Code2,
  Users,
  Briefcase,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

function InterviewCategories() {

  const [selected, setSelected] = useState(0);

  const categories = [

    {
      icon: <Code2 size={28}/>,
      title: "Technical",
      description: "Role specific technical questions."
    },

    {
      icon: <Users size={28}/>,
      title: "Behavioral",
      description: "Teamwork and communication."
    },

    {
      icon: <Lightbulb size={28}/>,
      title: "Situational",
      description: "Real workplace scenarios."
    },

    {
      icon: <Briefcase size={28}/>,
      title: "HR",
      description: "Company and personality questions."
    },

    {
      icon: <MessageSquare size={28}/>,
      title: "Role Specific",
      description: "Questions tailored to your profession."
    }

  ];

  return (

    <div className="category-section">

      <h2>Select Interview Category</h2>

      <p>

        Choose a category to practice.
        AI will personalize these questions after backend integration.

      </p>

      <div className="category-grid">

        {

          categories.map((item,index)=>(

            <div

              key={index}

              onClick={()=>setSelected(index)}

              className={`category-card ${
                selected===index ? "active-category" : ""
              }`}

            >

              {item.icon}

              <h3>{item.title}</h3>

              <span>{item.description}</span>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default InterviewCategories;