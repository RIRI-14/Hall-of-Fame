import React from "react";
import './personal.css';
import NavBar from "../components/Navbar";

const edit = () => {
  return (
    <>

    <NavBar />

      <div className='details'>
        {/* <h3 class="mb-2 text-primary">Personal Details</h3> */}
  
        <div className='info'>
          <div class="name">
            <label for="fullName">Full Name   </label>
            <input type="text" class="form-control" id="fullName" placeholder="Enter full name" />
          </div>
          <div class="year">
            <label for="year">Year  </label>
            <input type="text" class="form-control" id="year" placeholder="Enter year(First/Second/Third/Fourth)" />
          </div>
          <div class="branch">
            <label for="branch">Branch  </label>
            <input type="text" class="form-control" id="branch" placeholder="Enter branch" />
          </div>
          <div class="email">
            <label for="email">Email ID   </label>
            <input type="text" class="form-control" id="email" placeholder="Enter Email ID" />
          </div>
          <div class="website">
            <label for="website">Website   </label>
            <input type="text" class="form-control" id="website" placeholder="Enter url to your Website" />
          </div>
          <div class="profile">
            <label for="profile">Profile Description   </label>
            <input type="text" class="form-control" id="profile" placeholder="Enter Profile Description" />
          </div>
          <div className='Buttons'>
            <div className="updateButton">
              <button type="submit" className="updateButtons">Update</button>
            </div>
            <div className='cancelButton'>
              <button type="submit" className="cancelButtons">Cancel</button>
            </div>

          </div>

        </div>







      </div>



    </>
  );


}

export default edit;
