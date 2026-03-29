const copyButton = document.getElementById("copy-link");
const note = document.getElementById("download-note");
const downloadLink = document.getElementById("download-link");
const defaultDownloadUrl = "https://github.com/your-username/your-repo/releases/latest/download/Dear4You.apk";
const downloadUrl = downloadLink?.getAttribute("href") && downloadLink.getAttribute("href") !== "#"
  ? downloadLink.getAttribute("href")
  : defaultDownloadUrl;

if (downloadLink) {
  downloadLink.setAttribute("href", downloadUrl);
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(downloadUrl);
      copyButton.textContent = "লিংক কপি হয়েছে";
      copyButton.classList.add("is-copied");
      note.textContent = "ডাউনলোড লিংক clipboard-এ কপি হয়েছে।";

      window.setTimeout(() => {
        copyButton.textContent = "ডাউনলোড লিংক কপি করুন";
        copyButton.classList.remove("is-copied");
        note.textContent = "GitHub Release link বসানোর পর এই বাটন live download হিসেবে কাজ করবে।";
      }, 2200);
    } catch (error) {
      note.textContent = "এই browser-এ auto copy কাজ করেনি। URL manually copy করুন।";
    }
  });
}
