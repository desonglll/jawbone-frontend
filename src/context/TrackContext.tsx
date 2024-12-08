import React, {createContext, useState, useContext, ReactNode} from "react";

// 定义 Context 类型
interface TrackContextType {
    trackSrc: string;
    setTrackSrc: (src: string) => void;
}

// 创建 Context
const TrackContext = createContext<TrackContextType | undefined>(undefined);

// Provider 组件
export const TrackProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [trackSrc, setTrackSrc] = useState<string>("");

    return (
        <TrackContext.Provider value={{trackSrc, setTrackSrc}}>
            {children}
        </TrackContext.Provider>
    );
};

// 自定义 Hook 用于消费 Context
export const useTrack = () => {
    const context = useContext(TrackContext);
    if (!context) {
        throw new Error("useTrack must be used within a TrackProvider");
    }
    return context;
};

export default TrackContext;
