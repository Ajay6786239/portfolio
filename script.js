document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init('4gPTsBr2VALGFiTJJ'); // Replace with your EmailJS User ID

    const btn = document.getElementById('button');
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        btn.textContent = 'Sending...'; // Update button text

        const serviceID = 'service_eo778ag'; // Your EmailJS service ID
        const templateID = 'template_cvjnmbj'; // Your EmailJS template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Send Message'; // Reset button text
                alert('Sent!');
                form.reset(); // Clear form fields
            }, (err) => {
                btn.textContent = 'Send Message'; // Reset button text
                alert('Failed to send: ' + JSON.stringify(err));
            });
    });

    // Click to Talk Button Event
    document.querySelector('.click-to-talk').addEventListener('click', function() {
        // Show the chat popup
        document.getElementById('chatPopup').style.display = 'block';
    });

    // Close Chat Button Event
    document.getElementById('closeChat').addEventListener('click', function() {
        // Hide the chat popup
        document.getElementById('chatPopup').style.display = 'none';
        
        // Clear all messages in the chat body
        document.getElementById('chatBody').innerHTML = '';
    });

    // Send Button Event
    document.getElementById('sendButton').addEventListener('click', function() {
        const chatBody = document.getElementById('chatBody');
        const userMessage = document.getElementById('userMessage').value;

        if (userMessage.trim() === '') return; // If message is empty, do nothing

        // Append user's message to the chat body
        const userMsgElement = document.createElement('div');
        userMsgElement.className = 'user-message';
        userMsgElement.textContent = userMessage;
        chatBody.appendChild(userMsgElement);

        // Scroll to the bottom of the chat
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear the input field
        document.getElementById('userMessage').value = '';

        // Simulate chatbot reply after 2 seconds
        setTimeout(() => {
            const botMsgElement = document.createElement('div');
            botMsgElement.className = 'bot-message';
            botMsgElement.textContent = 'The chatbot is under development. Please try the contact form or the "Let\'s Connect" options at the end of this page or inside the About Me section.';
            chatBody.appendChild(botMsgElement);

            // Scroll to the bottom of the chat
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 2000);
    });
});
