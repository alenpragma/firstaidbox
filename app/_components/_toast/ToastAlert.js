import Swal from "sweetalert2";

export const ShowSuccessModal = () => {
  Swal.fire({
    html: `
      <div class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Thank You For Your Order</h2>
        
        <div class="text-gray-600 mb-4">
          <p class="mb-3">খুব শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন এবং গুডমর্নিং ন্যাচারাল ফাস্ট এইড বক্সটি আপনার ঠিকানায় পৌঁছে দেবেন।</p>
          
          <p class="mb-3">যেকোনো তথ্য বা সহায়তার প্রয়োজন হলে, আমাদের হেল্পলাইনে নির্দ্বিধায় যোগাযোগ করুন।</p>
        </div>
        
        <div class="flex items-center justify-center gap-2 text-green-600 font-medium mb-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <span>কল করুন: <a href="tel:01511899175" class="font-bold">01511899175</a></span>
        </div>
        
        <p class="text-gray-600 italic">আপনার ভরসায় আমরা কৃতজ্ঞ।</p>
      </div>
    `,
    showConfirmButton: false,
    customClass: {
      popup: "w-fit max-w-md px-6 py-8 rounded-xl",
    },
    timer: 5000,
    timerProgressBar: true,
  });
};
