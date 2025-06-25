const hadiths = [
  { en: "The best among you are those who learn the Qur’an and teach it. (Bukhari)", ar: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ (البخاري)" },
  { en: "Spread peace between yourselves. (Muslim)", ar: "أَفْشُوا السَّلَامَ بَيْنَكُمْ (مسلم)" },
  { en: "Make things easy and do not make them difficult. (Bukhari)", ar: "يَسِّرُوا وَلَا تُعَسِّرُوا (البخاري)" },
  { en: "The best of you are those who are best to their families. (Tirmidhi)", ar: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ (الترمذي)" }
];

let currentLang = "en";

function showRandomHadith() {
  const hadith = hadiths[Math.floor(Math.random() * hadiths.length)];
  document.getElementById("hadith-container").innerHTML = `<p>${hadith[currentLang]}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  showRandomHadith();

  document.getElementById("refresh-btn").addEventListener("click", showRandomHadith);

  document.getElementById("toggle-lang").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    document.getElementById("toggle-lang").innerText =
      currentLang === "en" ? "🌐 Switch to Arabic" : "🌐 Switch to English";
    showRandomHadith();
  });
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("✅ Service Worker Registered"))
    .catch(err => console.error("❌ SW registration failed:", err));
}
