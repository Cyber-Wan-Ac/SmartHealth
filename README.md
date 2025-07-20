<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1YmyKF8DiypBKj7gjQTx6TbaJ_2kQkTuU" alt="SmartHeart Logo" width="170"/>
</p>

<h1 align="center">💓 Smart Heart Pulse Monitoring Web App</h1>

<p align="center">
  <b>Aplikasi pemantauan detak jantung real-time berbasis ESP32 & Firebase</b><br>
  <i>Mudah digunakan untuk keperluan medis, edukasi, dan penelitian IoT.</i>
</p>

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=11wNuXYLvGat_N9sxrqPPw0RjSF817RlS" alt="SmartHeart Preview" width="600"/>
</p>

<p align="center">
  <a href="https://vercel.app"><img alt="Deployed on Vercel" src="https://img.shields.io/badge/deploy-vercel-black?logo=vercel"></a>
  <a href="https://github.com/yourusername/smartheart"><img alt="GitHub stars" src="https://img.shields.io/github/stars/yourusername/smartheart?style=social"></a>
</p>

Smart Heart Monitor adalah aplikasi pemantauan detak jantung real-time berbasis web yang diintegrasikan dengan microcontroller **ESP32** dan layanan **Firebase Realtime Database**. Aplikasi ini dikembangkan untuk memudahkan tim medis, peneliti, maupun pengguna individu dalam mencatat, meninjau, dan memvisualisasikan data denyut jantung pasien secara terstruktur dan responsif.


---

⚙️ Fitur Utama

- Upload file Excel (.xlsx) berisi data pasien
- Menampilkan daftar pasien dalam format tabel atau kolom horizontal
- Deteksi dan pemantauan BPM (Beats Per Minute) per pasien
- Visualisasi grafik detak jantung secara live
- Tombol "Lihat Kondisi" untuk membuka detail grafik & angka BPM
- Simpan histori BPM di Firebase
- Tampilan responsif mobile dengan latar belakang penuh
- Fitur export ke PDF untuk laporan pasien (opsional)
- Koneksi real-time antara ESP32 → Firebase → Web

---

```markdown
📁 Struktur Direktori

SmartHealth/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── heart-bg.jpg
│   └── pulse-bg.jpg
│
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│
│   ├── firebase/
│   │   └── firebaseConfig.js
│
│   ├── pages/
│   │   ├── Home.jsx          ← opsional: bisa isi ulang bagian Home
│   │   ├── About.jsx         ← opsional: About page
│   │   ├── LiveSensors.jsx   ← opsional: Live Sensor page
│   │   └── Patients.jsx      ← opsional: Patients page
│
│   └── components/
│       └── ui/
│           ├── Button.jsx
│           └── Card.jsx
│
├── .env.local
├── .env.local.example
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── jsconfig.json
└── README.md

````
---

🔗 Teknologi

| Teknologi        | Deskripsi                                |
|------------------|-------------------------------------------|
| React JS         | Library utama untuk frontend interaktif  |
| Tailwind CSS     | Framework utility-first untuk styling     |
| Chart.js         | Visualisasi data grafik BPM               |
| Firebase RTDB    | Penyimpanan data pasien & BPM realtime    |
| ESP32 + WiFi     | Microcontroller untuk kirim data ke cloud |
| XLSX             | Pembacaan file Excel                      |
| jsPDF + html2canvas | Export PDF (opsional laporan pasien)  |

---

🧬 Format File Excel

Untuk mengimpor data pasien, siapkan file `.xlsx` dengan struktur seperti berikut:

| ID   | Name         |
|------|--------------|
| P001 | John Doe     |
| P002 | Jane Smith   |

Lalu klik tombol **Upload File** di halaman utama.

---

📊 Live Sensor Monitoring

1. Pastikan ESP32 terhubung ke WiFi
2. Data detak jantung akan dikirim ke Firebase setiap 1 detik
3. Web app akan mengambil data tersebut dan:
   - Menampilkan angka BPM
   - Menampilkan grafik dinamis
   - Menyimpan riwayat ke `/patients/[ID]/bpm_history`

---

🔧 Mode Uji & Realtime

| Mode        | Keterangan                                               |
|-------------|-----------------------------------------------------------|
| Simulasi    | Data BPM acak dikirim setiap detik                        |
| Realtime    | Gunakan sensor detak jantung (PulseSensor, MAX30100, dsb)|
| Firebase    | Disimpan ke RTDB dalam struktur JSON terpisah per pasien |

---

🔌 Kode ESP32

Tersedia di file `ESP32_SmartHeart.ino`, menggunakan library:

- [Firebase ESP Client by Mobizt](https://github.com/mobizt/Firebase-ESP-Client)
- WiFi.h

Ubah kredensial berikut:
```cpp
#define WIFI_SSID "NAMA_WIFI"
#define WIFI_PASSWORD "PASSWORD_WIFI"
#define DATABASE_URL "https://smart-heart-sensors-default-rtdb.asia-southeast1.firebasedatabase.app/"
````

Kompilasi dan upload ke ESP32.

---

## 🚀 Deployment ke Vercel

1. Salin isi project ke folder
2. Jalankan:

   ```bash
   npm install
   npm run build
   ```
3. Upload ke Vercel
4. Set **Environment Variable**:

   ```
   REACT_APP_FIREBASE_URL=https://smart-heart-sensors-default-rtdb.asia-southeast1.firebasedatabase.app/
   ```

---

## 🛠️ Rencana Pengembangan Selanjutnya

* Autentikasi admin & dokter
* Push alert jika BPM terlalu tinggi/rendah
* Integrasi database MySQL untuk backup
* Pencetakan kartu pasien otomatis
* Mode deteksi denyut tak normal

---
✨ Ini merupakan perangkat hardware yang digunakan untuk membuat SmartHealth:

    Sensor detak jantung & oksigen
    🔹 MAX86141 — sensor optikal PPG dengan akurasi tinggi untuk detak jantung & SpO₂.

    Sensor suhu tubuh
    🔹 DS18B20 — sensor suhu digital dengan presisi baik.

    Mikrokontroler dengan konektivitas tinggi
    🔹 ESP32 — mikrokontroler dengan dual-core, built-in Wi-Fi & Bluetooth, performa tinggi.

    Catu daya & manajemen baterai
    🔹 Baterai Li-Po 3.7V kapasitas besar.
    🔹 Modul charger TP4056 dengan proteksi baterai.
    🔹 Step-down converter (jika diperlukan untuk stabilisasi tegangan).

    Komponen komunikasi & penyimpanan data
    🔹 Modul Wi-Fi (built-in pada ESP32) untuk koneksi ke cloud.
    🔹 Firebase Realtime Database sebagai penyimpanan online.

    Perangkat pendukung perakitan
    🔹 PCB atau perfboard.
    🔹 Kabel jumper berkualitas baik.
    🔹 Resistor & kapasitor sesuai kebutuhan.
    🔹 Enclosure/casing pelindung alat.

---

## 👨‍💻 Kontribusi & Lisensi

Aplikasi ini dikembangkan sebagai bagian dari proyek edukatif dan riset teknologi medis berbasis IoT.
Lisensi bebas digunakan untuk keperluan penelitian, lomba, dan pengembangan pribadi,
Dengan syarat melakukan kontribusi bersama pemilik kode ini, fork repo ini dan kirimkan pull request.
