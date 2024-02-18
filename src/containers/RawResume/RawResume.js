import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RawResume() {

    const [pdfUrl, setPdfUrl] = useState(null);
    const drive = 'https://drive.google.com/file/d/13BGICJ6vg5_i_ZN01hJf_De0mHocpKQX/view';
    const fetchPdf = async () => {
        const fileUrl = 'https://portfolio-api-blond.vercel.app/resume'; // Replace with the actual Google Drive URL
        // const fileUrl = 'http://localhost:3000/resume';
        try {
            const response = await axios.get(fileUrl, {
                responseType: 'blob', // Important to specify the response type as 'blob'
            }); // Change this URL to your API endpoint
            const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
            let pdfUrl = URL.createObjectURL(pdfBlob);
            setPdfUrl(pdfUrl);
            if (!pdfUrl) {
                window.location = drive;
            }
        } catch (error) {
            console.error('Error downloading the file:', error);
            window.location = drive;
        }
    };
    useEffect(() => {
        const isMobile = /Mobi/i.test(window.navigator.userAgent);
        if (isMobile) {
            window.location = drive;
        } else {
            fetchPdf();
        }
    }, [])
    return (
        <div>
            {pdfUrl && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <embed
                        src={pdfUrl}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    />
                </div>
            )}
        </div>
    );
}

export default RawResume;