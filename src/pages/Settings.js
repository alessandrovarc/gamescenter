import React from "react";

function Settings() {
  return (
    <>
      <main className="mainSettings mb-5">
        <div class="col col-sm-6 m-auto">
          <h1 className="mt-5 fw-normal text-white">Account</h1>
          <hr />
        </div>
        <div class="col col-sm-6 m-auto">
          <div className="d-flex align-content-center justify-content-between mb-2">
            <p className="mb-1 text-white">student@strive.school</p>
            <p className="text-primary mb-0">Change account email</p>
          </div>
          <div className="d-flex align-content-center justify-content-between mb-2">
            <p className="mb-1 text-white">Password: ********</p>
            <p className="text-primary mb-0">Change password</p>
          </div>
          <hr className="my-2" />
        </div>
      </main>
    </>
  );
}

export default Settings;
