import React, { useEffect } from 'react';

const RawResume = () => {
    useEffect(() => {
        const googleDriveURL = 'https://drive.google.com/file/d/13BGICJ6vg5_i_ZN01hJf_De0mHocpKQX/view';
        window.location.replace(googleDriveURL);
    }, []);

    return <div>Redirecting...</div>;
};

export default RawResume;