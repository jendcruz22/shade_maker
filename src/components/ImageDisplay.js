function ImageDisplay({ selectedImage }) {
    return (
        <>
            {selectedImage && (
                <div>
                    <h3>Selected Image Preview:</h3>
                    <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '250px' }} />
                </div>
            )}
        </>
    );
}

export default ImageDisplay; 