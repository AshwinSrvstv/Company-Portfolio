const chatbotButton = document.getElementById("chatbot-button");
    const chatbot = document.getElementById("chatbot");
    const closeChatbot = document.getElementById("close-chatbot");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");

    // Create an example message area
    const chatbotExample = document.createElement("div");
    chatbotExample.style.padding = "10px";
    chatbotExample.style.margin = "10px";
    chatbotExample.style.background = "#f8f9fa";
    chatbotExample.style.border = "1px solid #ddd";
    chatbotExample.style.borderRadius = "5px";
    chatbotExample.style.color = "#333";
    chatbotExample.style.fontSize = "14px";
    chatbotExample.innerHTML = "Example questions:<br>- Hello<br>- What services do you offer?<br>- How can I contact you?";
    chatbotMessages.appendChild(chatbotExample);
  
    chatbotButton.addEventListener("click", () => {
      chatbot.style.display = "flex";
    });
  
    closeChatbot.addEventListener("click", () => {
      chatbot.style.display = "none";
    });
  
    chatbotSend.addEventListener("click", () => {
      let userMessage = chatbotInput.value.trim();
      if (userMessage !== "") {
        addMessage("You: " + userMessage, "user");
        chatbotInput.value = "";
        setTimeout(() => getBotResponse(userMessage), 1000);
      }
    });
  
    function addMessage(text, sender) {
      let messageDiv = document.createElement("div");
      messageDiv.textContent = text;
      messageDiv.style.padding = "5px";
      messageDiv.style.margin = "5px 0";
      messageDiv.style.borderRadius = "5px";
      messageDiv.style.width = "fit-content";
      
      if (sender === "user") {
        messageDiv.style.background = "#007bff";
        messageDiv.style.color = "#fff";
        messageDiv.style.alignSelf = "flex-end";
      } else {
        messageDiv.style.background = "#ddd";
        messageDiv.style.color = "#333";
        messageDiv.style.alignSelf = "flex-start";
      }
  
      chatbotMessages.appendChild(messageDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  
    function getBotResponse(message) {
      let response;
      message = message.toLowerCase();
      
      if (message.includes("hello") || message.includes("hi")) {
        response = "Hello! How can I assist you today?";
      } else if (message.includes("services")) {
        response = "We offer web development, mobile app development, AI solutions, and more!";
      } else if (message.includes("contact")) {
        response = "You can reach us at ashwinprofessional09@gmail.com or call +9919919767.";
      } else {
        response = "I'm not sure, but our team would be happy to assist you!";
      }
  
      addMessage("Bot: " + response, "bot");
    }


    let Navbar = document.querySelector('.navbar');
    let Fabars = document.querySelector('.fa-bars');
    
    Fabars.onclick = () =>{
        Navbar.classList.toggle("active")
    };
    
    
    
    
    var swiper = new Swiper(".home-slid", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    
    
    
    var swiper = new Swiper(".team-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          "0": {
            slidesPerView: 1,
            autoplay:{
                delay:700,
                disableOnInteraction:false,
            },
          },
          "768": {
            slidesPerView: 2,
              
          },
          "1020": {
            slidesPerView: 3,
              
          },
        },
      });