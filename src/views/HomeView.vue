
<template>
  <section class="home-page">
    <!-- Blog Menu -->
  
    <div class="profile-circle">
      <img src="https://th.bing.com/th/id/R.bc33a7451888302ffcda0079b99eb573?rik=klmIVZEATnrMcw&pid=ImgRaw&r=0" alt="Your Name">
    </div>
    <div class="home-content">
      <button @click="show = !show">Going Away?</button>
     <Transition name="fade">
     <h1 v-if="show">Welcome to My Space!</h1>
     </Transition>
      <h2>I'm Aleena Fatima. Let's dive into my world.</h2>
      <button class="connect-button"><a href="https://www.linkedin.com/in/aleena-fatima-293996172">Connect with me</a></button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(true);
    return { show };
  },
  methods: {
    scrollToAbout() {
      const aboutSection = document.getElementById("about-me");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg,#c2e9fb, #4a90e2, #0f3570  );
  color: #fcfcfc; 
}

.blog-menu {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.blog-menu a {
  color: #4a90e2; 
  text-decoration: none;
  margin-left: 20px;
  font-weight: bold;
  transition: color 0.3s;
}

.blog-menu a:hover {
  color: #0078d4; 
  text-decoration: underline;
}

.profile-circle {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 8px solid #1b2229;
  box-shadow: 0 0 15px rgba(37, 41, 47, 0.7); /* Softens the box shadow */
}

.profile-circle img {
  width: 100%;
  height: 100%;
}

.home-content {
  text-align: center;
  margin-top: 20px;
}

.home-content h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #4a90e2; /* Adds a subtle text shadow */
}

.connect-button {
  background-color: #f7f8fa; /* Changes button background color */
  color: #fff; /* Changes button text color to white */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.connect-button:hover {
  background-color: #0078d4; /* Change button color on hover */
}

.connect-button {
  background-color: #f7f8fa; /* Changes button background color */
  color: #1b2229; /* Changed text color for better visibility */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.connect-button:hover {
  background-color: #09121a; /* Changse button color on hover */
}
</style>
