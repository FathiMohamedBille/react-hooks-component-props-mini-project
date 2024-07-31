const About = ({image, about}) => {

    // const placeholder = "https://via.placeholder.com/215"
    return ( 
        <div className="about">

            <aside>
                {
                    image ? (<img src={image} alt="blog logo" />) : 
                    (<img src="https://via.placeholder.com/215" alt="blog logo" />)
                }
                <p>{about}</p>
            </aside>
            About
        </div>
     );
}

export default About;