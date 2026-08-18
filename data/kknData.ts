export interface Member {
  id: string;
  name: string;
  role: string;
  faculty: string;
  photo: string;
  bio: string;
  responsibility: string;
  instagram: string;
  quote?: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'Edukasi & Literasi' | 'Digitalisasi Desa' | 'Pengembangan UMKM' | 'Lingkungan & Kesehatan' | 'Sosialisasi & Pelatihan';
  badgeColor: 'sage' | 'peach' | 'pink' | 'lavender';
  description: string;
  fullContent: string;
  impact: string;
  targetAudience: string;
  image: string;
  order: number;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  coverImage: string;
  images?: string[];
}

export interface GalleryItem {
  id: string;
  activityId?: string;
  title: string;
  image: string;
  caption: string;
  date: string;
  category: 'Edukasi' | 'UMKM' | 'Sosialisasi' | 'Lingkungan' | 'Kebersamaan';
}

export const KKN_INFO = {
  groupName: "KKN Kolaboratif Desa Bangsalsari",
  village: "Desa Bangsalsari",
  district: "Kecamatan Bangsalsari",
  regency: "Kabupaten Jember",
  province: "Jawa Timur",
  year: "2026",
  duration: "35 Hari Operasional",
  startDate: "19 Juli 2026",
  endDate: "24 Agustus 2026",
  heroTagline: "KKN 2026 BANGSALSARI",
  heroMainTitle: "Satu Tim, Banyak Cerita.",
  heroSubtitle: "Bersama, Memberi Makna.",
  heroDescription: "Kami hadir untuk belajar, berbagi, dan tumbuh bersama masyarakat Bangsalsari, mewujudkan pemberdayaan desa yang berkelanjutan.",
  aboutQuote: "Bergerak bersama, bermakna selamanya.",
  aboutHeading: "Kami hadir, bukan hanya untuk menjalankan program.",
  aboutBodyParagraph1: "KKN Bangsalsari 2026 adalah ruang di mana ilmu pengetahuan akademik berpadu dengan kehangatan kearifan lokal. Di tengah rimbunnya persawahan dan keramahan warga desa, kami melangkah bersama untuk mendengarkan, merajut gagasan, dan merealisasikan solusi nyata.",
  aboutBodyParagraph2: "Setiap senyum warga, canda tawa anak-anak desa, dan diskusi santai di posko menjadi bahan bakar pengabdian kami selama 45 hari di Bangsalsari.",
  instagramUrl: "https://instagram.com/kkn_bangsalsari",
  contactEmail: "kkn.bangsalsari2026@gmail.com",
  logoUrl: "/images/logo-kkn.png",
};

export const QUICK_FACTS = [
  {
    label: "Lokasi Posko",
    value: "Bangsalsari, Jember",
    subtext: "Kecamatan Bangsalsari",
    iconName: "MapPin",
    bgColor: "bg-sage-light text-sage-dark",
  },
  {
    label: "Durasi Pengabdian",
    value: "35 Hari",
    subtext: "Juli - Agustus 2026",
    iconName: "Calendar",
    bgColor: "bg-peach-soft text-softblack",
  },
  {
    label: "Anggota Tim",
    value: "10 Mahasiswa",
    subtext: "Lintas Fakultas & Prodi",
    iconName: "Users",
    bgColor: "bg-pink-muted text-softblack",
  },
  {
    label: "Program Kerja",
    value: "4  Program Utama",
    subtext: "Fokus Pemberdayaan",
    iconName: "Sparkles",
    bgColor: "bg-lavender-soft text-softblack",
  },
];

export const MEMBERS_DATA: Member[] = [
  {
    id: "m1",
    name: "Ega Felix Cavan",
    role: "Koordinator Desa (Kordes)",
    faculty: "Fakultas Ilmu Komputer",
    photo: "/images/members/felix.jpg",
    bio: "Memimpin pergerakan tim dengan komitmen tinggi dan senyuman hangat. Percaya bahwa kepemimpinan adalah tentang melayani.",
    responsibility: "Manajerial Tim & Hubungan Tokoh Masyarakat",
    instagram: "@feliiixxc",
    quote: "Memimpin adalah mendengarkan lebih banyak dari berbicara."
  },
  {
    id: "m2",
    name: "Salma Zakiyah Azzahra",
    role: "Sekretaris",
    faculty: "Fakultas Ilmu Sosial Dan Ilmu Politik",
    photo: "/images/members/saza.png",
    bio: "Pena di balik setiap arsip dan dokumen KKN. Teliti, rapi, dan senantiasa menjadi pengingat jadwal tim.",
    responsibility: "Administrasi, Laporan KKN & Persuratan Desa",
    instagram: "@nabilaputri",
    quote: "Setiap detik di desa tersimpan rapi dalam kenangan dan catatan."
  },
  {
    id: "m3",
    name: "Adinda Renata Azalia Saifani",
    role: "Bendahara",
    faculty: "Fakultas Matematikan dan Ilmu Pengetahuan Alam",
    photo: "/images/members/renata.png",
    bio: "Penjaga stabilitas keuangan dan perlengkapan posko. Mahir bernegosiasi dan efisien dalam pengelolaan dana.",
    responsibility: "Pengelolaan Anggaran Program & Perlengkapan Acara",
    instagram: "@rizky.ramadhan",
    quote: "Efisiensi adalah kunci keberlanjutan program."
  },
  {
    id: "m4",
    name: "Andhini Octa Maharatih",
    role: "Acara",
    faculty: "Fakultas Ilmu Sosial Dan Ilmu Politik",
    photo: "images/members/andin.png",
    bio: "Jembatan komunikasi antara mahasiswa, warga desa, dan perangkat pemerintahan Bangsalsari.",
    responsibility: "Koordinasi Warga, Media Sosial & Publikasi Digital",
    instagram: "@diansastro",
    quote: "Kehangatan komunikasi membuka sejuta pintu kebaikan."
  },
  {
    id: "m5",
    name: "Firda Salsa Billah",
    role: "Acara",
    faculty: "Fakultas Ilmu Sosial Dan Ilmu Politik",
    photo: "images/members/firda.png",
    bio: "Fokus mendampingi pelaku usaha lokal Bangsalsari agar mampu bersaing di pasar digital dan marketplace.",
    responsibility: "Pelatihan Packaging & Pemasaran Online UMKM",
    instagram: "@fajar.pratama",
    quote: "Produk lokal, kualitas global, keberlanjutan desa."
  },
  {
    id: "m6",
    name: "Annette Subiono",
    role: "Humas",
    faculty: "Fakultas Informatika",
    photo: "images/members/anette.png",
    bio: "Ceria dan penuh semangat mengajar anak-anak SD di desa Bangsalsari melalui metode belajar interaktif.",
    responsibility: "Rumah Belajar Pintar & Pojok Baca Desa",
    instagram: "@siti.rahmawati",
    quote: "Anak-anak adalah benih masa depan Bangsalsari."
  },
  {
    id: "m7",
    name: "Sofiyatul Huril Aini",
    role: "Humas",
    faculty: "Fakultas Teknologi Pertanian",
    photo: "images/members/huril.png",
    bio: "Pengembang website desa dan sistem pendataan digital untuk mempermudah pelayanan warga.",
    responsibility: "Pengembangan Website & Sistem Data Desa",
    instagram: "@bagas.kara",
    quote: "Teknologi hadir untuk memudahkan hidup sesama."
  },
  {
    id: "m8",
    name: "Rizqi Dwi Julia Yasmin",
    role: "PDD",
    faculty: "Fakultas Ekonomi Dan Bisnis",
    photo: "images/members/yasmin.png",
    bio: "Aktif mengedukasi pencegahan stunting dan pola hidup bersih bagi ibu hamil dan balita di Posyandu.",
    responsibility: "Sosialisasi Cegah Stunting & Pemeriksaan Kesehatan Free",
    instagram: "@anisa.nurul",
    quote: "Masyarakat sehat, desa bermartabat."
  },
  {
    id: "m9",
    name: "Mohamad Adi Saputra",
    role: "PDD",
    faculty: "Fakultas Hukum",
    photo: "images/members/adi.png",
    bio: "Mendampingi petani lokal dalam pembuatan pupuk organik padat dan cair ramah lingkungan.",
    responsibility: "Pelatihan Pupuk Organik & Bank Sampah Desa",
    instagram: "@gilang.permana",
    quote: "Menjaga tanah adalah menjaga masa depan."
  },
  {
    id: "m10",
    name: "Najmudin Akbar Pribadi",
    role: "Perkap",
    faculty: "Fakultas Hukum",
    photo: "images/members/adi.png",
    bio: "Mengabadikan setiap momen penuh kehangatan melalui kamera dan mengolahnya menjadi cerita visual.",
    responsibility: "Fotografi, Videografi & Desain Grafis",
    instagram: "@tania.lestari",
    quote: "Sebuah foto menyimpan sejuta rasa yang tak lekang waktu."
  },
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: "p1",
    title: "Verifikasi dan Validasi Data Angka Kemiskinan Desil 2",
    category: "Digitalisasi Desa",
    badgeColor: "sage",
    description: "Pencatatan Angka Kemiskinan Desil 2 di Lingkungan Desa Bangsalsari, termasuk Dusun Krajan A, Krajan B, Kedungsuko, Rambutan dan Kalisatan",
    fullContent: "Program ini bertujuan meningkatkan transparansi dan kemudahan akses informasi publik Desa Bangsalsari. Kami membangun website resmi desa yang memuat peta interaktif potensi lokal, direktori usaha warga, serta sistem pengajuan surat menyurat sederhana.",
    impact: "Tercapainya Pendataan kemiskinan dan Sasaran Bantuan Yang Tepat Sasaran ",
    targetAudience: "Masyarakat dan Warga Yang Kurang Mampu",
    image: "/images/programs/verval.jpg",
    order: 1,
  },
  {
    id: "p2",
    title: "Revitalisasi & Pelatihan Packaging UMKM",
    category: "Pengembangan UMKM",
    badgeColor: "peach",
    description: "Pendampingan desain kemasan, branding logo, serta registrasi Google Maps Business bagi 15 UMKM lokal.",
    fullContent: "Banyak produk olahan pangan Bangsalsari yang lezat namun kemasannya masih tradisional. Tim KKN mengadakan workshop branding, merancang desain kemasan berdiri (standing pouch) modern, dan mendaftarkan lokasi toko ke Google Maps.",
    impact: "Penjualan UMKM Mitra meningkat hingga 40% dan jangkauan pesanan meluas ke kota sekitar.",
    targetAudience: "Pelaku UMKM Olahan Pangan Desa",
    image: "images/programs/viola.jpg",
    order: 2,
  },
  {
    id: "p3",
    title: "Rumah Belajar & Literasi Anak Desa",
    category: "Edukasi & Literasi",
    badgeColor: "pink",
    description: "Pendirian Pojok Baca Bangsalsari, les gratis bahasa Inggris, serta bimbingan matematika menyenangkan.",
    fullContent: "Menciptakan ruang belajar afektif dan menyenangkan bagi anak-anak tingkat SD dan SMP. Kami mengumpulkan ratusan buku donasi dan menata ruangan menjadi pustaka mini yang nyaman.",
    impact: "Lebih dari 80 anak desa rutin belajar dan membaca setiap sore di posko KKN.",
    targetAudience: "Anak-anak SD & SMP Bangsalsari",
    image: "images/programs/les.jpg",
    order: 3,
  },
  {
    id: "p4",
    title: "Edukasi Cegah Stunting & Posyandu Sehat",
    category: "Lingkungan & Kesehatan",
    badgeColor: "lavender",
    description: "Pemeriksaan gizi balita, pembagian PMT (Pemberian Makanan Tambahan) kaya protein, dan demo masak gizi.",
    fullContent: "Bekerja sama dengan Bidan Desa dan Kader Posyandu untuk mengedukasi ibu hamil dan menyusui mengenai pentingnya protein hewani lokal seperti telur dan ikan lele untuk mencegah stunting.",
    impact: "120 Balita terpantau grafik tumbuh kembangnya dan meningkatnya kesadaran gizi keluarga.",
    targetAudience: "Ibu Hamil, Menyusui, dan Kader Posyandu",
    image: "images/programs/sosialisasi.jpg",
    order: 4,
  },
  {
    id: "p5",
    title: "Pengolahan Sampah Organik & Pupuk Kompos",
    category: "Lingkungan & Kesehatan",
    badgeColor: "sage",
    description: "Pembuatan tempat sampah terpilah dan pelatihan pembuatan POC (Pupuk Organik Cair) dari limbah rumah tangga.",
    fullContent: "Menjawab masalah tumpukan sampah dapur dengan metode komposting sederhana memanfaatkan ember bekas dan bioaktivator. Hasil pupuk dibagikan gratis kepada warga pemilik pekarangan.",
    impact: "Mengurangi 30% volume sampah dapur harian di wilayah RT pilot project.",
    targetAudience: "Kelompok Tani & Ibu Rumah Tangga",
    image: "images/programs/tpa.jpg",
    order: 5,
  },
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: "a1",
    title: "Penerimaan & Welcoming Ceremony di Balai Desa",
    date: "11 Juli 2026",
    location: "Balai Desa Bangsalsari",
    category: "Sosialisasi",
    description: "Acara penerimaan resmi tim KKN oleh Kepala Desa beserta jajaran perangkat dan tokoh masyarakat Bangsalsari.",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "a2",
    title: "Lokakarya Branding Packaging UMKM Keripik",
    date: "18 Juli 2026",
    location: "Posko KKN Bangsalsari",
    category: "UMKM",
    description: "Kunjungan dan pendampingan mendesain stiker kemasan baru untuk usaha keripik tempe Ibu Yayuk.",
    coverImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "a3",
    title: "Pembukaan Rumah Belajar Pintar Bangsalsari",
    date: "22 Juli 2026",
    location: "Posko Utama",
    category: "Edukasi",
    description: "Hari pertama pembukaan rumah belajar gratis yang disambut antusias oleh 45 anak-anak tingkat sekolah dasar.",
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "a4",
    title: "Aksi Bersih Desa & Penanaman Bibit Pohon",
    date: "28 Juli 2026",
    location: "Area Lingkungan RW 04",
    category: "Lingkungan",
    description: "Gotong royong bersama pemuda karang taruna membersihkan saluran irigasi dan menanam bibit buah.",
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "a5",
    title: "Pemeriksaan Balita & Demo Masak Gizi Sehat",
    date: "04 Agustus 2026",
    location: "Posyandu Mawar Bangsalsari",
    category: "Lingkungan",
    description: "Membantu bidan desa menimbang balita serta membagikan biskuit gizi buatan sendiri dari bahan lokal.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "a6",
    title: "Pelatihan Google Maps & Digital Marketing",
    date: "10 Agustus 2026",
    location: "Ruang Rapat Desa",
    category: "UMKM",
    description: "Sesi praktik langsung mendaftarkan titik lokasi usaha warga agar mudah ditemukan calon pembeli online.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Senyum Anak-Anak Bangsalsari",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    caption: "Canda tawa mewarnai sore hari saat kelas mewarnai di Rumah Belajar KKN.",
    date: "23 Juli 2026",
    category: "Edukasi"
  },
  {
    id: "g2",
    title: "Pendampingan Foto Produk UMKM",
    image: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80",
    caption: "Proses pengambilan foto katalog untuk kerajinan dan olahan makanan warga.",
    date: "19 Juli 2026",
    category: "UMKM"
  },
  {
    id: "g3",
    title: "Kehangatan Diskusi Bersama Perangkat Desa",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    caption: "Musyawarah desa membahas titik lokasi pemasangan plang jalan dan peta desa digital.",
    date: "14 Juli 2026",
    category: "Sosialisasi"
  },
  {
    id: "g4",
    title: "Gotong Royong Kebersihan Lingkungan",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
    caption: "Kebersamaan mahasiswa dan karang taruna dalam menjaga kebersihan lingkungan desa.",
    date: "29 Juli 2026",
    category: "Lingkungan"
  },
  {
    id: "g5",
    title: "Malam Keakraban Posko KKN",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    caption: "Evaluasi harian ditemani secangkir kopi hangat dan gurau antar anggota tim.",
    date: "02 Agustus 2026",
    category: "Kebersamaan"
  },
  {
    id: "g6",
    title: "Demo Masak PMT Posyandu Bangsalsari",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    caption: "Ibu-ibu antusias menyimak kreasi puding kelor kaya protein untuk balita.",
    date: "05 Agustus 2026",
    category: "Lingkungan"
  },
  {
    id: "g7",
    title: "Lomba Mewarnai & Festival Edukasi",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    caption: "Keceriaan anak-anak saat memamerkan hasil karya lukis mereka.",
    date: "12 Agustus 2026",
    category: "Edukasi"
  },
  {
    id: "g8",
    title: "Penyerahan Peta Desa Digital",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    caption: "Simbolis penyerahan cetakan peta desa & akses portal digital kepada Bapak Kades.",
    date: "18 Agustus 2026",
    category: "Sosialisasi"
  }
];
