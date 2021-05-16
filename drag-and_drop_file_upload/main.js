// Select requar Element
let drag_area = document.getElementById("drag-area");
const button = document.getElementById("browse_btn");
const promptt = document.getElementById("promp");
const inputel = document.getElementById("file_upload");
let submit_form = document.getElementById("submit_form");
const submit = document.getElementById("submit");
let File;
let valid = false;

//Click "Browse File" button & Open Input:file Element
button.onclick = (e) => {
  e.preventDefault();
  inputel.click();
};

inputel.addEventListener("change", (event) => {
  if (inputel.files.length) {
    getFile(inputel.files[0]);
    drag_area.classList.add("active");
  }
});

//It's Listener Call When Dragavle File is Entre Drag Area
drag_area.addEventListener("dragover", (e) => {
  e.preventDefault();
  drag_area.classList.add("active");
  promptt.innerHTML = "Drop Here....";
});
//It's Listener Call When Dragavle File is Leave Drag Area;
drag_area.addEventListener("dragleave", () => {
  drag_area.classList.remove("active");
  promptt.innerHTML = "Drag & Drop Upload File";
});
//It's Listener Call When Dragavle File in Drop Drag Area;
drag_area.addEventListener("drop", (event) => {
  event.preventDefault();
  File = event.dataTransfer.files[0];
  if (File) {
    getFile(File);
  }
});

// save this image database useing Jquery/php
$(function () {
  $("#submit_form").on("submit", function (e) {
    e.preventDefault();
    if (valid) {
      const formdata = new FormData(this);
      formdata.append("file", File);
      $.ajax({
        url: "upload.php",
        type: "POST",
        data: formdata,
        contentType: false,
        processData: false,
        success: function (data) {
          alert(data);
        },
      });
    } else {
      alert("Only jpeg, png, jpg file is acceptable");
    }
  });
});

// Function for get File information
function getFile(file) {
  const validEx = ["image/png", "image/jpg", "image/jpeg"];
  if (validEx.includes(file.type)) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let el = `<img name = "img_file"  src = "${reader.result}" alt="">`;
      drag_area.innerHTML = el;
      valid = true;
    };
  } else {
    alert("File not valid img");
    valid = false;
  }
}
