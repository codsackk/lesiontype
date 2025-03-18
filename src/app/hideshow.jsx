"use client";
import React,  {useState} from 'react';

export const useVisibility = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility1 = () => {
      setIsVisible(!isVisible);
    };
    
    const toggleVisibility2 = () => {
        setIsVisible(!isVisible);
      };
  
    return { isVisible, toggleVisibility1, toggleVisibility2 };
  };
