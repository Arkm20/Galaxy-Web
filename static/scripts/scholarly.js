let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

function getUrlParameter(name) {
    new_name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    // biome-ignore lint/style/useTemplate: <explanation>
    const regex = new RegExp('[\\?&]' + new_name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox") && getUrlParameter('cloaked') !== 'false') {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Please allow popups and redirects.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "My Drive - Google Drive";
        const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";

        doc.title = name;
        link.rel = "icon";
        link.href = icon;

        iframe.src = location.href 
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://www.nasa.gov/")
    }
} else {
    // New else statement for when cloaking is false
    const alternativeTitle = "Galaxy Learning Portal";
    document.title = alternativeTitle;
    document.body.classList.add('uncloaked');
}

document.addEventListener("DOMContentLoaded", (event) => { 
    if(window.localStorage.getItem("v4Particles") === "true") {
      const scr = document.createElement("script");
      scr.src="/scripts/academia.js";
      document.body.appendChild(scr);
    }
    if (getUrlParameter('cloaked') === 'false') {
        console.log("Cloaking is disabled.");
        document.body.innerHTML = '';
        document.body.style.background = 'black';
    }
  });