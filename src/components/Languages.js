const Languages = () => {
    const languages = ["English - Fluent", "Spanish - Intermediate", "Japanese - Beginner"];

    return ( 
        <div className="languages">
            <h1>Languages</h1>
            <hr />
            <ul>{languages.map((lang, index) => (
                <li key={index}>{lang}</li> 
            ))}</ul>
        </div>
    );
}
 
export default Languages;