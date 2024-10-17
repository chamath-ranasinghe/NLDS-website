import React, { useState, useEffect } from "react";
import "../Styles/Agenda.css";
import NavBar from "../Components/NavBar";

// Updated gradient colors using shades around #00C7C7 and #7800A2
const gradientColors = [
  "linear-gradient(135deg, #00C7C7, #00A2A2)", // Lighter teal to darker teal
  "linear-gradient(135deg, #7800A2, #590075)", // Lighter purple to darker purple
  "linear-gradient(135deg, #00A2A2, #008585)", // Another teal variation
  "linear-gradient(135deg, #590075, #440058)", // Another purple variation
  "linear-gradient(135deg, #009999, #006666)", // Deep teal
  "linear-gradient(135deg, #660099, #4D0073)", // Darker purple with a hint of magenta
  "linear-gradient(135deg, #00CCCC, #00B2B2)", // Brighter teal with a cooler tone
  "linear-gradient(135deg, #9933FF, #7A00E6)", // Violet gradient
  "linear-gradient(135deg, #004C4C, #003333)", // Dark teal
  "linear-gradient(135deg, #3D005E, #28003F)", // Dark purple and magenta
];

const Agenda = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const agendaData = {
    day1: [
      { time: "9:00 AM", title: "Registrations" },
      { time: "10:00 AM", title: "Ice Breaker" },
      { time: "11:00 AM", title: "Opening Plenary" },
      { time: "1:00 PM", title: "Lunch + Check in" },
      { time: "2.30 PM", title: "Essence" },
      {
        time: "3:30 PM",
        title: "",
        parallel: [
          { title: "Partner Space" },
          { title: "Role of P in Operations" },
        ],
      },
      { time: "4:30 PM", title: "Current Context" },
      {
        time: "6.00 PM",
        title: "LEAD",
        parallel: [
          { title: "Enjoying Participation" },
          { title: "Striving for Excellence" },
          { title: "Acting Sustainably" },
          { title: "Demonstrating Integrity" },
          { title: "Activating Leadership" },
          { title: "Living Diversity" },
          { title: "Unfuckwithable" },
        ],
      },
      { time: "7:00 PM", title: "Evening Plenary" },
      { time: "8:00 PM", title: "Dinner" },
      { time: "9:00 PM", title: "Entity Time" },
      { time: "9:45 PM", title: "Theme Party" },
    ],
    day2: [
      { time: "9:00 AM", title: "Day 2 Opening" },
      { time: "10:00 AM", title: "Panel Discussion" },
      {
        time: "11:00 AM",
        title: "Workshop 2",
        parallel: [
          { title: "Session X" },
          { title: "Session Y" },
          { title: "Session Z" },
        ],
      }, // Parallel session example with more items
      { time: "12:00 PM", title: "Networking Event" },
    ],
    day3: [
      { time: "9:00 AM", title: "Day 3 Opening" },
      { time: "10:00 AM", title: "Fireside Chat" },
      { time: "11:00 AM", title: "Final Workshop" },
      { time: "12:00 PM", title: "Closing Ceremony" },
    ],
  };

  // Function to render agenda items
  const renderAgendaItems = (items) => {
    return items.map((item, index) => (
      <div
        key={index}
        className={`agenda-item ${isTransitioning ? "hidden" : "visible"}`} // Toggle visibility for smooth transitions
        style={{
          background: gradientColors[index % gradientColors.length],
        }}
      >
        <div className="agenda-time">{item.time}</div>
        {/* Check if the item has parallel sessions */}
        <div
          className={`agenda-title ${item.parallel ? "parallel-sessions" : ""}`}
        >
          {item.parallel ? (
            <div className="parallel-container">
              {item.parallel.map((session, i) => (
                <div
                  key={i}
                  className="parallel-session"
                  style={{
                    background: gradientColors[i % gradientColors.length],
                  }} // Different color for parallel sessions
                >
                  {session.title}
                </div>
              ))}
            </div>
          ) : (
            item.title
          )}
        </div>
      </div>
    ));
  };

  // Handle day change with a smooth transition
  const handleDayChange = (day) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDay(day);
      setIsTransitioning(false);
    }, 300); // Duration of the transition
  };

  return (
    <div className="agenda-container">
      <NavBar />
      <div className="agenda-header">
        <button
          onClick={() => handleDayChange(1)}
          className={currentDay === 1 ? "active" : ""}
        >
          Day 1
        </button>
        <button
          onClick={() => handleDayChange(2)}
          className={currentDay === 2 ? "active" : ""}
        >
          Day 2
        </button>
        <button
          onClick={() => handleDayChange(3)}
          className={currentDay === 3 ? "active" : ""}
        >
          Day 3
        </button>
      </div>
      <div className="agenda-content">
        {currentDay === 1 && renderAgendaItems(agendaData.day1)}
        {currentDay === 2 && renderAgendaItems(agendaData.day2)}
        {currentDay === 3 && renderAgendaItems(agendaData.day3)}
      </div>
    </div>
  );
};

export default Agenda;
