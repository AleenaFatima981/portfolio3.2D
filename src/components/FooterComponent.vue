<template>

    <footer class="amazing-footer">
  
      <div class="footer-content">
  
        <div class="footer-section">
  
          <h4>About Me</h4>
  
          <p>
  
            I am passionate web designer dedicated to
  
            creating the best web experiences.
  
          </p>
  
        </div>
  
        
  
        <div class="footer-section">
  
          <h4>Contact Info</h4>
  
          <p> 1 Street, Canberra</p>
  
          <p>+61 234 567 890</p>
  
          <p>aleenaf281@gmail.com</p>
  
        </div>
  
      </div>
  
      <div class="footer-bottom">
  
        <p>&copy; 2023. All rights reserved.</p>
  
      </div>
  
    </footer>
  
  </template>
  
   
  
  <script setup>
  
  
  
  </script>
  
   
  
  <style scoped>
  
  .amazing-footer {
  
    background-color: #161e3f;
  
    color: #ecf0f1;
  
    padding: 40px 0;
  
    font-family: "Arial", sans-serif;
  
  }
  
   
  
  .footer-content {
  
    display: flex;
  
    justify-content: space-between;
  
    max-width: 1200px;
  
    margin: 0 auto;
  
    padding: 0 20px;
  
  }
  
   
  
  .footer-section {
  
    flex: 1;
  
    margin-right: 20px;
  
  }
  
   
  
  .footer-section:last-child {
  
    margin-right: 0;
  
  }
  
   
  
  .footer-section h4 {
  
    border-bottom: 2px solid #e74c3c;
  
    padding-bottom: 10px;
  
    margin-bottom: 20px;
  
  }
  
   
  
  .footer-section p,
  
  .footer-section li {
  
    margin-bottom: 10px;
  
  }
  
   
  
  .footer-section a {
  
    color: #ecf0f1;
  
    text-decoration: none;
  
    transition: color 0.3s;
  
  }
  
   
  
  .footer-section a:hover {
  
    color: #e74c3c;
  
  }
  
   
  
  .footer-bottom {
  
    text-align: center;
  
    margin-top: 40px;
  
    border-top: 1px solid #34495e;
  
    padding-top: 20px;
  
  }
  
   
  
 
  
  .fas {
  
    margin-right: 10px;
  
  }
  .footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  margin-right: 20px;
}

/* Tablet version */
@media (max-width: 992px) {
  .footer-content {
    /* Adjust any specific styles for tablet size, if needed */
  }
}

/* Mobile version: Flex direction column makes footer sections stack on top of each other. */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
  
  </style>
  
   

  





  