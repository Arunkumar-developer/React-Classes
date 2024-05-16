// import { useState } from "react"


// const UseStateTodo = ()=>{
//     const [Bike,setBike] = useState(["Pulsor","BMW"])
//     const addBike=()=>{
//         const newBike = [...Bike,"New Bike"]
//         setBike(newBike)
//     }
//     return(
//         <>
//         <h3>Bike</h3>
//         <button onClick={addBike}>Add Bikes</button>
//         {
//             Bike.map((value,index)=><h4 key={index}>{value}</h4>)
//         }
//         </>
//     )
// }
// export default UseStateTodo;


// import { useState } from "react";

// const UseStateTodo = () => {
//     const [Bike, setBike] = useState(["Pulsor", "BMW"]);

//     const addBike = () => {
//         const newBike = prompt("Enter the name of the new bike:");
//         if (newBike) {
//             const updatedBikes = [...Bike, newBike];
//             setBike(updatedBikes);
//         }
//     };

//     return (
//         <>
//             <h1>Bikes</h1>
//             <button onClick={addBike}>Add Bike</button>
//             {
//                 Bike.map((value, index) => <h4 key={index}>{value}</h4> )
//             }
//         </>
//     );
// };

// export default UseStateTodo;

import { useState } from "react";

const UseStateTodo = () => {
    const [Bike, setBike] = useState(["Pulsor", "BMW"]);

    const addBike = () => {
        const newBike = prompt("Enter the name of the new bike:");
        if (newBike) {
            const updatedBikes = [...Bike, newBike];
            setBike(updatedBikes);
        }
    };

    const deleteBike = (index) => {
        const updatedBikes = Bike.filter((_, i) => i !== index);
        setBike(updatedBikes);
    };
    return (
        <>
        <h1>Bikes</h1>
        <button onClick={addBike}>Add Bike</button>
        {
        Bike.map((value, index) => ( <div key={index}> <h4>{value}</h4>
        <button onClick={() => deleteBike(index)}>Delete</button>
        </div>
        ))
        }
        </>
    );
};

export default UseStateTodo;
