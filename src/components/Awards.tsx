import React from 'react';
import { HoverEffect, Card, CardTitle, CardDescription } from "../components/ui/hover-effect";

interface Award {
  title: string;
  description: string;
  link?: string;
}

export const Awards = () => {
  const competitionsAwards: Award[] = [
    {
      title: "Y Combinator AI Startup School Attendee (1/3k)",
      description: "Selected among top 1 in 3,000 applicants for Y Combinator's AI Startup School program",
      link: "https://www.ycombinator.com/",
    },
    {
      title: "USACO Gold Division",
      description: "USA Computing Olympiad competitive programming contest (Top 4.3%)",
      link: "https://usaco.org/",
    },
    {
      title: "National Merit Finalist",
      description: "Recognized for exceptional academic achievement and PSAT performance",
    },
    {
      title: "UT Austin Forty Acres Semifinalist",
      description: "Selected among top applicants for prestigious scholarship (100/90000)",
    },
    {
      title: "American Physical Society Meeting Presenter",
      description: "Presented research on RSV patients at the APS Fall 2024 Meeting",
      link: "https://meetings.aps.org/Meeting/TSF24/Session/FB01.7",
    },
  ];

  const leadershipAwards: Award[] = [
    {
      title: "Chamber of Commerce Member (Enrichify)",
      description: "Recognized member of the Southlake Chamber of Commerce",
      link: "https://www.southlakechamber.com/list/member/enrichify-9681",
    },
    {
      title: "Southlake City Council Honoree",
      description: "Honored by Southlake City Council for community contributions",
      link: "https://southlaketx.new.swagit.com/videos/313998",
    },
    {
      title: "Carroll Administrative Board Honoree",
      description: "Recognized by school board for academic excellence",
      link: "https://carrollisdtx.new.swagit.com/videos/318164",
    },
  ];

  const globalAwards: Award[] = [
    {
      title: "United Nations ECOSOC Youth Forum Invitee",
      description: "Invited to participate in UN Economic and Social Council Youth Forum (Fidutam)",
    },
    {
      title: "United Nations AI for Good Ambassador",
      description: "Representing AI technology for positive social impact (Fidutam)",
    },
    {
      title: "MIT Solve Finalist",
      description: "Selected as finalist for MIT's social innovation competition (Fidutam)",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50">
      <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        Awards & Recognition
      </h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Competitions & Academic Achievements</h4>
          <HoverEffect items={competitionsAwards} />
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Leadership & Entrepreneurship</h4>
          <HoverEffect items={leadershipAwards} />
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Global Impact & Recognition</h4>
          <HoverEffect items={globalAwards} />
        </div>
      </div>
    </div>
  );
};

export default Awards; 