document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.querySelector('.upload-button');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const popupCard = document.getElementById('popupCard');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');
    const submitButton = document.getElementById('submitButton');

    uploadButton.addEventListener('click', () => {
        imageInput.click();
    });

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                imagePreview.innerHTML = '';
                imagePreview.appendChild(img);
                popupCard.style.display = 'block';
                overlay.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    closeButton.addEventListener('click', () => {
        popupCard.style.display = 'none';
        overlay.style.display = 'none';
    });

    submitButton.addEventListener('click', () => {
        // Handle submit action here
        alert('Image submitted!');
        popupCard.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popupCard.style.display = 'none';
        overlay.style.display = 'none';
    });
});