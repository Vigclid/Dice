import {useEffect, useState} from "react";

const lesson = [
    {
        id : 1,
        name : "ReactJS cơ bản"
    },
    {
        id : 2,
        name : "NodeJs cơ bản"
    },
    {
        id : 3,
        name : "Javascript cơ bản"
    }
]

const FakeChatApp = () => {

    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {

        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`,handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    },[lessonId])


    return (
        <div>
            <ul>
                {lesson.map((item) => (
                    <li key={item.id}
                        style={{
                            color : lessonId === item.id ?  "red" : "green" ,
                        }}
                        onClick={() => setLessonId(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FakeChatApp;