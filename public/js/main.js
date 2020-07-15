document.addEventListener('DOMContentLoaded', (event) => {
  console.log('document loaded');

  const element = document.getElementById('theFile');
  element.addEventListener('change', upload);
});

function upload() {
  console.log('test');  
  return new Promise(async (resolve, reject) => {
    const filePicker = document.querySelector('input');

    if (!filePicker
        || !filePicker.files 
        || filePicker.files.length <= 0
      ) {
        reject('No file selected.');
        return;   
      }

    const myFile = filePicker.files[0];
    
    if (myFile.size > 10485760) {
      reject('Image is too big (max. 10 Mb)');
      return;
    }

    const myBase64File = await convert(myFile);
    const image = await createImage(document.getElementById('theImage'), myBase64File);
    showElement(image);

    console.log(`Your file is ${myFile}`);
    console.log(`Your base64 image is ${myBase64File}`);
    console.log(`Your image is ${image}`);
    
    resolve();
  }); 
}

function convert(myFile) {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (fileReader && myFile) {
          fileReader.readAsDataURL(myFile);
          fileReader.onload = () => {
              resolve(fileReader.result);
          };

          fileReader.onerror = (error) => {
              reject(error);
          };
      } else {
          reject('No file provided');
      }
  });
}

function createImage(element, myBase64File) {
  element.src = myBase64File;
  return element;
}

function showElement(element) {
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
    element.classList.add('show');
  }
}
