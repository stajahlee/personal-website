"use client";
import Snowfall from "../../components/snowfall";
import { useState } from "react";

const BLANKS = [
  { id: 1, label: "Adjective", example: "slippery" },
  { id: 2, label: "Adjective", example: "crusty" },
  { id: 3, label: "Adjective", example: "hairy" },
  { id: 4, label: "Animal", example: "walrus" },
  { id: 5, label: "Random objects (plural)", example: "snorkels" },
  { id: 6, label: "Present tense verb", example: "hug" },
  { id: 7, label: "Verb ending in \"ING\"", example: "sleeping" },
  { id: 8, label: "Style of music", example: "bebop" },
  { id: 9, label: "Random object", example: "rubber chicken" },
  { id: 10, label: "Type of material", example: "cardboard" },
  { id: 11, label: "Random object", example: "banana peel" },
  { id: 12, label: "Type of material", example: "velvet" },
  { id: 13, label: "Adjective", example: "squishy" },
  { id: 14, label: "Past tense verb", example: "burped" },
  { id: 15, label: "Present tense verb", example: "dance" },
  { id: 16, label: "Random object", example: "spatula" },
  { id: 17, label: "Random objects (plural)", example: "pogo sticks" },
  { id: 18, label: "Random objects (plural)", example: "whoopee cushions" },
  { id: 19, label: "Animals (plural)", example: "llamas" },
  { id: 20, label: "Present tense verb", example: "twirl" },
];

export default function MadLibsPage() {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [showStory, setShowStory] = useState(false);

  const handleInputChange = (id: number, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const allFilled = BLANKS.every((blank) => inputs[blank.id]?.trim());

  const getWord = (id: number) => {
    return inputs[id] || `[${BLANKS.find((b) => b.id === id)?.label}]`;
  };

  const handleReset = () => {
    setInputs({});
    setShowStory(false);
  };

  const handleFillExamples = () => {
    const newInputs: Record<number, string> = {};
    BLANKS.forEach((blank) => {
      newInputs[blank.id] = blank.example;
    });
    setInputs(newInputs);
  };

  return (
    <div>
      <Snowfall snowflakeCount={150} speed={1} wind={0.3} />

      <div className="container flex flex-col items-center min-h-screen p-6 mx-auto gap-8">
        <h1 className="text-zinc-100 z-10 xl:text-5xl sm:text-3xl text-2xl font-display text-center mt-8">
          🎄 Christmas Mad Libs 🎄
        </h1>

        {!showStory ? (
          <>
            <p className="text-zinc-400 text-center max-w-lg">
              Fill in the blanks below, then click &quot;Show Story&quot; to see your Christmas tale!
            </p>

            <div className="grid grid-cols-1 gap-4 w-full max-w-4xl text-md ">
              {BLANKS.map((blank) => (
                <div key={blank.id} className="flex flex-col gap-1">
                  <label className="text-zinc-400 text-lg">
                    {blank.id}. {blank.label} (e.g., {blank.example})
                  </label>
                  <input
                    type="text"
                    value={inputs[blank.id] || ""}
                    onChange={(e) => handleInputChange(blank.id, e.target.value)}
                    className="italic bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder={blank.label}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowStory(true)}
              disabled={!allFilled}
              className={`mt-4 px-8 py-4 font-display text-xl rounded-xl transition-colors duration-200 ${
                allFilled
                  ? "bg-green-600 hover:bg-green-500 text-white cursor-pointer"
                  : "bg-zinc-700 text-zinc-500 cursor-not-allowed"
              }`}
            >
              Show Story
            </button>

            <button
              onClick={handleFillExamples}
              className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-display text-sm rounded-xl transition-colors duration-200"
            >
              Fill with Examples
            </button>
          </>
        ) : (
          <>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 max-w-3xl text-zinc-200 leading-relaxed text-lg">
              <p className="mb-4">
                Christmas was supposed to be the most{" "}
                <span className="text-green-400 font-bold">{getWord(1)}</span>{" "}
                 time of the year. But Charlie Brown couldn&apos;t shake his{" "}
                <span className="text-green-400 font-bold">{getWord(2)}</span>{" "}
                feelings. Everywhere he turned, he was bombarded with{" "}
                <span className="text-green-400 font-bold">{getWord(3)}</span>{" "}
                decorations. Even his beloved {" "}
                <span className="text-green-400 font-bold">{getWord(4)}</span>{" "}
                Snoopy was swept up in the commercialism of Christmas, as he hastily strung{" "}
                <span className="text-green-400 font-bold">{getWord(5)}</span>{" "}
                on his home.
              </p>

              <p className="mb-4">
                Hoping to{" "}
                <span className="text-green-400 font-bold">{getWord(6)}</span>{" "}
                his spirit, Lucy suggested that Charlie Brown direct the school play. 
                But the modern{" "}
                <span className="text-green-400 font-bold">{getWord(7)}</span>{" "}
                and{" "}
                <span className="text-green-400 font-bold">{getWord(8)}</span>{" "}
                music only served to reinforce his disillusionment. 
              </p>

              <p className="mb-4">
                So Lucy charged Charlie Brown and Linus (a boy who affectionately carried his{" "}
                <span className="text-green-400 font-bold">{getWord(9)}</span>{" "}
                everywhere he went) with the task of getting a Christmas tree for the play – a big, shiny{" "}
                <span className="text-green-400 font-bold">{getWord(10)}</span>{" "}
                one, she suggested. 
              </p>
              

              <p className="mb-4">
                But once at the lot, Charlie Brown was drawn to a pitiful looking{" "}
                <span className="text-green-400 font-bold">{getWord(11)}</span>{" "}
                that was actually made out of{" "}
                <span className="text-green-400 font-bold">{getWord(12)}</span>.{" "}
                After bringing it to the school, all the kids laughed at his{" "}
                <span className="text-green-400 font-bold">{getWord(13)}</span>{" "}
                choice of a tree. Utterly dismayed, Charlie Brown wondered aloud what Christmas was all about.
              </p>

              <p className="mb-4">
                So Linus asked for the lights to be{" "}
                <span className="text-green-400 font-bold">{getWord(14)}</span>,{" "}
                 and he recited the scriptures that spoke of the birth of Jesus. Encouraged by this news, Charlie Brown took his tree home to {" "}
                <span className="text-green-400 font-bold">{getWord(15)}</span>{" "}
                it. But when he placed just one{" "}
                <span className="text-green-400 font-bold">{getWord(16)}</span>{" "}
                on its bough, it slumped over. 
              </p>

              <p className="mb-4">
                Fortunately, the kids from the play came along, and they took all the{" "}
                <span className="text-green-400 font-bold">{getWord(17)}</span>
                {" "}and{" "}
                <span className="text-green-400 font-bold">{getWord(18)}</span>{" "}
                off of Snoopy&apos;s house and decorated the tree. Charlie Brown couldn&apos;t believe his eyes! 
                
                
                Overwhelmed with the true spirit of Christmas, together they joyfully sang, &quot;Hark! The Herald {" "}
                <span className="text-green-400 font-bold">{getWord(19)}</span>{" "}
                <span className="text-green-400 font-bold">{getWord(20)}</span>.&quot;
              
              </p>

              <p className="mt-6 text-center text-zinc-400 italic">The End 🎄</p>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-display text-xl rounded-xl transition-colors duration-200"
            >
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
