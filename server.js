var blobService = azure.createBlobService();

blobService.createContainerIfNotExists(image_uploads, function(error){
    if(!error){
        // Container exists and is private
    }
});


blobService.createBlockBlobFromFile(image_uploads
    , 'test1'
    , 'test1.txt'
    , function(error){
        if(!error){
            // File has been uploaded
        }
    });
