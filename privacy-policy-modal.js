$(document).ready(function () {
  // 1. Intercept the Privacy Policy link click on the banner
  $("body").on("click", "#cookieBanner a", function (e) {
    e.preventDefault();

    // 🌟 CHANGE: Use css('display', 'flex') to enable Flexbox centering,
    // then fade it in.
    $("#privacyPolicyModal").css("display", "flex").hide().fadeIn(300);
  });

  // 2. Handle the closing of the modal
  // Close when the 'X' is clicked
  $(".close-btn").on("click", function () {
    $("#privacyPolicyModal").fadeOut(300);
  });

  // Close when clicking outside the modal content
  $("#privacyPolicyModal").on("click", function (e) {
    if (e.target.id === "privacyPolicyModal") {
      $("#privacyPolicyModal").fadeOut(300);
    }
  });
});
