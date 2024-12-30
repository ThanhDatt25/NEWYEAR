import React from 'react';
import AudioPlayer from './AudioPlayer';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AudioPlayer />
            {children}
        </div>
    );
};
