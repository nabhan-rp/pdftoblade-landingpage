
export type Language = 'id' | 'en';

export const translations = {
  id: {
    nav: {
      products: 'Produk',
      howItWorks: 'Cara Kerja',
      openPdfToBlade: 'Buka PDF to Blade',
      openBladeViewer: 'Buka Blade Viewer'
    },
    hero: {
      badge: 'The Ultimate Laravel Blade Suite',
      titleStart: 'Satu Platform untuk',
      titleCreate: 'Membuat',
      titleAnd: '&',
      titlePrint: 'Mencetak',
      titleEnd: 'Template Blade.',
      description: 'Kelola dokumen Laravel Anda dengan dua tool powerfull. Desain template surat tanpa coding, atau Render & Cetak file .blade.php menjadi PDF langsung dari browser tanpa instalasi PHP lokal.',
      btnBuilder: 'Buka Builder',
      btnViewer: 'Buka Viewer',
      cardBuilderDesc: 'Buat template dari nol, edit file .blade.php yang ada, atau convert PDF menggunakan AI.',
      cardViewerDesc: 'Render file .blade.php menjadi visual nyata dan ekspor ke PDF siap cetak.'
    },
    features: {
      app1: 'Aplikasi 1',
      app1Title: 'PDF to Blade (Builder)',
      f1Title: 'Konversi PDF AI',
      f1Desc: 'Upload PDF surat lama, AI akan mendeteksi struktur dan mengubahnya menjadi kode Blade.',
      f2Title: 'GUI No-Code Editor',
      f2Desc: 'Drag-and-drop elemen surat, atur margin, dan styling tanpa menyentuh CSS.',
      f3Title: 'Edit Blade Ada',
      f3Desc: 'Punya file .blade.php? Upload kembali ke editor untuk perbaikan cepat.',
      
      app2: 'Aplikasi 2',
      app2Title: 'Blade Viewer & Exporter',
      f4Title: 'Rendering Instan',
      f4Desc: 'Lihat hasil akhir file .blade.php secara visual langsung di browser tanpa server Laravel.',
      f5Title: 'Ekspor PDF & Cetak',
      f5Desc: 'Cetak hasil render ke format PDF berkualitas tinggi siap distribusi.',
      f6Title: 'Tanpa Instalasi',
      f6Desc: 'Berguna untuk non-developer atau admin yang hanya perlu mencetak template tanpa setup environment.'
    },
    how: {
      title: 'Workflow Ekosistem',
      subtitle: 'Bagaimana kedua aplikasi ini bekerja sama.',
      step1Title: 'Buat / Edit',
      step1Desc: 'Gunakan PDFtoBlade untuk membuat desain surat atau mengedit file .blade.php yang sudah ada. Hasilnya adalah file kode yang bersih.',
      step2Title: 'View / Cetak',
      step2Desc: 'Gunakan BladeViewer untuk membuka file hasil desain tadi. Aplikasi ini akan merender kode menjadi tampilan visual dan siap cetak ke PDF.',
    },
    demo: {
      title: 'Simulasi Output',
      desc: 'Lihat perbandingan antara kode yang dihasilkan oleh Builder dan hasil render visual oleh Viewer.',
      btnCode: 'Hasil Kode',
      btnPreview: 'Pratinjau PDF',
      btnDownload: 'Unduh PDF',
      copySuccess: 'Tersalin'
    },
    footer: {
      desc: 'Platform open-source untuk mempermudah pengelolaan template surat Laravel. Dari desain visual hingga pencetakan PDF, semua berjalan di browser.',
      products: 'Produk',
      source: 'Kode Sumber',
      legal: 'Legal & Info',
      repoBuilder: 'Repo Builder',
      repoViewer: 'Repo Viewer',
      baseTool: 'Our Blade Tools (Base)',
      privacy: 'Kebijakan Privasi',
      tos: 'Ketentuan Layanan',
      disclaimer: 'Penyangkalan',
      rights: '© 2024 Blade Tools Suite. Dikembangkan oleh Nabhan RP.',
      disclaimerText: 'DISCLAIMER: Aplikasi ini disediakan "sebagaimana adanya" tanpa jaminan apa pun. Pengguna bertanggung jawab penuh atas template surat yang dibuat dan data yang diproses. Kami tidak menyimpan data sensitif Anda di server (client-side processing).',
      madeWith: 'Dibuat dengan'
    }
  },
  en: {
    nav: {
      products: 'Products',
      howItWorks: 'How it Works',
      openPdfToBlade: 'Open PDF to Blade',
      openBladeViewer: 'Open Blade Viewer'
    },
    hero: {
      badge: 'The Ultimate Laravel Blade Suite',
      titleStart: 'One Platform to',
      titleCreate: 'Create',
      titleAnd: '&',
      titlePrint: 'Print',
      titleEnd: 'Blade Templates.',
      description: 'Manage your Laravel documents with two powerful tools. Design letter templates without coding, or Render & Print .blade.php files to PDF directly from your browser without local PHP installation.',
      btnBuilder: 'Open Builder',
      btnViewer: 'Open Viewer',
      cardBuilderDesc: 'Create templates from scratch, edit existing .blade.php files, or convert PDFs using AI.',
      cardViewerDesc: 'Render .blade.php files into real visuals and export to print-ready PDFs.'
    },
    features: {
      app1: 'Application 1',
      app1Title: 'PDF to Blade (Builder)',
      f1Title: 'AI PDF Conversion',
      f1Desc: 'Upload old letter PDFs, AI will detect structure and convert it to Blade code.',
      f2Title: 'GUI No-Code Editor',
      f2Desc: 'Drag-and-drop elements, adjust margins, and styling without touching CSS.',
      f3Title: 'Edit Existing Blade',
      f3Desc: 'Have a .blade.php file? Upload it back to the editor for quick fixes.',
      
      app2: 'Application 2',
      app2Title: 'Blade Viewer & Exporter',
      f4Title: 'Instant Rendering',
      f4Desc: 'See the final result of .blade.php files visually in the browser without a Laravel server.',
      f5Title: 'PDF Export & Print',
      f5Desc: 'Print rendered results to high-quality PDF ready for distribution.',
      f6Title: 'Standalone Tool',
      f6Desc: 'Useful for non-developers or admins who only need to print templates without environment setup.'
    },
    how: {
      title: 'Ecosystem Workflow',
      subtitle: 'How these two applications work together.',
      step1Title: 'Create / Edit',
      step1Desc: 'Use PDFtoBlade to design letters or edit existing .blade.php files. The result is clean code files.',
      step2Title: 'View / Print',
      step2Desc: 'Use BladeViewer to open the designed file. It will render the code into a visual display ready to be printed as PDF.',
    },
    demo: {
      title: 'Output Simulation',
      desc: 'See the comparison between code generated by the Builder and visual rendering by the Viewer.',
      btnCode: 'Code Result',
      btnPreview: 'PDF Preview',
      btnDownload: 'Download PDF',
      copySuccess: 'Copied'
    },
    footer: {
      desc: 'Open-source platform to simplify Laravel letter template management. From visual design to PDF printing, everything runs in the browser.',
      products: 'Products',
      source: 'Source Code',
      legal: 'Legal & Info',
      repoBuilder: 'Builder Repo',
      repoViewer: 'Viewer Repo',
      baseTool: 'Our Blade Tools (Base)',
      privacy: 'Privacy Policy',
      tos: 'Terms of Service',
      disclaimer: 'Disclaimer',
      rights: '© 2024 Blade Tools Suite. Developed by Nabhan RP.',
      disclaimerText: 'DISCLAIMER: This application is provided "as is" without any warranties. Users are fully responsible for created templates and processed data. We do not store your sensitive data on servers (client-side processing).',
      madeWith: 'Made with'
    }
  }
};
