"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const textVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="container mx-auto px-4 pt-6 w-full h-full overflow-hidden">
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute flex gap-4 left-10 bottom-10 z-10">
          <button onClick={goToPreviousSlide}><AiOutlineArrowLeft className='text-[3rem] text-white hover:text-primary transition-all hover:-translate-x-1' /></button>
          <button onClick={goToNextSlide}><AiOutlineArrowRight className='text-[3rem] text-white hover:text-primary transition-all hover:translate-x-1' /></button>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div            
            key={currentSlide}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.div 
                variants={imageVariants}
                className="absolute inset-0"
            >
              <Image
                objectFit="cover"
                layout="fill"
                src={slide.imgUrl}
                alt={slide.title}
                quality={100}
                priority
              />
            </motion.div>

            <motion.div 
              className="relative py-[15rem] px-10"
              initial="enter"
              animate="center"
              exit="exit"
              variants={{
                enter: {opacity: 0},
                center: {
                  opacity: 1,
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.2,
                  }
                },
                exit: {opacity: 0},
              }}
            >
                <motion.h1 className="text-[4rem] text-shadow-default z-[999] font-bold text-white pb-2" variants={textVariants}>{slide.title}</motion.h1>
                <motion.p className="text-[1.5rem] text-white pb-8 font-semibold" variants={textVariants}>{slide.description}</motion.p>
                <motion.div 
                    variants={textVariants}
                    className="bg-primary text-2rem py-[10px] px-[20px] rounded-lg inline-block text-white font-semibold hover:bg-hov"
                >
                    <Link href="/">{slide.cta}</Link>
                </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
