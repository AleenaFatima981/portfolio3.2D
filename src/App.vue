<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="nav-container">
    <input type="checkbox" id="menu-toggle" class="menu-toggle" />
    <label for="menu-toggle" class="dropdown-btn">Menu</label>
    <div class="links-container">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      
      <RouterLink class="nav-link" to="/ContactUs">Contact Me</RouterLink>
      <RouterLink class="nav-link" to="/blog">Blog</RouterLink> 
      <RouterLink class="nav-link" to="/resume">Resume</RouterLink> 
      
    </div>
  </div>

  <div class="page-container">
    <div class="content-wrapper">
      
      <RouterView />
    </div>
    <footer class="amazing-footer">
      
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* This ensures the container takes at least the full height of the viewport */
}

.content-wrapper {
  flex: 1; /* This makes the content take up all available space, pushing the footer to the bottom */
}

.nav-container {
  display: flex;
  justify-content: center;
  background-color: #161e3f; /* Change the background color to match the blue color scheme */
  padding: 10px 0;
  position: relative;
  flex-wrap: wrap;
  animation: slideInTop 0.5s ease; /* Add a sliding animation from the top */
}

@keyframes slideInTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.nav-link {
  text-decoration: none;
  color: #fff; /* Change link text color to white */
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.1em;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: #0078d4; /* Change link background color on hover */
  color: #fff; /* Change link text color on hover */
}

.router-link-active {
  color: #eef1f3e9;
  background-color: #5a9abd55;
  border-radius: 4px;
}

/* Mobile styles */
.menu-toggle {
  display: none; /* hide the checkbox */
}

.dropdown-btn {
  display: none;
  background-color: #afcdea;
  color: #ecf0f1;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.links-container {
  display: flex;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .dropdown-btn {
    display: block;
  }

  .links-container {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #2c3e50;
  }

  .menu-toggle:checked + .dropdown-btn + .links-container {
    display: flex;
  }
}
</style>
