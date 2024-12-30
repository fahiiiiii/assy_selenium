// components/MyComponent.tsx
"use client";
import React, { useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string | null>(null);

    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, []);

    return (
        <>
        </>
    );
};

export default MyComponent;