function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s;
  var clockElement = document.getElementById("MyClockDisplay");
  if (clockElement) {
    clockElement.innerText = time;
    clockElement.textContent = time;
  }

  setTimeout(showTime, 1000);
}

// Initialize clock when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showTime);
} else {
  showTime();
}

// Form submission handler with loading state
var submitted = false;

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("formdata");
  var btnKiemtra = document.getElementById("btn-kiemtra");
  var btnText = document.getElementById("btn-text");
  var btnLoading = document.getElementById("btn-loading");
  var resultMessage = document.getElementById("sss");
  var hiddenIframe = document.getElementById("hidden_iframe");

  if (form && btnKiemtra) {
    form.addEventListener("submit", function(e) {
      submitted = true;
      
      // Show loading state
      if (btnText) btnText.style.display = "none";
      if (btnLoading) btnLoading.style.display = "inline-block";
      if (btnKiemtra) {
        btnKiemtra.disabled = true;
        btnKiemtra.style.cursor = "not-allowed";
      }
      
      // Clear previous result message
      if (resultMessage) {
        resultMessage.innerHTML = "";
        resultMessage.className = "result-message";
      }
    });
  }

  // Handle iframe load event
  if (hiddenIframe) {
    hiddenIframe.addEventListener("load", function() {
      if (submitted) {
        var str = "✔ Trạng thái thẻ đang được kiểm tra!";
        if (resultMessage) {
          resultMessage.innerHTML = str;
          resultMessage.className = "result-message success";
        }
        
        // Hide loading state
        if (btnText) btnText.style.display = "inline";
        if (btnLoading) btnLoading.style.display = "none";
        if (btnKiemtra) {
          btnKiemtra.disabled = false;
          btnKiemtra.style.cursor = "pointer";
        }
        
        submitted = false;
      }
    });
  }
});

