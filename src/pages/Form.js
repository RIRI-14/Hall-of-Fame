import React, { useState, setState } from 'react';
import './form.css'
// import trophy from '../images/trophy.png';
import Select from 'react-select';
import Footer from '../components/Footer';

function Form() {

    const [team, setTeam] = useState(null);
    const [Achievement_cat, setAchievement_cat] = useState([]);
    const [year, setYear] = useState(null);
    const [achievement, setAchievement] = useState(null);


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "team") {
            setTeam(value);
        }
        // if (id === "setAchievement_cat") {
        //     setAchievement_cat(value);
        // }


        if (id === "year") {
            setYear(value);
        }
        if (id === "achievement") {
            setAchievement(value);
        }

    }

    const handleSelect = (event) => {
        const { value } = event.target.value;
        setAchievement_cat(value);
    };


    const handleSubmit = () => {
        console.log(team, Achievement_cat, year, achievement);
    }

    const handleCancel = () => {
        <link to="/Dashboard" />
    }

    return (
        <>
            <div className="form">
                <div className="form-body">
                    {/* <div className="username">
                    <label className="form__label" for="firstName">Name </label>
                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="Name" />
                </div> */}



                    <div className="Achievement_cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                    <label className="form__label" for="Achievement_cat">Achievement Category </label>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4  form__input" id="Achievement_cat" value={Achievement_cat} onChange={(e) => handleSelect(e)}>
                                    <Select options={achievementTypes} />
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>



                    <div className="year">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                    <label className="form__label" for="Year">Year </label>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4 " >
                                    <input type="year" id="year" className="form__input" value={year} onChange={(e) => handleInputChange(e)} placeholder="Year e.g. 1 OR 2" />
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="year">
                    <label className="form__label" for="Year">Year </label>
                    <input type="year" id="year" className="form__input" value={year} onChange={(e) => handleInputChange(e)} placeholder="Year e.g. 1 OR 2" />



                </div> */}


                    <div className="team">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                    <label className="form__label" for="team">Team event? </label>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4"  >
                                    <input className="form__input" type="text" value={team} onChange={(e) => handleInputChange(e)} id="team" placeholder="Was this a team event? Y/N" />
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="team">
                        <label className="form__label" for="team">Team event? </label>
                        <input className="form__input" type="text" value={team} onChange={(e) => handleInputChange(e)} id="team" placeholder="Was this a team event? Y/N" />
                    </div> */}



                    <div className="achievement">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                <label className="form__label" for="achievement">Achievement description </label>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4"  >
                                <input className="form__input" type="textarea" id="achievement" value={achievement} onChange={(e) => handleInputChange(e)} placeholder="describe your Achievement " />
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>



                    {/* <div className="achievement">
                        <label className="form__label" for="achievement">Achievement description </label>
                        <input className="form__input" type="textarea" id="achievement" value={achievement} onChange={(e) => handleInputChange(e)} placeholder="describe your Achievement " />
                    </div> */}

                    {/* <div className="upload">
                    <label className="form__label" for="Achievement_Image">Add picture of your Achievement </label>
                    <img src={trophy} width={100} height={100} alt="Achievement Image" />
                    <input type="file" />
                    <i className="fa fa-camera" style={{ color: "#fff" }} />
                </div> */}


                </div>
                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" class="btn">Submit</button>
                    <button onClick={() => handleCancel()} type="Cancel" class="btn">Cancel</button>
                </div>


            </div>
            {/* < Footer /> */}
        </>

    )
}

const achievementTypes = [
    { label: "Hackathon", value: "Hackathon" },
    { label: "Research", value: "Research" },
    { label: "Coding Contest", value: "Coding Contest" },
    { label: "Scholarship", value: "Scholarship" },
    { label: "Technical programs", value: "Technical programs" },
    { label: "Quiz", value: "Quiz" },
    { label: "Internship", value: "Internship" },
    { label: "Speaker @ conference", value: "Speaker @ conference" },
    { label: "Placement", value: "Placement" },
    { label: "Non-Technical", value: "Non-Technical" },
];

export default Form