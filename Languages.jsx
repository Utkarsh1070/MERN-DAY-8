import React from 'react';

const Languages = () => {
    let lang = ["java", "javascript", "PYTHON", "C"];
    return (
        <div>
            <h1>BEST PROGRAMMING LANGUAGES</h1>
            <ul>
                {lang.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;



// import React from 'react';

// const Languages = () => {
//     let lang = [
//         { id: 1, name: "java" },
//         { id: 2, name: "javascript" },
//         { id: 3, name: "KOTLIN" },
//         { id: 4, name: "PYTHON" },
//         { id: 5, name: "C" }
//     ];
//     var check = true;
//     return (
//         <div>
//             <h1 className={check ? "bg-info" : "bg-success text-white"}>
//                 {check ? "BEST PROGRAMMING LANGUAGE" : "TOP 5 PROGRAMMING LANGUAGES"}
//             </h1>
//             <ul>
//                 {lang.map((item) => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Languages;

