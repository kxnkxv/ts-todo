import {FC} from 'react';

const About: FC = () => {
    return (
        <iframe
            src="https://www.youtube.com/embed/DLzxrzFCyOs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
            }}
        />
    );
};

export default About;