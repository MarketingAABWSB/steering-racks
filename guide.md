<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pakar Steering Rack EPS | Azam Auto Berek 12</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            black: '#121212',
                            red: '#E30613',
                            yellow: '#F7B500',
                            gray: '#F9FAFB'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    
    <style>
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        
        /* Micro Animations */
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        
        .pulse-btn {
            animation: pulse 2s infinite;
            box-shadow: 0 0 0 0 rgba(227, 6, 19, 0.7);
        }
        @keyframes pulse {
            0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(227, 6, 19, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(227, 6, 19, 0); }
            100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(227, 6, 19, 0); }
        }

        /* Hover Cards */
        .hover-card { transition: all 0.3s ease; }
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }

        /* Before/After Slider */
        .slider-container { position: relative; width: 100%; max-width: 800px; margin: 0 auto; overflow: hidden; border-radius: 12px; }
        .img-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
        .img-foreground { position: absolute; top: 0; left: 0; width: 50%; height: 100%; object-fit: cover; border-right: 3px solid #fff; z-index: 10; }
        .slider { position: absolute; -webkit-appearance: none; appearance: none; width: 100%; height: 100%; background: transparent; outline: none; margin: 0; z-index: 20; cursor: ew-resize; }
        .slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 40px; height: 40px; background: white; cursor: ew-resize; border-radius: 50%; border: 3px solid #E30613; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
        .aspect-ratio-box { padding-top: 56.25%; /* 16:9 Aspect Ratio */ position: relative; }

        /* Accordion */
        .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
    </style>
</head>
<body class="bg-white text-brand-black antialiased">

    <!-- Progress Bar & Top Banner -->
    <div class="w-full bg-brand-black text-white text-xs md:text-sm py-2 text-center font-semibold">
        <span class="text-brand-yellow"><i class="fas fa-exclamation-circle"></i> PERHATIAN:</span> Langkah 1 daripada 3 - Sila buat pengesahan slot anda hari ini. Hanya 7 Slot Harian Disediakan!
    </div>

    <!-- SECTION 1: HERO SECTION -->
    <header class="relative bg-white pt-12 pb-16 md:pt-24 md:pb-32 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <!-- Left Copy -->
            <div class="z-10 reveal active">
                <div class="flex space-x-2 text-brand-red font-bold text-sm mb-4">
                    <span class="bg-red-100 px-3 py-1 rounded-full">Stereng Berat?</span>
                    <span class="bg-red-100 px-3 py-1 rounded-full">Bergegar?</span>
                    <span class="bg-red-100 px-3 py-1 rounded-full">Kluk-Kluk?</span>
                </div>
                
                <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Pernahkah Anda Rasa Stereng Kereta Tiba-Tiba Berat, Bergegar Di Lebuhraya, Atau Terdengar Bunyi 'Kluk-Kluk' Setiap Kali Langgar Lubang?
                </h1>
                <p class="text-lg text-gray-600 mb-8 font-medium">
                    Awas! Jangan anggap ia perkara biasa. Kerosakan pada sistem Electric Power Steering (EPS) bukan sekadar isu bunyi, ia boleh membahayakan nyawa anda dan keluarga pada bila-bila masa!
                </p>
                
                <ul class="space-y-3 mb-8 font-semibold text-gray-800">
                    <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Pemeriksaan Unit Percuma</li>
                    <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Jaminan Kualiti 3 Bulan</li>
                    <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Pelarasan tayar (Alignment) secara percuma!</li>
                </ul>

                <a href="#harga" class="block text-center w-full md:w-max bg-brand-red text-white font-bold text-xl py-4 px-8 rounded-lg pulse-btn shadow-lg hover:bg-red-700 transition">
                    TEMPAH SLOT PROMOSI SAYA SEKARANG!
                </a>
            </div>

            <!-- Right Video / Visual -->
            <div class="relative reveal active shadow-2xl rounded-2xl overflow-hidden border-4 border-gray-100">
                <div class="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse z-20">LIVE DEMO</div>
                <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80" alt="Mekanik Azam Auto sedang bekerja" class="w-full h-auto object-cover opacity-90">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p class="text-white font-semibold text-lg">Visual 5 saat menunjukkan stereng bergegar teruk...</p>
                </div>
            </div>
        </div>
        
        <!-- Trust Logos -->
        <div class="max-w-7xl mx-auto px-4 mt-16 border-t border-gray-100 pt-8 opacity-60">
            <p class="text-center text-sm font-semibold text-gray-400 mb-6 uppercase tracking-widest">Dipercayai Untuk Jenama Kenderaan</p>
            <div class="flex justify-center flex-wrap gap-8 grayscale">
                <span class="font-bold text-xl">PERODUA</span>
                <span class="font-bold text-xl">PROTON</span>
                <span class="font-bold text-xl">TOYOTA</span>
                <span class="font-bold text-xl">HONDA</span>
                <span class="font-bold text-xl">NISSAN</span>
            </div>
            <div class="text-center mt-6 flex justify-center items-center text-gray-500 font-medium">
                <span class="text-brand-yellow text-xl mr-2">★★★★★</span> 4.9/5 Rating Kepuasan Pelanggan
            </div>
        </div>
    </header>

    <!-- SECTION 2: SYMPTOMS -->
    <section class="py-20 bg-brand-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Adakah Kereta Anda Mengalami Simptom Ini?</h2>
                <p class="text-gray-600">Perhatikan petanda amaran sistem Electric Power Steering (EPS) kenderaan anda sebelum ia bertukar menjadi kos membaiki yang merobek poket.</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover-card reveal">
                    <div class="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                        <i class="fas fa-dumbbell"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Stereng Berat</h3>
                    <p class="text-sm text-gray-500">Tiba-tiba sukar membelok ke kiri atau kanan terutama ketika *parking*.</p>
                </div>
                <!-- Card 2 -->
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover-card reveal">
                    <div class="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                        <i class="fas fa-volume-up"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Bunyi "Kluk-Kluk"</h3>
                    <p class="text-sm text-gray-500">Bunyi ketukan kasar terutamanya pada model seperti Alza, Myvi, Axia dan Bezza.</p>
                </div>
                <!-- Card 3 -->
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover-card reveal">
                    <div class="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                        <i class="fas fa-wave-square"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Stereng Bergegar</h3>
                    <p class="text-sm text-gray-500">Gegaran terasa di tapak tangan, menghilangkan ketenangan sewaktu memandu.</p>
                </div>
                <!-- Card 4 -->
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover-card reveal">
                    <div class="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                        <i class="fas fa-car-crash"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Tayar Makan Sebelah</h3>
                    <p class="text-sm text-gray-500">Menyebabkan tayar anda "makan sebelah" dan menghilangkan cengkaman brek.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3: KENAPA IA BERLAKU -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div class="reveal">
                <img src="https://images.unsplash.com/photo-1486262715619-679ce438cb29?auto=format&fit=crop&w=800&q=80" alt="Komponen Kereta" class="rounded-2xl shadow-xl">
            </div>

            <div class="reveal">
                <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Mengapa Boleh Rosak?</h2>
                <p class="text-gray-600 mb-8">Iklim dan keadaan jalan di Malaysia sering menyebabkan 3 kerosakan kronik ini:</p>

                <div class="space-y-6">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 mt-1"><i class="fas fa-circle-xmark text-brand-red text-xl"></i></div>
                        <div class="ml-4">
                            <h4 class="font-bold text-lg">① Bushing Plastik Haus & Hancur</h4>
                            <p class="text-sm text-gray-600 mt-1">Hentakan berulang pada jalan berlubang akan memampatkan guide bushing (penahan aci), menyebabkan aci (shaft) mula bergetar.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 mt-1"><i class="fas fa-droplet-slash text-brand-red text-xl"></i></div>
                        <div class="ml-4">
                            <h4 class="font-bold text-lg">② Musuh Utama - Air & Pasir</h4>
                            <p class="text-sm text-gray-600 mt-1">Boot getah stereng yang koyak akan membenarkan air hujan membasuh gris pelincir, seterusnya menyebabkan kakisan dan karat yang teruk.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 mt-1"><i class="fas fa-lock text-brand-red text-xl"></i></div>
                        <div class="ml-4">
                            <h4 class="font-bold text-lg text-brand-red">③ Risiko Maut "Total Steering Lock"</h4>
                            <p class="text-sm text-gray-600 mt-1">Ini yang paling menakutkan! Jika dibiarkan, karat dan herotan gear boleh menyebabkan stereng anda tersangkut (jammed) secara tiba-tiba ketika sedang membelok.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: BEFORE / AFTER SLIDER -->
    <section class="py-20 bg-brand-black text-white text-center">
        <div class="max-w-4xl mx-auto px-4 reveal">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Perbezaan Ketara Kualiti Kami</h2>
            <p class="text-gray-400 mb-12">Berhenti membahayakan nyawa anda. Lihat sendiri beza komponen rosak dan komponen *original refurbished* yang dipasang.</p>
            
            <div class="slider-container aspect-ratio-box shadow-2xl">
                <!-- Background Image (After / Clean) -->
                <img src="https://images.unsplash.com/photo-1635773054087-4384a56a6557?auto=format&fit=crop&w=800&q=80" class="img-background" alt="Selepas - Stereng Bersih">
                <!-- Foreground Image (Before / Rusty) -->
                <img src="https://images.unsplash.com/photo-1599557434190-674e2d3bb63d?auto=format&fit=crop&w=800&q=80" class="img-foreground" id="foreground-img" alt="Sebelum - Steering Rack Berkarat">
                <!-- Range Slider -->
                <input type="range" min="1" max="100" value="50" class="slider" id="compare-slider">
                
                <div class="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-xs font-bold z-30">SEBELUM (BERKARAT)</div>
                <div class="absolute bottom-4 right-4 bg-brand-red px-3 py-1 rounded text-xs font-bold z-30">SELEPAS (REFURBISHED)</div>
            </div>
        </div>
    </section>

    <!-- SECTION 5: KENAPA PILIH AZAM AUTO? -->
    <section class="py-20 bg-brand-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Kenapa Di Azam Auto Berek 12?</h2>
            <p class="text-gray-600 mb-16">Kami mahu mengembalikan brand Cawangan Berek 12 kami sebagai Pusat Pakar (Speciality) dalam pembaikan dan penukaran steering rack kenderaan EPS anda!</p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                <!-- Benefit 1 -->
                <div class="flex flex-col items-center hover-card p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-black text-xl mb-4"><i class="fas fa-tools"></i></div>
                    <h4 class="font-bold text-md mb-2">Pakar EPS</h4>
                    <p class="text-xs text-gray-500">Pusat Pakar Pembaikan Steering Rack</p>
                </div>
                <!-- Benefit 2 -->
                <div class="flex flex-col items-center hover-card p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-black text-xl mb-4"><i class="fas fa-wallet"></i></div>
                    <h4 class="font-bold text-md mb-2">Jimat Kos</h4>
                    <p class="text-xs text-gray-500">Rawat sekarang sebelum kos pembaikan melambung berkali ganda! kami periksa dan tukar apa yang perlu sahaja</p>
                </div>
                <!-- Benefit 3 -->
                <div class="flex flex-col items-center hover-card p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-black text-xl mb-4"><i class="fas fa-car-side"></i></div>
                    <h4 class="font-bold text-md mb-2">Rasa Kereta Baru</h4>
                    <p class="text-xs text-gray-500">Tiada lagi gegaran, kembalikan ketenangan.</p>
                </div>
                <!-- Benefit 4 -->
                <div class="flex flex-col items-center hover-card p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-black text-xl mb-4"><i class="fas fa-award"></i></div>
                    <h4 class="font-bold text-md mb-2">Waranti 3 Bulan</h4>
                    <p class="text-xs text-gray-500">100% tanpa risiko kerugian.</p>
                </div>
                <!-- Benefit 5 -->
                <div class="flex flex-col items-center hover-card p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-black text-xl mb-4"><i class="fas fa-cog"></i></div>
                    <h4 class="font-bold text-md mb-2">Unit Refurbished</h4>
                    <p class="text-xs text-gray-500">Unit alat ganti Original Refurbished.</p>
                </div>
                <!-- Benefit 6 -->
                <div class="flex flex-col items-center hover-card p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div class="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white text-xl mb-4"><i class="fas fa-tag"></i></div>
                    <h4 class="font-bold text-md mb-2">Pakej All-In</h4>
                    <p class="text-xs text-gray-500">Tawaran pakej gila-gila untuk anda.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 6: SERVIS KAMI (Timeline) -->
    <section class="py-20 bg-white border-y border-gray-100">
        <div class="max-w-7xl mx-auto px-4 text-center reveal">
            <h2 class="text-2xl md:text-3xl font-extrabold mb-12">Proses Pemasangan Profesional KAMI</h2>
            <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative">
                <!-- Line background for desktop -->
                <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
                
                <div class="flex flex-col items-center bg-white px-4">
                    <div class="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center font-bold mb-3 shadow-md z-10"><i class="fas fa-search"></i></div>
                    <p class="font-bold text-sm">Pemeriksaan</p>
                </div>
                <div class="flex flex-col items-center bg-white px-4">
                    <div class="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center font-bold mb-3 shadow-md z-10"><i class="fas fa-stethoscope"></i></div>
                    <p class="font-bold text-sm">Diagnos</p>
                </div>
                <div class="flex flex-col items-center bg-white px-4">
                    <div class="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center font-bold mb-3 shadow-md z-10"><i class="fas fa-wrench"></i></div>
                    <p class="font-bold text-sm">Tukar Unit</p>
                </div>
                <div class="flex flex-col items-center bg-white px-4">
                    <div class="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center font-bold mb-3 shadow-md z-10"><i class="fas fa-dharmachakra"></i></div>
                    <p class="font-bold text-sm">Alignment</p>
                </div>
                <div class="flex flex-col items-center bg-white px-4">
                    <div class="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center font-bold mb-3 shadow-md z-10"><i class="fas fa-road"></i></div>
                    <p class="font-bold text-sm">Road Test</p>
                </div>
                <div class="flex flex-col items-center bg-white px-4">
                    <div class="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-bold mb-3 shadow-lg z-10"><i class="fas fa-flag-checkered"></i></div>
                    <p class="font-bold text-sm text-brand-red">Selesai</p>
                </div>
            </div>
            <p class="text-gray-500 text-sm mt-10">Kerja pemasangan akan dijalankan dengan berhati-hati secara profesional sehingga kenderaan selamat diserahkan semula kepada pelanggan.</p>
        </div>
    </section>

    <!-- SECTION 7 & 8: PRICING & WHAT YOU GET -->
    <section id="harga" class="py-24 bg-brand-gray relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                <h2 class="text-3xl md:text-5xl font-extrabold mb-4 uppercase">KEMPEN PROMOSI PEMULIHAN KEPAKARAN STEERING RACK EPS</h2>
                <p class="text-gray-600 text-lg">Kami faham, kos penukaran di pusat servis luar sangat mahal. Oleh itu, kami bawakan Tawaran "Pakej All-In".</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                
                <!-- Pricing Card 1 -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative hover-card reveal">
                    <div class="bg-brand-black text-white py-4 text-center">
                        <h3 class="text-2xl font-bold uppercase tracking-wider">Sistem Motor Bawah</h3>
                        <p class="text-sm text-gray-400 uppercase">(Rak Stereng)</p>
                    </div>
                    <div class="p-8 text-center">
                        <p class="text-gray-500 line-through text-lg mb-2">Harga Asal: RM1,500</p>
                        <div class="flex justify-center items-baseline mb-6">
                            <span class="text-2xl font-extrabold text-brand-red">RM</span>
                            <span class="text-6xl font-extrabold text-brand-red tracking-tight">750</span>
                        </div>
                        
                        <div class="space-y-4 text-left mb-8 font-medium">
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Unit alat ganti Original Refurbished</p>
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Kos keseluruhan upah dan pemasangan</p>
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Pemeriksaan unit percuma</p>
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Pelarasan tayar (Alignment) percuma</p>
                        </div>
                        
                        <a href="https://wa.me/60178441058?text=Saya%20nak%20tempah%20slot%20promosi%20Motor%20Bawah%20RM750" class="block w-full bg-brand-red text-white font-bold py-4 rounded-lg shadow-md hover:bg-red-700 transition">
                            TEMPAH SLOT MOTOR BAWAH
                        </a>
                    </div>
                </div>

                <!-- Pricing Card 2 -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-brand-red relative hover-card reveal scale-100 md:scale-105 z-10">
                    <div class="absolute top-0 right-0 bg-brand-yellow text-brand-black font-bold text-xs px-3 py-1 rounded-bl-lg">PALING LARIS</div>
                    <div class="bg-brand-red text-white py-4 text-center">
                        <h3 class="text-2xl font-bold uppercase tracking-wider">Sistem Motor Atas</h3>
                        <p class="text-sm text-red-200 uppercase">(Tiang Stereng)</p>
                    </div>
                    <div class="p-8 text-center">
                        <p class="text-gray-500 line-through text-lg mb-2">Harga Asal: RM1,500</p>
                        <div class="flex justify-center items-baseline mb-6">
                            <span class="text-2xl font-extrabold text-brand-black">RM</span>
                            <span class="text-6xl font-extrabold text-brand-black tracking-tight">850</span>
                        </div>
                        
                        <div class="space-y-4 text-left mb-8 font-medium">
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Unit alat ganti Original Refurbished</p>
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Kos keseluruhan upah dan pemasangan</p>
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Pemeriksaan unit percuma</p>
                            <p class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Pelarasan tayar (Alignment) percuma</p>
                        </div>
                        
                        <a href="https://wa.me/60178441058?text=Saya%20nak%20tempah%20slot%20promosi%20Motor%20Atas%20RM850" class="block w-full bg-brand-red text-white font-bold py-4 rounded-lg pulse-btn shadow-lg hover:bg-red-700 transition">
                            TEMPAH SLOT MOTOR ATAS
                        </a>
                    </div>
                </div>
            </div>

            <!-- Cara Tempahan -->
            <div class="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100 reveal">
                <h4 class="font-bold text-xl mb-4 text-center">Cara Membuat Tempahan:</h4>
                <ol class="list-decimal list-inside space-y-3 text-gray-700 font-medium">
                    <li>Klik butang tempahan di atas untuk ke Payment Gateway.</li>
                    <li>Bayar deposit tempahan (booking) anda secara dalam talian (online).</li>
                    <li>Setelah berjaya, resit bukti pembayaran <strong class="text-brand-red">WAJIB</strong> dihantar terus ke nombor WhatsApp: <a href="https://wa.me/60178441058" target="_blank" class="font-bold underline text-blue-600 hover:text-green-500 transition-colors">+60 17-844 1058</a> untuk pengesahan slot.</li>
                </ol>
                <p class="text-xs text-gray-500 mt-4 italic text-center">* Pemasangan tertakluk kepada sistem temujanji (booking) yang diwajibkan bagi mengesahkan slot harian anda.</p>
            </div>
        </div>
    </section>

    <!-- SECTION 9: WARRANTY -->
    <section class="py-16 bg-brand-black text-white text-center reveal">
        <div class="max-w-4xl mx-auto px-4 flex flex-col items-center">
            <div class="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center border-4 border-brand-black outline outline-2 outline-yellow-500 mb-6 shadow-2xl">
                <div class="text-center text-brand-black">
                    <span class="block text-4xl font-extrabold leading-none">3</span>
                    <span class="block text-xs font-bold uppercase tracking-widest">Bulan</span>
                </div>
            </div>
            <h2 class="text-3xl font-extrabold mb-4 uppercase tracking-wide">Jaminan Kualiti 3 Bulan</h2>
            <p class="text-gray-400 max-w-2xl text-lg">
                Setiap pemasangan steering rack di Azam Auto Berek 12 didatangkan bersama jaminan kualiti dan waranti selama 3 bulan. Anda memandu dengan tenang, 100% tanpa risiko kerugian (selagi tak okay , datang lagi kami baiki hingga puas hati).
            </p>
        </div>
    </section>

    <!-- SECTION 10: CUSTOMER REVIEW -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-16">Apa Kata Pelanggan Kami?</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <!-- Google Review 1 -->
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow relative text-left">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">Z</div>
                            <div>
                                <h3 class="font-bold text-gray-900 text-sm">Zamzuri Ismail</h3>
                                <div class="flex text-brand-yellow text-xs mt-1">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="w-5 h-5">
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">"This another friendly and professional workshop tho. They provides many kinds of automotive services under one roof.. convenient. Best part is, fast service & recovery. The owner I think really friendly, plus the worker as well."</p>
                    <a href="https://maps.app.goo.gl/F3hpPjYBVyvSeVAF9" target="_blank" class="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1 mt-auto">
                        Baca di Google <i class="fas fa-external-link-alt text-xs"></i>
                    </a>
                </div>

                <!-- Google Review 2 -->
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow relative text-left">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">S</div>
                            <div>
                                <h3 class="font-bold text-gray-900 text-sm">SYAFIQ HAKIM</h3>
                                <div class="flex text-brand-yellow text-xs mt-1">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="w-5 h-5">
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">"Best service from Azam Auto. My car couldn't move due to EPB system jam problem on the first day of Raya Haji... Pomen came directly to my house to solve my car problem. Highly recommended 👍"</p>
                    <a href="https://maps.app.goo.gl/kRtnJzbJgMpfqEB29" target="_blank" class="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1 mt-auto">
                        Baca di Google <i class="fas fa-external-link-alt text-xs"></i>
                    </a>
                </div>

                <!-- Google Review 3 -->
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow relative text-left">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg">H</div>
                            <div>
                                <h3 class="font-bold text-gray-900 text-sm">hadi die</h3>
                                <div class="flex text-brand-yellow text-xs mt-1">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="w-5 h-5">
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">"kedai terbaik bg saya..servis cepat..spare part ada terus x perlu tunggu lama2..ruang menunggu full aircond siap kerusi urut😊 harga pun berpatutan..memang recomended"</p>
                    <a href="https://maps.app.goo.gl/DAgPswXNz6gmorH48" target="_blank" class="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1 mt-auto">
                        Baca di Google <i class="fas fa-external-link-alt text-xs"></i>
                    </a>
                </div>
            </div>

            <!-- WhatsApp Screenshots Placeholder -->
            <div class="bg-gray-100 p-8 rounded-2xl flex flex-col md:flex-row justify-center gap-4 items-center">
                <div class="w-full md:w-1/3 bg-white h-64 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 font-bold flex-col">
                    <i class="fab fa-whatsapp text-4xl mb-2 text-green-500"></i>
                    [Screenshot WhatsApp 1]
                </div>
                <div class="w-full md:w-1/3 bg-white h-64 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 font-bold flex-col">
                    <i class="fab fa-whatsapp text-4xl mb-2 text-green-500"></i>
                    [Screenshot WhatsApp 2]
                </div>
                <div class="w-full md:w-1/3 bg-white h-64 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 font-bold flex-col">
                    <i class="fab fa-whatsapp text-4xl mb-2 text-green-500"></i>
                    [Screenshot WhatsApp 3]
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 12: COUNTDOWN TIMER -->
    <section class="py-12 bg-red-50 border-y border-red-100 reveal">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-2xl font-bold text-brand-red mb-2"><i class="fas fa-stopwatch"></i> AMARAN: TAWARAN TERHAD!</h2>
            <p class="text-gray-700 mb-6 font-medium">
                Promosi jualan runtuh ini hanya sah bermula 8 Julai 2026 sehingga 31 Julai 2026 SAHAJA, khas untuk melepaskan stok sedia ada yang terhad di Berek 12. Harga ini juga HANYA diberikan kepada anda yang membuat tempahan eksklusif menerusi Landing Page ini sahaja!
            </p>
            
            <div class="flex justify-center space-x-4 text-brand-red">
                <div class="flex flex-col items-center bg-white border border-red-200 w-20 h-20 justify-center rounded-lg shadow-sm">
                    <span id="cd-days" class="text-3xl font-extrabold leading-none">00</span>
                    <span class="text-xs uppercase font-bold">Hari</span>
                </div>
                <div class="text-3xl font-bold pt-3">:</div>
                <div class="flex flex-col items-center bg-white border border-red-200 w-20 h-20 justify-center rounded-lg shadow-sm">
                    <span id="cd-hours" class="text-3xl font-extrabold leading-none">00</span>
                    <span class="text-xs uppercase font-bold">Jam</span>
                </div>
                <div class="text-3xl font-bold pt-3">:</div>
                <div class="flex flex-col items-center bg-white border border-red-200 w-20 h-20 justify-center rounded-lg shadow-sm">
                    <span id="cd-mins" class="text-3xl font-extrabold leading-none">00</span>
                    <span class="text-xs uppercase font-bold">Minit</span>
                </div>
                <div class="text-3xl font-bold pt-3">:</div>
                <div class="flex flex-col items-center bg-white border border-red-200 w-20 h-20 justify-center rounded-lg shadow-sm">
                    <span id="cd-secs" class="text-3xl font-extrabold leading-none">00</span>
                    <span class="text-xs uppercase font-bold">Saat</span>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 13: FAQ -->
    <section class="py-20 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <h2 class="text-3xl font-extrabold mb-10 text-center">Soalan Lazim (FAQ)</h2>
            
            <div class="space-y-4">
                <!-- FAQ 1 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                    <button class="w-full text-left px-6 py-4 font-bold focus:outline-none flex justify-between items-center bg-white" onclick="toggleAccordion(this)">
                        <span>Adakah harga berubah jika ada kerosakan lain?</span>
                        <i class="fas fa-chevron-down text-brand-red transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content px-6 bg-white border-t border-gray-100">
                        <p class="py-4 text-gray-600 text-sm">
                            Kami amat telus. Anda perlu menghubungi Pengurus Cawangan Berek 12 untuk penerangan harga, dan persetujuan anda adalah diwajibkan jika ada sebarang penambahan skop kerja.
                        </p>
                    </div>
                </div>
                
                <!-- FAQ 2 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                    <button class="w-full text-left px-6 py-4 font-bold focus:outline-none flex justify-between items-center bg-white" onclick="toggleAccordion(this)">
                        <span>Berapa lama proses pemasangan?</span>
                        <i class="fas fa-chevron-down text-brand-red transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content px-6 bg-white border-t border-gray-100">
                        <p class="py-4 text-gray-600 text-sm">
                            Kerja pemasangan akan dijalankan dengan berhati-hati secara profesional sehingga kenderaan selamat diserahkan semula kepada pelanggan. Kami akan meminta pelanggan tinggalkan kenderaan di bengkel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 14: GIANT CTA / WARNING -->
    <section class="py-24 bg-brand-black text-white text-center">
        <div class="max-w-4xl mx-auto px-4 reveal">
            <h2 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Jangan Tunggu Steering Lock Berlaku Ketika Memandu.
            </h2>
            <p class="text-gray-400 text-lg mb-10">
                Anda boleh pilih untuk tutup website ini sekarang dan terus memandu dengan steering rack yang berbunyi. Tetapi adakah anda sanggup mempertaruhkan keselamatan keluarga anda sekiranya stereng tersebut tersekat di selekoh esok hari?
            </p>
            
            <a href="#harga" class="inline-block bg-brand-red text-white font-extrabold text-2xl py-6 px-12 rounded-xl pulse-btn shadow-2xl hover:bg-red-700 transition uppercase tracking-wide">
                TEMPAH SLOT PROMOSI SEKARANG
            </a>
        </div>
    </section>

    <!-- SECTION 15: TIKTOK -->
    <section class="py-16 bg-gray-50 border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-4 text-center reveal">
            <i class="fab fa-tiktok text-4xl text-black mb-4"></i>
            <h2 class="text-3xl md:text-4xl font-extrabold mb-8">Ikuti kami di TikTok</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <a href="https://www.tiktok.com/@azamautoberek12/video/7615810579462196498" target="_blank" class="group relative block w-full max-w-[325px] bg-black shadow-lg rounded-2xl overflow-hidden aspect-[9/16] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 mx-auto">
                    <img src="images/tiktok-1.jpg" alt="TikTok Thumbnail" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#ff0050] transition-colors duration-300 border border-white/20 shadow-lg">
                            <i class="fas fa-play text-2xl text-white ml-1"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                        <div class="flex items-center gap-2 text-sm font-bold">
                            <i class="fab fa-tiktok text-xl text-[#00f2fe]"></i> Tonton di TikTok
                        </div>
                    </div>
                </a>
                
                <a href="https://www.tiktok.com/@azamautoberek12/video/7649311929923603719" target="_blank" class="group relative block w-full max-w-[325px] bg-black shadow-lg rounded-2xl overflow-hidden aspect-[9/16] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 mx-auto">
                    <img src="images/tiktok-2.jpg" alt="TikTok Thumbnail" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#ff0050] transition-colors duration-300 border border-white/20 shadow-lg">
                            <i class="fas fa-play text-2xl text-white ml-1"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                        <div class="flex items-center gap-2 text-sm font-bold">
                            <i class="fab fa-tiktok text-xl text-[#00f2fe]"></i> Tonton di TikTok
                        </div>
                    </div>
                </a>
                
                <a href="https://www.tiktok.com/@azamautoberek12/video/7603400710524374293" target="_blank" class="group relative block w-full max-w-[325px] bg-black shadow-lg rounded-2xl overflow-hidden aspect-[9/16] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 mx-auto">
                    <img src="images/tiktok-3.jpg" alt="TikTok Thumbnail" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#ff0050] transition-colors duration-300 border border-white/20 shadow-lg">
                            <i class="fas fa-play text-2xl text-white ml-1"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                        <div class="flex items-center gap-2 text-sm font-bold">
                            <i class="fab fa-tiktok text-xl text-[#00f2fe]"></i> Tonton di TikTok
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- FOOTER & MAP -->
    <footer class="bg-gray-100 py-12 text-center text-sm text-gray-500 border-t border-gray-200 pb-24 md:pb-12">
        <div class="max-w-7xl mx-auto px-4">
            <h4 class="font-bold text-gray-800 text-lg mb-2">AZAM AUTO BODY WORK & SERVICES</h4>
            <p class="mb-6">Cawangan Berek 12, Kelantan</p>
            <p>&copy; 2026 Azam Auto. Hak Cipta Terpelihara. Promosi tertakluk kepada Terma & Syarat.</p>
        </div>
    </footer>

    <!-- STICKY CTA (Mobile Only) -->
    <div class="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex justify-between items-center">
        <div>
            <p class="text-xs text-gray-500 font-bold uppercase">Bermula Dari</p>
            <p class="text-xl font-extrabold text-brand-red leading-none">RM750</p>
        </div>
        <a href="#harga" class="bg-brand-red text-white font-bold py-3 px-6 rounded-lg text-sm shadow-md pulse-btn whitespace-nowrap">
            TEMPAH SEKARANG
        </a>
    </div>

    <!-- FLOATING WHATSAPP -->
    <a href="https://wa.me/60178441058" class="fixed bottom-24 md:bottom-8 right-4 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform z-50 pulse-btn" style="box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); animation: pulse-wa 2s infinite;">
        <i class="fab fa-whatsapp"></i>
    </a>

    <style>
        @keyframes pulse-wa {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
    </style>

    <!-- SCRIPTS FOR ANIMATIONS -->
    <script>
        // Reveal on Scroll
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Before/After Slider Logic
        const slider = document.getElementById('compare-slider');
        const foregroundImg = document.getElementById('foreground-img');
        if(slider && foregroundImg) {
            slider.addEventListener('input', (e) => {
                foregroundImg.style.width = `${e.target.value}%`;
            });
        }

        // Accordion Logic
        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = "rotate(0deg)";
            } else {
                // Close all others
                document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);
                document.querySelectorAll('.fa-chevron-down').forEach(el => el.style.transform = "rotate(0deg)");
                
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            }
        }

        // Countdown Timer (Target: 31 July 2026)
        const targetDate = new Date("July 31, 2026 23:59:59").getTime();
        
        const updateCountdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                clearInterval(updateCountdown);
                document.getElementById("cd-days").innerText = "00";
                document.getElementById("cd-hours").innerText = "00";
                document.getElementById("cd-mins").innerText = "00";
                document.getElementById("cd-secs").innerText = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Pad with zeros
            document.getElementById("cd-days").innerText = String(days).padStart(2, '0');
            document.getElementById("cd-hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("cd-mins").innerText = String(minutes).padStart(2, '0');
            document.getElementById("cd-secs").innerText = String(seconds).padStart(2, '0');
        }, 1000);
    </script>
</body>
</html>