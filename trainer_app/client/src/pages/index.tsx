import { useState } from "react";

function ListTrainer() {
    const [trainers, setTrainers] = useState([
        { "name": "neel", "skills": "java", "photo": "", "status": "Active" },
        { "name": "niru", "skills": "C++", "photo": "", "status": "Active" }

    ])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Skills</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map((trainer) => {
                        return <>
                            <tr>
                                <th scope="row">{trainer.name}</th>
                                <td>{trainer.skills}</td>
                                <td>{trainer.photo}</td>
                                <td>{trainer.status}</td>
                            </tr>
                        </>
                    }
                    )}


                </tbody>
            </table>
        </>
    )
}
export default ListTrainer;
//export can be used to  other module