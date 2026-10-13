/* Ace — upload validation: video files only, max 500 MB */
(function () {
  var MAX = 500 * 1024 * 1024;
  var input = document.getElementById('file-input');
  var zone = document.getElementById('upload-zone');
  var remove = document.getElementById('remove-file');
  if (!input || !zone) return;
  var msg = document.createElement('p');
  msg.setAttribute('role', 'alert');
  msg.style.cssText = 'color:#c0392b;font-size:14px;margin-top:12px;display:none';
  zone.insertAdjacentElement('afterend', msg);
  function check(file) {
    msg.style.display = 'none';
    if (!file) return;
    var err = '';
    if (!/^video\//.test(file.type)) err = 'Please choose a video file (MP4, MOV, WebM).';
    else if (file.size > MAX) err = 'File is too large. Maximum size is 500 MB.';
    if (err) { msg.textContent = err; msg.style.display = 'block'; remove.click(); }
  }
  input.addEventListener('change', function () { check(input.files[0]); });
  zone.addEventListener('drop', function (e) { check(e.dataTransfer.files[0]); });
})();
