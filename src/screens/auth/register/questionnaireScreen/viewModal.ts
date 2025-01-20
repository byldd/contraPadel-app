import {View, Text} from 'react-native';
import React, {useState} from 'react';

export const useQuestionnaireViewModal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      question: 'How many players are there in a standard Padel match?',
      options: ['2', '4', '6', '8'],
    },
    {
      question: 'What is the maximum height a serve can be hit in Padel?',
      options: [
        'Below the waist',
        'Below the knee',
        'At shoulder height',
        'Any height',
      ],
    },
    {
      question: 'What is the standard size of a Padel court?',
      options: ['20m x 10m', '30m x 15m', '40m x 20m', '25m x 12m'],
    },
    {
      question: 'What is the scoring system used in Padel?',
      options: [
        'Points system (1, 2, 3)',
        'Tennis-style scoring (15, 30, 40)',
        'Set system (5, 10, 15)',
        'Straight numerical scoring',
      ],
    },
    {
      question: 'What material is a Padel racket typically made from?',
      options: [
        'Metal',
        'Wood',
        'Carbon fiber or composite materials',
        'Plastic',
      ],
    },
  ];

  return {questions, currentQuestion, setCurrentQuestion};
};
