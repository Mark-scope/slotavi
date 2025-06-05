// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import Logo from '../assets/logo.svg';
// import Button from '../components/Button';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
//       <Link href="/">
//         <Image src={Logo} alt="Slotavi Logo" width={120} height={120} className="cursor-pointer" />
//       </Link>
//       <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//         <FontAwesomeIcon icon={faBars} size="2x" />
//       </button>
//       <nav className={`md:flex gap-6 items-center ${menuOpen ? 'block' : 'hidden'}`}>
//         <Link href="/about">About</Link>
//         <Link href="/faqs">FAQs</Link>
//         <Link href="/contact">Contact</Link>
//         <Button label="Register" margin='0'/>
//       </nav>
//     </header>
//   );
// }

