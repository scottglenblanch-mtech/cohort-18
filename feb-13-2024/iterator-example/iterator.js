function getIterator() {
    
    function updateImage() {
        const imageElement = document.querySelector('img');
    
        imageElement.src = 'assets/cat' + position + '.jpg';
    }
    
    const numberOfPictures = 5;
    let position = 1;


    return {
        next: function () {
            position = Math.min(position + 1, numberOfPictures)
            updateImage()
        },
        previous: function() {
            position = Math.max(position - 1, 1);
            updateImage()
        }
    }
}