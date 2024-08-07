const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", async (event) => {
  console.log("Form submitted");
  event.preventDefault();
  window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = input.value.trim();
      if (!isUrl(url)) url = `https://www.google.com/search?q=${url}`;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = `http://${url}`;
      sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
      location.href = "image-galleries";
    });
});

function checkUrlParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlValue = urlParams.get('url');
  
  if (urlValue) {
    const input = document.querySelector("input");
    const form = document.querySelector("form");
    input.value = decodeURIComponent(urlValue);
    form.dispatchEvent(new Event('submit'));
  }
}


function images(value) {
    let iframe = document.querySelector(".iframe.active");
    window.navigator.serviceWorker
      .register("./sw.js", {
        scope: __uv$config.prefix,
      })
      .then(() => {
        let url = value.trim();
        if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
        else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "https://" + url;
        sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
        location.href = "/image-galleries";
      });
  }
  
  function blank(value) {
    let iframe = document.querySelector(".iframe.active");
    window.navigator.serviceWorker
      .register("./sw.js", {
        scope: __uv$config.prefix,
      })
      .then(() => {
        let url = value.trim();
        if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
        else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "https://" + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
      });
  }
  
  function isUrl(val = "") {
    if (
      /^http(s?):\/\//.test(val) ||
      (val.includes(".") && val.substr(0, 1) !== " ")
    )
      return true;
    return false;
  }