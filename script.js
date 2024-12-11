// Bölüm Geçişleri
const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll("section");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Tüm bölümleri gizle
        sections.forEach(section => section.classList.add("hidden"));
        
        // Seçilen bölümü göster
        const target = document.querySelector(btn.getAttribute("data-target"));
        target.classList.remove("hidden");
    });
});

// Öğrenci Kayıt Formu
const studentRegisterForm = document.getElementById("student-register");
studentRegisterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const studentName = studentRegisterForm.querySelector("input[placeholder='Ad Soyad']").value;
    const studentId = studentRegisterForm.querySelector("input[placeholder='Öğrenci Numarası']").value;
    const studentEmail = studentRegisterForm.querySelector("input[placeholder='Email']").value;
    const studentPhone = studentRegisterForm.querySelector("input[placeholder='Telefon Numarası']").value;
    const schoolName = studentRegisterForm.querySelector("input[placeholder='Okul Adı']").value;
    const studentClass = studentRegisterForm.querySelector("input[placeholder='Sınıf']").value;

    if (studentName && studentId && studentEmail && studentPhone && schoolName && studentClass) {
        alert(`Öğrenci kaydedildi: ${studentName}`);
        studentRegisterForm.reset();
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
});

// Okul Kayıt Formu
const schoolRegisterForm = document.getElementById("school-register");
schoolRegisterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const schoolName = schoolRegisterForm.querySelector("input[placeholder='Okul Adı']").value;
    const schoolProvince = schoolRegisterForm.querySelector("input[placeholder='İl']").value;
    const schoolDistrict = schoolRegisterForm.querySelector("input[placeholder='İlçe']").value;
    const schoolPassword = schoolRegisterForm.querySelector("input[placeholder='Okul Şifresi']").value;

    if (schoolName && schoolProvince && schoolDistrict && schoolPassword) {
        alert(`Okul kaydedildi: ${schoolName}`);
        schoolRegisterForm.reset();
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
});

// Veri Girişi Okul Girişi
const schoolLoginForm = document.getElementById("school-login");
const wasteEntryForm = document.getElementById("waste-entry");
schoolLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const schoolName = schoolLoginForm.querySelector("input[type='text']").value;
    const schoolPassword = schoolLoginForm.querySelector("input[type='password']").value;

    if (schoolName && schoolPassword) {
        alert("Giriş başarılı, veri girişi yapabilirsiniz.");
        wasteEntryForm.classList.remove("hidden");
    } else {
        alert("Lütfen okul bilgilerini doğru girin.");
    }
});

// Öğrenci Giriş ve Veri Görüntüleme
const studentLoginForm = document.getElementById("student-login");
const studentDataSection = document.getElementById("student-data");
studentLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const studentEmail = studentLoginForm.querySelector("input[type='email']").value;
    const studentPassword = studentLoginForm.querySelector("input[type='password']").value;

    if (studentEmail && studentPassword) {
        alert("Giriş başarılı, verilerinizi görüntüleyebilirsiniz.");
        studentDataSection.classList.remove("hidden");
        // Verileri göstermek için örnek veri
        document.getElementById("wasteTypes").innerText = "Plastik, Kağıt, Cam";
        document.getElementById("totalPoints").innerText = "120";
        document.getElementById("totalWaste").innerText = "10";
    } else {
        alert("Lütfen email ve şifrenizi doğru girin.");
    }
});

// Atık Girişi
wasteEntryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const studentName = wasteEntryForm.querySelector("input[placeholder='Öğrenci Adı Soyadı']").value;
    const wasteType = wasteEntryForm.querySelector("input[placeholder='Atık Türü']").value;
    const wasteAmount = wasteEntryForm.querySelector("input[placeholder='Atık Miktarı (kg)']").value;

    if (studentName && wasteType && wasteAmount) {
        alert(`Atık kaydedildi: ${wasteAmount} kg ${wasteType}`);
        wasteEntryForm.reset();
    } else {
        alert("Lütfen tüm bilgileri doğru girin.");
    }
});

// Atık Sayacını Güncelleme
let totalWaste = 0;
const wasteCounter = document.getElementById("wasteCount");

function updateWasteCounter(amount) {
    totalWaste += parseFloat(amount);
    wasteCounter.innerText = totalWaste;
}
