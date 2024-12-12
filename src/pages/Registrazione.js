import React, { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    username: ""
  })

  const handleFormDataChange = (key, value) => {
    setFormData(prev =>({...prev, [key]: value}));
  } 

  return (
    <>
      <div class="container-fluid px-lg-5">
        <main className="mainProfile">
          <div>
            <h1 className="mb-0">Registrazione</h1>
            <div class="col col-sm-6 m-auto">
                <form>
                    <hr className="mt-3" />
                    <div class="mb-3 text-start">
                        <label for="input-name" class="form-label">Nome</label>
                        <input
                          value={formData.name}
                          type="text"
                          class="form-control"
                          id="input-name"
                          placeholder="Nome"
                          onChange={(e) => handleFormDataChange("name", e.target.value)}
                        />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="input-surname" class="form-label">Cognome</label>
                        <input
                          value={formData.surname}
                          type="text"
                          class="form-control"
                          id="input-surname"
                          placeholder="Cognome" 
                          onChange={(e) => handleFormDataChange("surname", e.target.value)}
                        />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="input-username" class="form-label">Username</label>
                        <input
                          value={formData.username}
                          type="text"
                          class="form-control"
                          id="input-username"
                          placeholder="Username"
                          onChange={(e) => handleFormDataChange("username", e.target.value)}
                        />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="input-email" class="form-label" >Email address</label>
                        <input
                          value={formData.email}
                          type="email"
                          class="form-control"
                          id="input-email"
                          aria-describedby="emailHelp"
                          placeholder="name@example.com"
                          onChange={(e) => handleFormDataChange("email", e.target.value)}
                        />
                     </div>
                    <div class="mb-3 text-start">
                        <label for="input-password" class="form-label">Password</label>
                        <input
                          value={formData.password}
                          type="password"
                          class="form-control"
                          id="input-password"
                          onChange={(e) => handleFormDataChange("password", e.target.value)}
                        />
                    </div>
                    <hr className="mt-0" />
                    <button type="submit" class="btn btn-primary">Registrati!</button>
                </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Registration;
