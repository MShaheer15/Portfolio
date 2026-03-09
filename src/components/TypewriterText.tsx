import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText = ({
  texts,
  delay = 500,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[textIndex % texts.length];

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
        // Delay before starting to type the next word
        timeout = setTimeout(() => {}, typingSpeed);
      } else {
        timeout = setTimeout(
          () => setDisplayedText((prev) => prev.slice(0, -1)),
          deletingSpeed
        );
      }
    } else {
      if (displayedText === currentText) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        const nextChar = currentText.slice(0, displayedText.length + 1);
        const delayToUse =
          displayedText === '' && textIndex === 0 ? delay : typingSpeed;
        timeout = setTimeout(() => setDisplayedText(nextChar), delayToUse);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    delay,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-flex items-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
      </motion.span>
      <motion.span
        className={`inline-block w-[4px] h-[1em] bg-primary ml-1 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ verticalAlign: 'middle', transition: 'opacity 0.1s' }}
      />
    </span>
  );
};

export default TypewriterText;
