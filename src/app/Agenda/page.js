'use client'

import React, { useState, useEffect } from "react";
import "../../Styles/Agenda.css";
import NavBar from "../_Components/NavBar";

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
      { time: "8:00 AM", title: "Registrations" },
      { time: "8:30 AM", title: "Ice Breaker" },
      { time: "9:15 AM", title: "Opening Plenary" },
      { time: "11:30 PM",
        title: "",
        parallel: [
          { title: "Check in" },
          { title: "Jugglers Game" },
        ],
       },
      { time: "12.30 PM", title: "Lunch" },
      { time: "13.30 PM", title: "Clock" },
      {
        time: "2:30 PM",
        title: "",
        parallel: [
          { title: "Partner Space - Ceylinco Life" },
          { title: "Presidents' Track" },
        ],
      },
      { time: "3:30 PM", title: "Roll Calls" },
      { time: "3:45 PM", title: "Gossip Team Reveal" },
      {
        time: "4.00 PM",
        title: "LEAD",
        parallel: [
          { title: "Enjoying Participation" },
          { title: "Striving for Excellence" },
          { title: "Acting Sustainably" },
          { title: "Demonstrating Integrity" },
          { title: "Activating Leadership" },
          { title: "Living Diversity" },
          { title: "Presidents' Lead" },
        ],
      },
      { time: "5:00 PM", title: "Snack Break + Roll Calls" },
      { time: "5:30 PM", title: "You matter" },
      { time: "6:30 PM", title: "Evening Plenary" },
      { time: "9:00 PM", title: "Dinner" },
      { time: "9:00 PM", title: "Entity Time" },
      { time: "9:45 PM", title: "Theme Party" },
    ],
    day2: [
      { time: "7:00 AM", title: "Breakfast" },
      { time: "8:00 AM", title: "Roll Calls" },
      { time: "8:30 AM", title: "Morning Plenary" },
      {
        time: "10:30 AM",
        title: "",
        parallel: [
          { title: "Partner Space - Ceyline Group" },
          { title: "Secret Recipe" },
        ],
      },
      {
        time: "11:00 AM",
        title: "Skill Workshops",
        parallel: [
          { title: "A Story when I was in my first year" },
          { title: "The art of letting go" },
          { title: "Think before you act" },
          { title: "බාල්දි කඩේ" },
          { title: "Discover, Adapt, Thrive" },
        ],
      },
      { time: "12:00 PM", title: "Lunch" },
      { time: "1:00 PM", title: "Roll Calls" },
      { time: "1:15 PM", title: "The Way of Exchanges" },
      {
        time: "11:00 AM",
        title: "",
        parallel: [
          { title: "Functional Spaces" },
          { title: "AIESEC Airlines" },
        ],
      },
      { time: "4:00 PM", title: "OBT" },
      { time: "6:45 PM", title: "OBT Closing" },
      { time: "7:15 PM", title: "Gala Prep" },
      { time: "8:30 PM", title: "Gala Dinner" },
      { time: "9:00 PM", title: "Gala Night" },
      { time: "11:00 PM", title: "Gala After Party" },
    ],
    day3: [
      { time: "7:00 AM", title: "Breakfast" },
      { time: "10:00 AM", title: "Opening Plenary" },
      {
        time: "10:30 AM",
        title: "",
        parallel: [
          { title: "Partner Space" },
          { title: "Juggle Game" },
        ],
      },
      { time: "11:15 AM", title: "Juggle Game" },
      { time: "12:00 PM", title: "Hackathon Happy Hour" },
      { time: "1:15 PM", title: "Lunch + Checkout" },
      { time: "2:30 PM", title: "Wher are we?" },
      { time: "4:30 PM", title: "Aiming for Infinity" },
      { time: "5.30 PM", title: "Closing Plenary" },
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
