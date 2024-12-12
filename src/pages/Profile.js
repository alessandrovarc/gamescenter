import React from "react";

function Profile() {
  return (
    <>
      <div class="container-fluid px-lg-5">
        <main className="mainProfile">
          <div>
            <h1 className="mb-0">Edit Profile</h1>
            <hr className="mt-0" />
            <div className="row">
              <div className="col-3">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="assets/img/avatar.png"
                    alt="Profile Avatar"
                  />
                  <div
                    className="bg-dark p-1 rounded-circle border border-1 border-white px-2 position-absolute text-white"
                    style={{ left: "10px", bottom: "8px", fontSize: "8px" }}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <h6
                  className="p-2"
                  style={{ backgroundColor: "#666666", width: "90%" }}
                >
                  Strive Student
                </h6>

                <h6 className="mt-4 mb-1 colorProfileMiniTitle">Language:</h6>
                <div className="dropdown">
                  <button
                    className="btn btn-black rounded-0 border-1 border-gray1 dropdown-toggle text-white px-2 fs-6 py-1 fw-medium"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Italiano
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Español
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <hr />

                <h6 className="colorProfileMiniTitle">Maturity Settings:</h6>
                <button className="buttonProfile mb-2 px-2 py-1">
                  All maturity ratings
                </button>
                <p>Show titles of all maturity ratings for this profile.</p>
                <button className="buttonEdit py-1 mb-2">Edit</button>
                <hr />
                <h6 className="colorProfileMiniTitle">Autoplay Controls</h6>
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input bg-transparent border-gray1 rounded-0"
                    type="checkbox"
                    id="autoplayEpisodes"
                    aria-label="Autoplay next episode in a series"
                  />
                  <label htmlFor="autoplayEpisodes" className="mb-0 ms-1">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="mt-1 d-flex align-items-center">
                  <input
                    className="form-check-input bg-transparent border-gray1 rounded-0"
                    type="checkbox"
                    id="autoplayPreviews"
                    aria-label="Autoplay previews while browsing"
                  />
                  <label htmlFor="autoplayPreviews" className="mb-0 ms-1">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
              <hr className="my-4" />
              <div className="p-0 d-flex">
                <button className="buttonGray">Save</button>
                <button className="buttonGray ms-2">Cancel</button>
                <button className="deleteButtonGray ms-2">
                  Delete Profile
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
