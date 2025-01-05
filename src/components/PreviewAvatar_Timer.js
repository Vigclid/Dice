import { useEffect, useState } from "react";

const Toggle2 = () => {
    const [countdown, setCountdown] = useState(180);
    const [avatar, setAvatar] = useState();


    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(prev => {
                const newCountdown = prev - 1;
                if (newCountdown <= 0) {
                    clearInterval(intervalId); // Dừng interval khi countdown về 0
                    return 0;
                }
                return newCountdown;
            });
        }, 1000);

        return () => clearInterval(intervalId); // Dừng interval khi component unmount
    }, []);
    console.log(countdown);
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }
    return (
        <div>
            <h1>{countdown}</h1>
            <input
            type="file"
            onChange={(e) => handlePreviewAvatar(e)}
            />

            {avatar && (
                <img className="avatar" src={avatar.preview} alt="avatar" width="10%"/>
            )}
        </div>
    );
};

export default Toggle2;