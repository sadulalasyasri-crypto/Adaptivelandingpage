// Function to detect device type
function detectDevice() {
    var deviceTypeElement = document.getElementById("deviceType");
    var featureList = document.getElementById("featureList");

    if (window.innerWidth < 768) {
        deviceTypeElement.textContent = "You are using a mobile device.";

        // Mobile features
        featureList.innerHTML = `
            <div class="feature">Mobile Feature 1</div>
            <div class="feature">Mobile Feature 2</div>
        `;
    } else if (window.innerWidth < 1024) {
        deviceTypeElement.textContent = "You are using a tablet.";

        // Tablet features
        featureList.innerHTML = `
            <div class="feature">Tablet Feature 1</div>
            <div class="feature">Tablet Feature 2</div>
        `;
    } else {
        deviceTypeElement.textContent = "You are using a desktop.";

        // Desktop features
        featureList.innerHTML = `
            <div class="feature">Desktop Feature 1</div>
            <div class="feature">Desktop Feature 2</div>
            <div class="feature">Desktop Feature 3</div>
        `;
    }
}

// Run on page load
window.addEventListener("load", detectDevice);

// Update on window resize
window.addEventListener("resize", detectDevice);
