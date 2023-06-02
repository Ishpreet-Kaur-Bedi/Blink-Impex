import React from "react";

const ContactUs = () => {
  return (
    <section class="text-gray-400 body-font relative">
         <div class="flex flex-col text-center w-full pt-24 mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-0 text-white">
            CONTACT <span className="text-yellow-800">US</span>
          </h1>
          
        </div>
      <div class="container px-5 py-24 pt-0 mx-auto flex sm:flex-nowrap flex-wrap">
        
        <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            class="absolute inset-0"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=22.8053852,70.8185317+(Blink%20Impex)&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"

            style={{ filter: "grayscale(1), contrast(1.2) opacity(0.16)" }}
          ></iframe>
          <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">
              SHOP NO-10, Chitrakoot 4 GIDC B/H sanala road, Morbi 363641
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a class="text-yellow-800 leading-relaxed">example@email.com</a>
              <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">+91 63539 43201</p>
              <p class="leading-relaxed">+91 88495 57832</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-white text-lg mb-1 font-medium title-font">
            Reach out to us
          </h2>
          <p class="leading-relaxed mb-5">
            Anything you want to ask? Jot it down below
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded text-lg">
            Button
          </button>
          <p class="text-xs text-gray-400 text-opacity-90 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;