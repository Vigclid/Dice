import {useEffect, useRef, useState} from "react";

const tab = ["posts","photos","albums"]

const Content = () => {
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const [show, setShow] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    },[type])


    useEffect(()=>{

        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },  [])



    return (
        <div>
            {tab.map((item, index) => (
                <button
                    onClick={() => setType(item)}
                    key={index}
                    style={item === type ? {backgroundColor: "#333", color : "#fff"} : {}}
                >{item}</button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map((post, index) => <li key={index}>{post.title}</li>)}
            </ul>

            { show && (
                <button style={{
                    position : 'fixed',
                    right : 20,
                    bottom : 20 }
                }>
                    Contract
                </button>
                )

            }
        </div>
    )
}

export default Content;