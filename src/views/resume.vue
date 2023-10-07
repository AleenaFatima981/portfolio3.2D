<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <section class="resume">
    <div class="resume-container">
      <section class="header">
        <div class="avatar-container">
          <img src="https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg" alt="Aleena Fatima" class="avatar"/>
        </div>
        <div class="header-info">
          <h1>Aleena Fatima</h1>
          <p class="subtitle">Aspiring Business Analyst</p>
        </div>
        
      </section>
  
      <section class="main-content">
        <div class="left-panel">
          <section class="personal-details">
            <h2><i class="fas fa-user"></i> Personal Details</h2>
            <ul>
              <li><i class="fas fa-envelope"></i> aleenaf281@gmail.com</li>
              <li><i class="fas fa-map-marker-alt"></i> Canberra, Australia</li>
            </ul>
          </section>
  
          <section class="skills">
            <h2><i class="fas fa-wrench"></i> Skills</h2>
            <ul>
              <li>Vue.js</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </section>
  
          <section class="education">
            <h2><i class="fas fa-graduation-cap"></i> Education</h2>
            <div class="degree">
              <h3>Deakin University</h3>
              <p class="date">6/03/23 - 29/09/25</p>
            </div>
          </section>
        </div>
  
        <div class="right-panel">
          <section class="projects">
            <h2><i class="fas fa-briefcase"></i> Projects and Research</h2>
            <div class="project">
              <h3>CSIRO Project</h3>
              <p class="date">2019</p>
              <p>Engaged children interested in STEM to contribute to CSIRO's STEM related activities.</p>
            </div>
            <div class="project">
              <h3>NASA</h3>
              <p class="date">2018</p>
              <p>Shadowed the development of cutting-edge algorithms designed for tracking asteroids. Gained insights into the intricacies of algorithm design and its application in space exploration.</p>
            </div>
            <div class="project">
              <h3>Harmful Radiation Doses for Patients Research at Canberra Hospital</h3>
              <p class="date">2018</p>
              <p>Conducted comprehensive research on harmful radiation doses. Recommended modifications in radiation dosages.</p>
            </div>
          </section>
        </div>
      </section>
    </div>
</section>
  </template>
  
  <script>
  export default {
    name: 'Resume'
  }
  </script>
  
  <style scoped>
 
  .resume-container {
    font-family: 'Segoe UI', Arial, sans-serif;
    padding: 40px;
    max-width: 1100px;
    margin: 50px auto;
    background-color: #81abc5;
    border: 1px solid #e6e6e6;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    border-radius: 10px;
  }
  
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    border-bottom: 2px solid #e6e6e6;
    padding-bottom: 40px;
  }
  
  .avatar-container {
    flex: 0 0 130px;
    width: 130px;
    height: 130px;
    margin-right: 25px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .avatar {
    width: 100%;
    height: auto;
  }
  
  .header-info h1 {
    font-size: 2em;
    margin: 0;
    color: #2d2d2d;
  }
  
  .header-info .subtitle {
    color: #707070;
    font-style: italic;
    font-size: 1em;
  }
  
  .main-content {
    display: flex;
    justify-content: space-between;
  }
  
  .left-panel, .right-panel {
    flex: 1;
    padding: 0 20px;
  }
  
  h2 {
    color: #444;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;
    margin-top: 40px;
    font-size: 1.5em;
    display: flex;
    align-items: center;
  }
  
  h2 i {
    margin-right: 10px;
    color: #007ACC;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li, .project, .degree {
    margin-bottom: 25px;
    padding-left: 20px;
    position: relative;
  }
  
  li::before, .project::before, .degree::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #007ACC;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
  
  li i, .project i, .degree i {
    margin-right: 10px;
    color: #007ACC;
  }
  
  .date {
    color: #707070;
    font-style: italic;
  }
  /* Tablet (Portrait) */
@media (min-width: 600px) {
    
}

/* Tablet (Landscape) and Small Desktops */
@media (min-width: 900px) {
    
}

/* Large Desktops */
@media (min-width: 1200px) {
    
}

/* When the screen becomes too narrow, stack the content */
@media (max-width: 768px) {
    .main-content {
        flex-direction: column-reverse;
    }

    .left-panel, .right-panel {
        padding: 0;
        margin-bottom: 30px;
    }

    .header {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .avatar-container {
        margin-right: 0;
        margin-bottom: 15px;
    }
}
  </style>
  