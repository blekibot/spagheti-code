// Parent Class
class Karyawan {
  constructor(nama) {
    this.nama = nama;
  }

  hitungGaji(jamLembur) {
    throw new Error("Method hitungGaji() harus di-override oleh child class");
  }
}

// Child Class: Manager
class Manager extends Karyawan {
  constructor(nama) {
    super(nama);
    this.gajiPokok = 10000000;
  }

  hitungGaji(jamLembur) {
    return this.gajiPokok + (jamLembur * 50000);
  }
}

// Child Class: Staff
class Staff extends Karyawan {
  constructor(nama) {
    super(nama);
    this.gajiPokok = 5000000;
  }

  hitungGaji(jamLembur) {
    return this.gajiPokok + (jamLembur * 30000);
  }
}

// ============================
// Hasil Akhir (Testing)
// ============================

const karyawan1 = new Manager("Budi");
console.log(karyawan1.hitungGaji(5)); // 10250000

const karyawan2 = new Staff("Ani");
// console.log(karyawan2.hitungGaji(5)); // 5150000
// Inheritance cocok untuk kasus sistem gaji karena:

// Mengurangi duplikasi kode: Data dan perilaku umum (misalnya nama, jamLembur, atau struktur dasar hitungGaji) bisa diletakkan di parent class Karyawan, lalu dipakai ulang oleh Manager dan Staff.

// Mudah dikembangkan: Jika nanti ada jabatan baru (misalnya Supervisor), cukup buat class turunan baru tanpa mengubah kode yang sudah ada (sesuai prinsip Open–Closed).

// Mendukung polymorphism: Setiap jabatan bisa punya rumus hitungGaji() yang berbeda, tapi dipanggil dengan cara yang sama. Ini bikin kode lebih rapi dan fleksibel.

// Lebih terstruktur & readable: Logika gaji tidak tercampur dalam banyak if-else, sehingga kode lebih mudah dipahami dan dirawat.

// Sesuai dengan konsep dunia nyata: Manager dan Staff adalah jenis dari Karyawan, jadi relasi is-a ini pas dimodelkan dengan inheritance.

// Singkatnya: inheritance bikin sistem gaji lebih rapi, fleksibel, dan scalable.