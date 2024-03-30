import React from 'react';
import "./style.css";

export default function Footer() {
  return (
    <div className='text-neutral-600'>
      {/* Background */}
      <div className='bg-neutral-100 p-5 pt-20 '>
        {/* Grid */}
        <div className='grid grid-cols-4 px-20 ml-20'>

          {/* Contact Info */}
          <div className='flex flex-col'>
            <div className='Footer-img'></div>
            <div className='flex flex-col gap-y-2 text-sm pt-10'>
              <span>9188 122B Street,</span>
              <span>Surrey BC V3V 7M1 Canada.</span>
              <span>Call Us : +1 236-885-2533</span>
              <span>Email : service@moolnet.ca</span>
            </div>
          </div>

          {/* Services */}
          <div className='ml-10'>
            <span className='text-xl text-blue-600 font-chakra font-semibold'>SERVICES</span>
            <div className='flex flex-col text-sm gap-y-5 pt-10'>
              <span>Low Voltage Services</span>
              <span>IT Services</span>
              <span>Web Development</span>
              <span>Digital Marketing</span>
            </div>
          </div>

          {/* Other Links */}
          <div>
            <span className='text-xl text-blue-600 font-chakra font-semibold'>OTHER LINKS</span>
            <div className='flex flex-col text-sm gap-y-5 pt-10'>
              <span>Home</span>
              <span>About</span>
              <span>Service</span>
              <span>Blog</span>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <span className='text-xl text-blue-600 font-chakra font-semibold'>OPENING HOURS</span>
            <div className='flex flex-col text-sm gap-y-5 pt-10'>
              <span>Monday - Sunday <span className='ml-20'>8am - 6am</span></span>

              <span className='flex items-center gap-3 mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 20 20"><path fill="#3da1ff" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#b30000" d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63" /><path fill="#b30000" d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.672 2.672 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z" /><path fill="#b30000" d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.392 3.392 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z" /></svg>

              </span>
            </div>
          </div>

        </div>
        <div className='flex flex-col justify-center items-center pt-20 pb-20'>
          <div className='py-[0.5px] bg-neutral-300 w-[80%] mb-16'></div>
          <div>   ©Copyright 2024 MOOLNET.CA All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}
