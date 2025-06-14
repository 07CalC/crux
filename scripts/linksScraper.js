const pdfLinks = [];
document.querySelectorAll("a").forEach((a) => {
  const img = a.querySelector(
    "img[src='https://www.nirfindia.org/images/pdf_icon.png']"
  );
  if (img && a.href.endsWith(".pdf")) {
    pdfLinks.push(a.href);
  }
});
console.log("Extracted PDF Links:", pdfLinks);
