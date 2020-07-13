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
    
    console.log(myFile);
    
    resolve();
  }); 
}