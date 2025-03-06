"use client";

import React, { useState } from "react";
import Form from "next/form";
import Dropdown from "@/app/components/dropdown";

interface GiftFormProps {}

const GiftForm: React.FC<
  GiftFormProps & React.HTMLAttributes<HTMLDivElement>
> = ({}) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedPersonality, setSelectedPersonality] = useState<string | null>(
    null
  );
  const [selectedGiftType, setSelectedGiftType] = useState<string | null>(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState<string | null>(null);
  const [selectedShoppingPref, setSelectedShoppingPref] = useState<
    string | null
  >(null);
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null);

  const interestOptions = [
    "Technology",
    "Sports",
    "Music",
    "Art",
    "Reading",
    "Cooking",
    "Gaming",
    "Travel",
    "Fashion",
    "Outdoor Activities",
  ];

  const hobbyOptions = [
    "Gardening",
    "Photography",
    "Dancing",
    "DIY/Crafting",
    "Baking",
    "Collecting",
    "Playing instruments",
    "Hiking",
    "Meditation",
    "Painting",
  ];

  const occasionOptions = [
    "Birthday",
    "Anniversary",
    "Christmas/Holiday",
    "Valentine's Day",
    "Wedding",
    "Graduation",
    "Housewarming",
    "Baby Shower",
    "Retirement",
    "Just Because",
  ];

  const budgetOptions = [
    "Under $25",
    "$25 - $50",
    "$50 - $100",
    "$100 - $250",
    "$250 - $500",
    "Over $500",
  ];

  const personalityOptions = [
    "Introvert",
    "Extrovert",
    "Practical",
    "Creative",
    "Adventurous",
    "Analytical",
    "Sentimental",
    "Minimalist",
  ];

  const giftTypeOptions = [
    "Practical/Useful",
    "Luxury/High-end",
    "Handmade/Artisanal",
    "Experiences",
    "Subscriptions",
    "Tech Gadgets",
    "Home Decor",
    "Fashion/Clothing",
  ];

  const ageRangeOptions = [
    "Under 12",
    "12-17",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65+",
  ];

  const shoppingPrefOptions = [
    "Local Stores",
    "Major Retailers",
    "Small Businesses",
    "Online Shopping",
    "Eco-Friendly Brands",
    "Luxury Brands",
    "Budget-Friendly",
  ];

  const urgencyOptions = [
    "Need it today",
    "Need it this week",
    "Need it this month",
    "Planning ahead (1-3 months)",
    "Just browsing",
  ];

  return (
    <div className="flex flex-col w-full bg-[#1f114be6] p-8 rounded-2xl">
      <p className="text-2xl">
        <span className="text-3xl">🎯</span>&nbsp; Tell Us About Them & We'll
        Find the Best Gift!
      </p>
      <div className="w-full h-0.5 bg-[#fffffe] my-4 opacity-30 rounded-2xl"></div>
      <Form action={"/test"}>
        <div className="flex flex-row gap-4 mt-4 mb-6">
          <button
            type="button"
            className={`px-6 py-2 border border-[#726794] rounded-2xl transition-colors duration-200 hover:bg-[#726794]/20 ${
              selectedGender === "male" ? "bg-[#726794]/40" : "bg-transparent"
            }`}
            onClick={() => setSelectedGender("male")}
          >
            Male
          </button>
          <button
            type="button"
            className={`px-6 py-2 border border-[#726794] rounded-2xl transition-colors duration-200 hover:bg-[#726794]/20 ${
              selectedGender === "female" ? "bg-[#726794]/40" : "bg-transparent"
            }`}
            onClick={() => setSelectedGender("female")}
          >
            Female
          </button>
        </div>

        <div className="flex flex-wrap gap-y-2 gap-x-8">
          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={interestOptions}
              placeholder="Select their main interest"
              label="What are they interested in?"
              onSelect={setSelectedInterest}
              selected={selectedInterest}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={hobbyOptions}
              placeholder="Select their favorite hobby"
              label="What do they enjoy doing in their free time?"
              onSelect={setSelectedHobby}
              selected={selectedHobby}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={occasionOptions}
              placeholder="Select the occasion"
              label="What's the occasion?"
              onSelect={setSelectedOccasion}
              selected={selectedOccasion}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={budgetOptions}
              placeholder="Select your budget"
              label="What's your budget?"
              onSelect={setSelectedBudget}
              selected={selectedBudget}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={personalityOptions}
              placeholder="Select their personality type"
              label="How would you describe their personality?"
              onSelect={setSelectedPersonality}
              selected={selectedPersonality}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={giftTypeOptions}
              placeholder="Select preferred gift type"
              label="What kind of gifts do they typically like?"
              onSelect={setSelectedGiftType}
              selected={selectedGiftType}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={ageRangeOptions}
              placeholder="Select their age range"
              label="What is their age range?"
              onSelect={setSelectedAgeRange}
              selected={selectedAgeRange}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={shoppingPrefOptions}
              placeholder="Select shopping preferences"
              label="Where do you prefer to shop?"
              onSelect={setSelectedShoppingPref}
              selected={selectedShoppingPref}
            />
          </div>

          <div className="w-32 md:w-[calc(40%-0.5rem)]">
            <Dropdown
              options={urgencyOptions}
              placeholder="Select when you need it"
              label="How soon do you need this gift?"
              onSelect={setSelectedUrgency}
              selected={selectedUrgency}
            />
          </div>
        </div>

        <div className="mt-8 flex">
          <button
            type="submit"
            className="px-8 py-3 bg-[#fd952c] rounded-2xl text-lg font-medium text-white hover:bg-[#fd952c]/80 hover:cursor-pointer transition-colors duration-200 shadow-lg"
          >
            🔮 Reveal the Perfect Gift!
          </button>
        </div>
      </Form>
    </div>
  );
};

export default GiftForm;
