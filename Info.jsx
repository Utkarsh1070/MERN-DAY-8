const Info = (props) => {
    let { lang } = props;
    return (
        <div>
            <h1>TOP PROGRAMMING LANGUAGES</h1>
            <ul>
                {lang.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Info;
