"use client";
import Snowfall from "../../components/snowfall";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { questionsWithAnswers } from "../data/questions";

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showAnswers, setShowAnswers] = useState(false);
  const score = parseInt(searchParams.get("score") || "0", 10);
  const time = parseInt(searchParams.get("time") || "0", 10);
  const totalQuestions = questionsWithAnswers.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage === 100) return "Perfect! You're a Christmas expert! 🎅";
    if (percentage >= 80)
      return "Amazing! You really know your Christmas trivia! 🎄";
    if (percentage >= 60) return "Great job! You know your holiday facts! ⭐";
    if (percentage >= 40)
      return "Not bad! Keep learning those Christmas facts! 🎁";
    return "Time to watch more Christmas movies! 🎬";
  };

  const handlePlayAgain = () => {
    router.push("/christmas/1");
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen p-[24px] mx-auto gap-8">
      <h1 className="text-zinc-100 z-10 xl:text-5xl sm:text-3xl text-2xl font-display text-center">
        🎄 Quiz Complete! 🎄
      </h1>

      <div className="text-zinc-200 z-10 xl:text-6xl sm:text-4xl text-3xl font-display">
        {score} / {totalQuestions}
      </div>

      <div className="text-zinc-300 z-10 xl:text-3xl sm:text-2xl text-xl font-display">
        ⏱️ Time: {formatTime(time)}
      </div>

      <p className="text-zinc-400 z-10 xl:text-2xl sm:text-xl text-lg font-display text-center">
        {getMessage()}
      </p>

      <button
        onClick={handlePlayAgain}
        className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-display text-xl rounded-xl transition-colors duration-200"
      >
        Play Again
      </button>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 font-display text-lg rounded-xl transition-colors duration-200"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>

      {showAnswers && (
        <div className="w-full max-w-2xl mt-4 space-y-4">
          {questionsWithAnswers.map((q, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4"
            >
              <p className="text-zinc-400 text-sm mb-1">Question {index + 1}</p>
              <p className="text-zinc-200 mb-2">{q.question}</p>
              <p className="text-green-400 font-display">✓ {q.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChristmasResultsPage() {
  return (
    <div>
      <Snowfall snowflakeCount={150} speed={1} wind={0.3} />
      <Suspense
        fallback={
          <div className="container flex items-center justify-center min-h-screen">
            <div className="text-zinc-400 text-xl">Loading results...</div>
          </div>
        }
      >
        <ResultsContent />
      </Suspense>
    </div>
  );
}
