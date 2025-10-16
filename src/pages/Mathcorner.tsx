
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const levels = {
  1: { range: [2, 4], name: "Beginner Tables (2-4)" },
  2: { range: [5, 7], name: "Intermediate Tables (5-7)" },
  3: { range: [8, 11], name: "Advanced Tables (8-11)" },
};

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Bee SVG component
const Bee = ({ animation }: { animation: any }) => (
  <motion.div
    style={{ 
      position: 'absolute', 
      width: 40, 
      height: 40, 
      willChange: 'transform, opacity',
      zIndex: 10
    }}
    initial={{ opacity: 1, scale: 1 }}
    animate={animation}
    whileHover={{ scale: 1.1 }}
  >
    <svg viewBox="0 0 200 200" style={{ transform: 'rotate(-45deg)' }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path fill="#FFC107" d="M100 20C55.8 20 20 55.8 20 100s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"/>
      <path fill="#212121" d="M100 20c-22.1 0-40 17.9-40 40h80c0-22.1-17.9-40-40-40zM100 180c22.1 0 40-17.9 40-40h-80c0 22.1 17.9 40 40 40z"/>
      <circle fill="#212121" cx="70" cy="80" r="10"/>
      <circle fill="#212121" cx="130" cy="80" r="10"/>
      <path fill="rgba(255,255,255,0.7)" d="M60 20c-20 0-30 30-10 50s40 10 50-10-10-40-40-40z" style={{ transform: 'rotate(-20deg) translate(-20px, 10px)' }}/>
      <path fill="rgba(255,255,255,0.7)" d="M140 20c20 0 30 30 10 50s-40 10-50-10 10-40 40-40z" style={{ transform: 'rotate(20deg) translate(20px, 10px)' }}/>
    </svg>
  </motion.div>
);

const cornerPositions = [
  { top: '5%', left: '5%' },   // top-left
  { top: '5%', left: '80%' },  // top-right
  { top: '70%', left: '5%' },  // bottom-left
  { top: '70%', left: '80%' }  // bottom-right
];

export default function MathCorner() {
  const [level, setLevel] = useState(1);
  const [problem, setProblem] = useState({ num1: 0, num2: 0, answer: 0 });
  const [options, setOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing'); // playing, answered
  const [beeAnimations, setBeeAnimations] = useState<any[]>([]);
  const [cornerStatus, setCornerStatus] = useState<(string | null)[]>([null, null, null, null]); // correct, incorrect

  const initializeBees = () => {
    setBeeAnimations(
      Array(5).fill(0).map((_, i) => ({
        // Start below the central question
        top: `${65 + (Math.random() - 0.5) * 5}%`, // Y-position below center
        left: `${50 + (i - 2) * 7 + (Math.random() - 0.5) * 4}%`, // Spread out horizontally
        rotate: Math.random() * 360,
        transition: { delay: Math.random() * 0.5, duration: 0.8, type: 'spring', stiffness: 50 },
      }))
    );
  };
  
  const generateProblem = useCallback(() => {
    setGameState('playing');
    setCornerStatus([null, null, null, null]);
    initializeBees();

    const [min, max] = levels[level as keyof typeof levels].range;
    const num1 = getRandomNumber(min, max);
    const num2 = getRandomNumber(min, max);
    const answer = num1 * num2;

    const generateOptions = () => {
      const choices = new Set();
      while (choices.size < 3) {
        const wrongAnswerOffset = getRandomNumber(1, 5) * (Math.random() > 0.5 ? 1 : -1);
        const wrongAnswer = answer + wrongAnswerOffset;
        if (wrongAnswer > 0 && wrongAnswer !== answer) {
          choices.add(wrongAnswer);
        }
      }
      const finalChoices = [answer, ...Array.from(choices)];
      return finalChoices.sort(() => Math.random() - 0.5);
    };

    setProblem({ num1, num2, answer });
    setOptions(generateOptions() as number[]);
  }, [level]);

  useEffect(() => {
    generateProblem();
  }, [level, generateProblem]);

  const handleAnswer = (selectedOption: number, cornerIndex: number) => {
    if (gameState !== 'playing') return;

    setGameState('answered');
    const isCorrect = selectedOption === problem.answer;
    
    // Update score
    if (isCorrect) {
      setScore(prev => prev + 10);
    } else {
      setScore(prev => Math.max(0, prev - 5));
    }

    // Set corner visual feedback
    const newCornerStatus: (string | null)[] = [null, null, null, null];
    newCornerStatus[cornerIndex] = isCorrect ? 'correct' : 'incorrect';
    if (!isCorrect) {
      const correctIndex = options.indexOf(problem.answer);
      newCornerStatus[correctIndex] = 'correct-missed';
    }
    setCornerStatus(newCornerStatus);
    
    // Animate bees to the selected corner
    const targetCorner = cornerPositions[cornerIndex];

    // Create a new animation target, ensuring conflicting properties are removed.
    const newAnimations = (prevAnims: any[]) => prevAnims.map((anim: any) => {
      const nextAnim = { ...anim };
      // Clear old position properties that might conflict (e.g., if targetCorner previously had 'right' or 'bottom')
      delete nextAnim.right;
      delete nextAnim.bottom;
      // Set new position
      nextAnim.top = targetCorner.top;
      nextAnim.left = targetCorner.left;
      nextAnim.rotate = anim.rotate + (Math.random() * 180 - 90);
      return nextAnim;
    });

    setBeeAnimations(newAnimations);

    // Schedule next actions based on answer
    if (isCorrect) {
      // Bees "live" and celebrate
      setTimeout(() => {
        // Happy wiggle animation
        setBeeAnimations(prevAnims => prevAnims.map(anim => ({
          ...anim,
          scale: [1, 1.2, 1, 1.2, 1],
          rotate: [anim.rotate, anim.rotate + 15, anim.rotate - 15, anim.rotate],
          transition: { duration: 1, repeat: 1 }
        })));
      }, 800); // After they arrive
      
      setTimeout(() => {
        generateProblem();
      }, 2800); // Total delay before new problem
    } else {
      // Bees "die" and fall down
      setTimeout(() => {
        // Dramatic death animation - bees fall down with gravity effect
        setBeeAnimations(prevAnims => prevAnims.map((anim, index) => ({
          ...anim,
          top: '120%', // Fall off the bottom of the screen
          left: anim.left, // Keep horizontal position
          rotate: [anim.rotate, anim.rotate + 180, anim.rotate + 360, anim.rotate + 720], // Multiple spins
          opacity: [1, 0.9, 0.6, 0.3, 0], // Gradual fade out
          scale: [1, 0.9, 0.7, 0.4, 0.1], // Shrink as they fall
          y: [0, 50, 100, 150, 200], // Add vertical movement for gravity
          transition: { 
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for realistic fall
            delay: index * 0.1 // Stagger the deaths slightly
          }
        })));
      }, 1000); // Wait 1s for them to fly to the corner before dying

      setTimeout(() => {
        generateProblem();
      }, 3200); // 1s fly + 1.5s fall + 0.7s pause
    }
  };

  const getCornerClass = (status: string | null) => {
    switch(status) {
      case 'correct': return 'bg-green-500 border-green-700 text-white animate-pulse';
      case 'incorrect': return 'bg-red-500 border-red-700 text-white';
      case 'correct-missed': return 'bg-green-300 border-green-500';
      default: return 'bg-yellow-300 border-yellow-500 hover:bg-yellow-400 hover:scale-105';
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-sky-100 to-green-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <BrainCircuit className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Math Corner</h1>
          <p className="text-xl text-gray-600 mb-8">Sharpen your multiplication skills!</p>
          
          {/* Dedication Highlight */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-purple-700 text-sm">
              This game is dedicated to my student <span className="font-semibold">'S'</span> who came up with the idea and inspired its creation.✨
            </p>
          </div>
        </div>

        <Card className="border-none shadow-2xl rounded-3xl">
          <CardHeader className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-t-3xl">
            <CardTitle>Level Select</CardTitle>
            <div className="flex items-center gap-2 p-1 bg-gray-200 rounded-full mt-4 md:mt-0">
              {Object.keys(levels).map((levelKey) => (
                <Button key={levelKey} onClick={() => {
                  const numLevel = parseInt(levelKey);
                  if (numLevel === 1 || numLevel === 2 || numLevel === 3) {
                    setLevel(numLevel);
                  }
                }} className={`rounded-full transition-all duration-300 ${level === parseInt(levelKey) ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md" : "bg-transparent text-gray-600 hover:bg-gray-300"}`} size="sm">
                  {levels[levelKey as keyof typeof levels].name}
                </Button>
              ))}
            </div>
             <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold mt-4 md:mt-0">
              <Star className="w-5 h-5 text-yellow-500" />
              Score: {score}
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <p className="text-center text-lg text-gray-700 mb-4 font-semibold">Rush all the bees into the right flower!</p>

            <div className="relative aspect-[4/3] w-full max-w-3xl mx-auto bg-gradient-to-br from-sky-300 to-green-300 rounded-2xl overflow-hidden shadow-inner">
              {/* Bees */}
              {beeAnimations.map((anim, i) => (
                <Bee key={i} animation={anim} />
              ))}

              {/* Central Problem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-8 rounded-full shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={problem.num1 + problem.num2 + problem.answer}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-7xl font-bold text-gray-800 tracking-wider"
                  >
                    {problem.num1} &times; {problem.num2}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Answer Corners (Flowers) */}
              {options.map((option, index) => (
                <div key={index} className="absolute p-2" style={cornerPositions[index]}>
                  <motion.button
                    onClick={() => handleAnswer(option, index)}
                    disabled={gameState !== 'playing'}
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 shadow-lg flex items-center justify-center text-3xl md:text-4xl font-bold transition-all duration-300 ${getCornerClass(cornerStatus[index])}`}
                    whileHover={gameState === 'playing' ? { scale: 1.1 } : {}}
                    whileTap={gameState === 'playing' ? { scale: 0.9 } : {}}
                  >
                    {option}
                  </motion.button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
