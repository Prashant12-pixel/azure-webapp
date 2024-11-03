document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('serverStatus');
    const responseTimeElement = document.getElementById('responseTime');
    const testButton = document.getElementById('testConnection');

    async function testConnection() {
        statusElement.textContent = 'Testing...';
        responseTimeElement.textContent = '-';
        
        const startTime = performance.now();
        
        try {
            const response = await fetch('/');
            const endTime = performance.now();
            
            if (response.ok) {
                statusElement.textContent = 'Connected';
                statusElement.style.color = '#28a745';
                responseTimeElement.textContent = `${Math.round(endTime - startTime)}ms`;
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            statusElement.textContent = 'Failed';
            statusElement.style.color = '#dc3545';
            responseTimeElement.textContent = 'Error';
        }
    }

    testButton.addEventListener('click', testConnection);
    testConnection(); // Initial test
});