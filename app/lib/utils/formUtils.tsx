"use client"

import { ReactElement, useState } from "react";

export function formComponent(steps: ReactElement[]){
    const [currentStepindex, setCurrentStepIndex] = useState(0)

    function goForward() {
        setCurrentStepIndex(i => {
            if(i >= steps.length -1) return i
            return i + 1
        })
    }

    function goBack() {
        setCurrentStepIndex(i => {
            if(i <= 0) return i
            return i - 1
        })
    }

    function goTo(index: number) {
        setCurrentStepIndex(index)
    }

    return{
        currentStepindex,
        step: steps[currentStepindex],
        steps,
        isFirst: currentStepindex === 0,
        isLast: currentStepindex === steps.length - 1,
        goTo,
        goForward,
        goBack,
    }
}