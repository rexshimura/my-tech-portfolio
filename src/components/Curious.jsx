import React from 'react';
import Stack from './Stack';
import TextType from './TextType';

export default function Curious({ isOpen, onClose }) {
  if (!isOpen) return null;

  const images = [
    '/id/me.jpg',
    '/id/me3.jpg'
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 animate-in fade-in duration-500"
      onClick={onClose}
    >

      {/* BLURRED BACKGROUND */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-xl" />

      {/* POPUP CONTENT */}
      <div
        className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >

        {/* IMAGE STACK */}
        <div className="relative h-[500px] w-full max-w-[420px]">

          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cards={images.map((src, index) => (

              <img
                key={index}
                src={src}
                alt={`Profile image ${index + 1}`}
                className="pointer-events-none h-full w-full object-contain"
              />

            ))}
          />

        </div>

        {/* ANIMATED TEXT */}
        <div className="mt-10 min-h-[50px] text-center text-xl font-bold tracking-tight text-white drop-shadow-lg md:text-3xl">

          <TextType
            text={[
              'do i look handsome?',
              'just kidding.. i know i know..',
              'am i cute?',
              'nope nvm T_T'
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={35}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-blue-400"
            loop={true}
          />

        </div>

      </div>

    </div>
  );
}
