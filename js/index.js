// For Fiimport { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, listAll, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3AUSnQ67_rEdnKIWD1FM_5R7Y73yMWoA",
  authDomain: "uploadart-2fa1d.firebaseapp.com",
  projectId: "uploadart-2fa1d",
  storageBucket: "uploadart-2fa1d.appspot.com",
  messagingSenderId: "341485444920",
  appId: "1:341485444920:web:18cbc1f96f9a1ec014ebcd",
  measurementId: "G-4NBMPYLGKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// this is for feature section 
// Function to handle file input change event
document.getElementById('sampleInp').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const fileName = file.name;
    console.log('File name:', fileName);
  } else {
    console.log('No file selected');
  }
});

// Function to handle upload image button click
document.getElementById('uploadBtnFeatures').addEventListener('click', function() {
  const fileInput = document.getElementById('sampleInp');
  const file = fileInput.files[0];

  if (file) {
    const filename = file.name;
    const imgRef = ref(storage, `features/${filename}`);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function(event) {
      const buffer = event.target.result;
      const blob = new Blob([buffer]);
      
      uploadBytes(imgRef, blob)
        .then(() => {
          console.log("Image uploaded successfully to Feature Section!");
          alert("Image uploaded successfully to Feature Section!");
        })
        .catch((error) => {
          console.error("Error uploading image: ", error);
          alert("Error uploading image: " + error.message);
        });
    };
  } else {
    alert("Please select an image to upload.");
  }
});


// for sample imgages we have
document.getElementById('fileInp').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const fileName = file.name;
    console.log('File name:', fileName);
  } else {
    console.log('No file selected');
  }
});

// Function to handle upload image button click
document.getElementById('uploadBtn').addEventListener('click', function() {
  const fileInput = document.getElementById('fileInp');
  const file = fileInput.files[0];

  if (file) {
    const filename = file.name;
    const imgRef = ref(storage, `images/${filename}`);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function(event) {
      const buffer = event.target.result;
      const blob = new Blob([buffer]);
      
      uploadBytes(imgRef, blob)
        .then(() => {
          console.log("Image uploaded successfully to Sample Section!");
          alert("Image uploaded successfully to Sample Section!");
        })
        .catch((error) => {
          console.error("Error uploading image: ", error);
          alert("Error uploading image: " + error.message);
        });
    };
  } else {
    alert("Please select an image to upload.");
  }
});
