"use client";

import CustomButton from "@/components/CustomButton/CustomButton";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddNewReview = ({ carLink }: { carLink: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState(new Date());

  const sendReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reviewData = {
      authorName: name,
      review: review,
      date: new Date().toISOString(),
      seoUrl: carLink,
    };

    try {
      const response = await fetch("/api/reviews/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seoUrl: carLink,
          authorName: name,
          review: review,
          date: new Date().toISOString(),
        }),
      });
      if (response.ok) {
        setName("");
        setEmail("");
        setReview("");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  return (
    <div className="py-4">
      <h4 className="text-[1.5rem] text-primary">Add new review</h4>
      <form className="flex flex-col gap-2" onSubmit={sendReview}>
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            placeholder="Your name"
            className="flex-1 px-4 py-2 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="px-4 py-2 rounded-lg"
          value={review}
          cols={30}
          rows={10}
          placeholder="Your review"
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <CustomButton
          title="Add review"
          type="submit"
          containerStyles="mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark"
        />
      </form>
    </div>
  );
};

export default AddNewReview;
