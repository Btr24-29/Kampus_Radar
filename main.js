// Yeni Mekan / Kampanya Ekleme Fonksiyonu
function yeniMekanEkle() {
  // Kullanıcıdan bilgileri prompt() ile alıyoruz
  let mekanAdi = prompt("Eklemek istediğiniz mekanın adını giriniz:");

  // Kullanıcı İptal'e basarsa veya boş bırakırsa fonksiyonu sonlandır (return)
  if (mekanAdi === null || mekanAdi.trim() === "") {
    alert("Hata: Mekan adı boş bırakılamaz!");
    return;
  }

  let kategoriAdi = prompt("Kategori giriniz (Ev Yemekleri, Çorba, Fast-food, İçecek):");
  if (kategoriAdi === null || kategoriAdi.trim() === "") {
    alert("Hata: Kategori alanı boş bırakılamaz!");
    return;
  }

  let kampanyaAdi = prompt("Kampanya veya menü adını giriniz (Örn: Tavuk Pilav):");
  let fiyatMetin = prompt("Kampanya fiyatını giriniz (Sadece sayı, örn: 150):");

  // String fiyatı Number() ile sayıya çeviriyoruz
  let fiyat = Number(fiyatMetin);

  // Fiyat kontrolü (Sayı değilse veya 0'dan küçük/eşitse uyar)
  if (isNaN(fiyat) || fiyat <= 0) {
    alert("Geçersiz fiyat girdiniz! Lütfen pozitif bir sayı yazınız.");
    return;
  }

  // Birleştirme (+) ve .trim() ile özet metni hazırlıyoruz
  let yeniKayit = mekanAdi.trim() + " (" + kategoriAdi.trim() + ") - " + kampanyaAdi.trim() + ": " + fiyat + " TL";

  // confirm() ile kullanıcıdan son onayı alıyoruz
  let onay = confirm("Aşağıdaki kampanyayı yayınlamak istiyor musunuz?\n"  + yeniKayit);

}

// Giriş/Kayıt sekmesi


// Kayıt Olma ve Şifre Kuralları Kontrolü
function kayitOlKontrol() {
  let yeniAd = prompt("Kullanıcı adını giriniz:");
  if (yeniAd === null || yeniAd.trim() === "") {
    alert("Hata: Kullanıcı adı boş bırakılamaz!");
    return;
  }

  let yeniSifre = prompt("Yeni şifrenizi belirleyiniz : (En az 4 karakter olmalı.)");
  if (yeniSifre === null) {
    return;
  }

  // Baştaki ve sondaki gereksiz boşlukları .trim() ile temizliyoruz
  let temizSifre = yeniSifre.trim();

  // Kural 1: En az 4 karakter (.length >= 4)
  if (temizSifre.length >= 4) {
    kayitliKullanici = yeniAd.trim();
    kayitliSifre = temizSifre;
    alert("Kayıt Başarılı! Hoş geldin " + kayitliKullanici + ". Şimdi Giriş Yap butonuna basarak giriş yapabilirsin.");
  } else {
    alert("Kayıt Başarısız! Şifreniz en az 4 karakter olmalı.");
  }
}

// 3 Deneme Haklı Giriş Güvenlik Kontrolü (while Döngüsü)
function girisYapKontrol() {
  let kalanHak = 3;

  while (kalanHak > 0) {
    let girilenAd = prompt("Kullanıcı adınızı giriniz");
    if (girilenAd === null) {
      return; // İptal'e basılırsa döngüden çık
    }

    let girilenSifre = prompt("Şifrenizi giriniz (Kalan deneme hakkı: " + kalanHak + ")");
    if (girilenSifre === null) {
      return;
    }

    if (girilenAd.trim() === kayitliKullanici && girilenSifre.trim() === kayitliSifre) {
      alert("Giriş Başarılı! Kampüs Radar ana sayfasına yönlendiriliyorsunuz...");
      window.location.href = "index.html"; // Ana sayfaya geri gönder
      break; // Doğru girildiği için döngüyü sonlandır
    } else {
      kalanHak-=1; // Deneme hakkını 1 azalt
      if (kalanHak > 0) {
        alert("Hatalı kullanıcı adı veya şifre! Kalan deneme hakkınız: " + kalanHak);
      }
    }
  }

  // 3 deneme hakkı da bittiyse hesabı bloke et
  if (kalanHak === 0) {
    alert("Güvenlik Uyarısı: 3 kez hatalı giriş yaptınız. Hesabınız geçici olarak bloke edildi!");
  }

  
}