const load = document.querySelector('#loader')

setTimeout(() => {
 
  load.classList.add('opacity-0')

  
  setTimeout(() => {
    load.classList.add('hidden')
  }, 700)

}, 2000) 

function swapTickets(clickedImg) {
    const imgFront = document.getElementById('ticket-front');
    const imgBack = document.getElementById('ticket-back');

    // Jika yang diklik adalah gambar yang sedang di belakang (Z-index 10)
    if (clickedImg.classList.contains('z-10')) {
      
      // 1. Tambahkan animasi transisi keluar sebentar
      imgBack.style.transform = "translateX(20px) scale(0.95)";
      imgFront.style.transform = "translateX(-20px) scale(1.05)";

      setTimeout(() => {
        // 2. Tukar Class Tailwind untuk Posisi & Z-Index
        // Simpan class yang ada
        const frontClasses = ["top-0", "left-10", "border-4", "border-blue-500", "shadow-2xl", "z-20", "hover:scale-110"];
        const backClasses = ["top-8", "left-24", "border", "border-slate-200", "shadow-md", "z-10", "hover:brightness-110"];

        if (imgFront.classList.contains('z-20')) {
          // Tukar ke posisi belakang
          imgFront.classList.remove(...frontClasses);
          imgFront.classList.add(...backClasses);
          imgFront.style.transform = "";

          // Tukar ke posisi depan
          imgBack.classList.remove(...backClasses);
          imgBack.classList.add(...frontClasses);
          imgBack.style.transform = "";
        } else {
          // Kembalikan ke posisi semula
          imgFront.classList.remove(...backClasses);
          imgFront.classList.add(...frontClasses);
          imgFront.style.transform = "";

          imgBack.classList.remove(...frontClasses);
          imgBack.classList.add(...backClasses);
          imgBack.style.transform = "";
        }
      }, 200);
    } 
    // Jika klik yang depan, efek zoom sudah ditangani oleh hover:scale-110 di class CSS
  }