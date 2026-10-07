document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = document.getElementById(btn.getAttribute('data-target'));
    var text = el.textContent.trim();
    var done = function () {
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
    };
    var fallback = function () {
      var r = document.createRange();
      r.selectNodeContents(el);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      btn.textContent = 'Selected';
      setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
    };
    try {
      navigator.clipboard.writeText(text).then(done, fallback);
    } catch (e) {
      fallback();
    }
  });
});
