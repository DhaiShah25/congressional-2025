import "../../App.css";
import { ContractorCard } from "../ContractorCard";
import { useState } from "react";

export default function Contractor() {
  const [zip, setZip] = useState("");

  const contractors = [
    {
      name: "Mark Daniels",
      location: "08817",
      rating: 4.8,
      reviewCount: 41,
      experience: 12,
      phoneNumber: "555-0100",
      email: "mark.daniels@example.com",
    },
    {
      name: "Jamal Brooks",
      location: "08820",
      rating: 4.2,
      reviewCount: 26,
      experience: 14,
      phoneNumber: "555-0172",
      email: "brooks.jamal@example.com",
    },
    {
      name: "Priya Shah",
      location: "08817",
      rating: 4.6,
      reviewCount: 32,
      experience: 9,
      phoneNumber: "555-0148",
      email: "shah.priya@example.com",
    },
    {
      name: "Luis Romero",
      location: "08823",
      rating: 4.8,
      reviewCount: 47,
      experience: 15,
      phoneNumber: "555-0129",
      email: "romero.luis@example.com",
    },
    {
      name: "Elena Rossi",
      location: "08817",
      rating: 4.9,
      reviewCount: 56,
      experience: 11,
      phoneNumber: "555-0174",
      email: "elena.rossi@example.com",
    },
    {
      name: "Sarah Patel",
      location: "08820",
      rating: 4.9,
      reviewCount: 57,
      experience: 15,
      phoneNumber: "555-0105",
      email: "sarah.patel@example.com",
    },
    {
      name: "James Liu",
      location: "08817",
      rating: 4.6,
      reviewCount: 32,
      experience: 10,
      phoneNumber: "555-0112",
      email: "james.liu@example.com",
    },
    {
      name: "Emily Rodriguez",
      location: "08816",
      rating: 4.7,
      reviewCount: 45,
      experience: 11,
      phoneNumber: "555-0123",
      email: "emily.rodriguez@example.com",
    },
    {
      name: "Michael Johnson",
      location: "08854",
      rating: 4.8,
      reviewCount: 50,
      experience: 14,
      phoneNumber: "555-0131",
      email: "michael.johnson@example.com",
    },
    {
      name: "Priya Shah",
      location: "08857",
      rating: 4.9,
      reviewCount: 61,
      experience: 16,
      phoneNumber: "555-0139",
      email: "priya.shah@example.com",
    },
    {
      name: "David Kim",
      location: "08840",
      rating: 4.5,
      reviewCount: 28,
      experience: 8,
      phoneNumber: "555-0147",
      email: "david.kim@example.com",
    },
    {
      name: "Jessica Rivera",
      location: "08837",
      rating: 4.6,
      reviewCount: 33,
      experience: 9,
      phoneNumber: "555-0155",
      email: "jessica.rivera@example.com",
    },
    {
      name: "Robert Singh",
      location: "08863",
      rating: 4.7,
      reviewCount: 48,
      experience: 13,
      phoneNumber: "555-0162",
      email: "robert.singh@example.com",
    },
    {
      name: "Alyssa Thompson",
      location: "08872",
      rating: 4.8,
      reviewCount: 52,
      experience: 12,
      phoneNumber: "555-0178",
      email: "alyssa.thompson@example.com",
    },
    {
      name: "Brian O'Connor",
      location: "08824",
      rating: 4.6,
      reviewCount: 39,
      experience: 10,
      phoneNumber: "555-0186",
      email: "brian.oconnor@example.com",
    },
  ];

  return (
    <>
      <div className="text-center font-bold bg-yellow-300 w-fit m-auto p-2 rounded my-2">
        <h1 className="text-2xl">
          Disclaimer: These Contractors Are For The Purpose Of This
          Demonstration
        </h1>
        <p className="text-md">
          Any Resemblance To Real People Is Not Intentional
        </p>
      </div>
      <label className="py-2 text-xl mx-auto block w-fit">
        What Is Your Zip Code:
        <br />
        <input
          type="text"
          onChange={(e) => setZip(e.target.value)}
          placeholder="08817"
          className="border p-2 w-full sm:w-[40ch] rounded"
        />
      </label>
      <div className="text-center p-2 flex flex-wrap flex-col sm:justify-evenly sm:flex-row gap-2">
        {contractors
          .filter((e) => e.location.startsWith(zip))
          .map((e) => (
            <ContractorCard {...e} />
          ))}
      </div>
    </>
  );
}

// 555-0100 through 555-0199
