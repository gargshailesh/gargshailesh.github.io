// Chat widget state management
let widgetInstance = null;

// Check if chat should be open based on localStorage
function shouldChatBeOpen() {
    return localStorage.getItem('chatWidgetOpen') === 'true';
}

// Save chat state
function saveChatState(isOpen) {
    localStorage.setItem('chatWidgetOpen', isOpen ? 'true' : 'false');
}

// Initialize chat widget with state management
function initChatWidget() {
    // Destroy existing instance if any
    if (widgetInstance) {
        widgetInstance.destroy();
    }
    
    const token = 's3f5b_tk_2025_05_03_m3bw3sH34wr4d90';
    const primaryColor = 'black';
    const secondaryColor = 'white';
    const shadeColor = 'gray';
    const logoUrl = 'https://d2ug12dkmgcsv2.cloudfront.net/logo.png';
    const backgroundUrl = 'https://d2ug12dkmgcsv2.cloudfront.net/bkgrnd_image.png';
    const headerText = 'Chat with Shailesh';
    const apiBaseUrl = 'https://api.trustdai.in';
    const signInMessage = "Sign In to chat with Shailesh's Assistant";

    widgetInstance = window.ChatWidget.initChatWidget({
        token: token,       
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        shadeColor: shadeColor,
        logoUrl: logoUrl || undefined,
        backgroundUrl: backgroundUrl || undefined,
        apiBaseUrl: apiBaseUrl,
        headerText: headerText,
        signInMessage: signInMessage
    });

    // Add event listeners for state changes
    widgetInstance.on('open', () => {
        saveChatState(true);
    });

    widgetInstance.on('close', () => {
        saveChatState(false);
    });

    // Restore previous state if chat was open
    if (shouldChatBeOpen()) {
        widgetInstance.open();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initChatWidget);
