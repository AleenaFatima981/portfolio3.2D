<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <section class="contact-page">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow p-4 contact-form">
            <h2 class="mb-4 text-center">Contact Me Form</h2>

            <div class="mb-3">
              <label for="name" class="form-label">Name:</label>
              <input v-model="name" id="name" class="form-control input-field" />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input v-model="email" id="email" class="form-control input-field" type="email" />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password:</label>
              <input v-model="password" id="password" class="form-control input-field" type="password" />
            </div>

            <div class="mb-4">
              <label for="address" class="form-label">Address:</label>
              <textarea v-model="address" id="address" class="form-control input-field" rows="4"></textarea>
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input v-model="termsAgreed" class="form-check-input" type="checkbox" id="termsAgreed" />
                <label class="form-check-label" for="termsAgreed">I agree to the terms of service</label>
              </div>
            </div>

            <div class="text-center mt-4">
              <button @click="register" :disabled="!isValid" class="btn btn-primary submit-button">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(120deg,#c2e9fb, #4a90e2, #0f3570  );
}

.card {
  width: 100%; /* Adjusted from 120% to 100% */
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.5s ease;
  background-color: white;
}

.contact-form {
  padding-right: 20px; /* Added padding on the right side */
  
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary {
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  padding: 10px 20px;
  margin-top: 10px;
  width: 100%;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.form-check-input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.input-field {
  width: 95%;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 15px;
}

.submit-button {
  padding: 15px 30px;
  font-size: 1.2rem;
}
</style>
