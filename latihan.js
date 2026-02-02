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
console.log(karyawan2.hitungGaji(5)); // 5150000
