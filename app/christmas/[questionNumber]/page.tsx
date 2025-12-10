"use client";
import { Card } from "../../components/card";
import Snowfall from "../../components/snowfall";
import { FC, useState, useEffect, Suspense } from "react";
import {
  useParams,
  notFound,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { questionsWithAnswers } from "../data/questions";
import Link from "next/link";

const AnswerCard: FC<{ answer: string; onClick: () => void }> = ({
  answer,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <Card withMotion motionColors={["#22c55e82", "#f900009a"]}>
        <div className="z-10 flex flex-col items-center">
          <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
            {answer}
          </span>
        </div>
      </Card>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

function QuestionContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const questionNumber = parseInt(params.questionNumber as string, 10);
  const currentScore = parseInt(searchParams.get("score") || "0", 10);

  // Get or initialize start time
  const startTimeParam = searchParams.get("startTime");
  const startTime = startTimeParam ? parseInt(startTimeParam, 10) : Date.now();

  // Initialize with correct elapsed time to avoid flash of 0:00
  const [elapsedTime, setElapsedTime] = useState(() =>
    Math.floor((Date.now() - startTime) / 1000),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  // Validate question number
  if (
    isNaN(questionNumber) ||
    questionNumber < 1 ||
    questionNumber > questionsWithAnswers.length
  ) {
    notFound();
  }

  const currentQuestion = questionsWithAnswers[questionNumber - 1];

  const handleAnswerClick = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === currentQuestion.answer;
    const newScore = isCorrect ? currentScore + 1 : currentScore;

    if (questionNumber < questionsWithAnswers.length) {
      router.push(
        `/christmas/${questionNumber + 1}?score=${newScore}&startTime=${startTime}`,
      );
    } else {
      // Last question - go to results page with final time
      const finalTime = Math.floor((Date.now() - startTime) / 1000);
      router.push(`/christmas/results?score=${newScore}&time=${finalTime}`);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen p-[24px] mx-auto gap-12">
      <div className="absolute top-6 left-6 text-zinc-400 font-display text-xl">
        ⏱️ {formatTime(elapsedTime)}
      </div>
      <div className="absolute top-6 right-6 text-zinc-400 font-display">
        Question {questionNumber} of {questionsWithAnswers.length}
      </div>
      <h2 className="text-zinc-100 py-3.5 px-0.5 z-10 xl:text-4xl sm:text-2xl text-lg cursor-default font-display text-balance text-center">
        {currentQuestion.question}
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
        {currentQuestion.options.map((option, index) => (
          <AnswerCard
            key={`${index}_${option}`}
            answer={option}
            onClick={() => handleAnswerClick(option)}
          />
        ))}
      </div>

      <Link
        href="/christmas/mad-libs"
        className="fixed bottom-6 left-6 text-4xl hover:scale-125 transition-transform duration-200"
        title="Christmas Mad Libs"
      >
        📖
      </Link>
    </div>
  );
}

export default function ChristmasQuestionPage() {
  return (
    <div>
      <Snowfall snowflakeCount={150} speed={1} wind={0.3} />
      <Suspense
        fallback={
          <div className="container flex items-center justify-center min-h-screen">
            <div className="text-zinc-400 text-xl">Loading...</div>
          </div>
        }
      >
        <QuestionContent />
      </Suspense>
    </div>
  );
}
