/* eslint-disable simple-import-sort/imports */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { RiMenu4Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import { assets } from '@/utils/AssetImport';
import Logo from '@/components/atoms/Logo';

import LinkAtom from '../atoms/LinkAtom';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import Distributor from './Distributor';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-primaryBg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center mx-5 lg:mx-12 justify-between p-4'>
        <div className='space-x-8 hidden lg:block'>
          <LinkAtom
            title={'Home'}
            url={'/'}
            className={isActive('/') ? 'text-main font-bold' : ''}
          />
          <LinkAtom
            title={'Our Products'}
            url={'/menu'}
            className={isActive('/menu') ? 'text-main font-bold' : ''}
          />
          <LinkAtom
            title={'About us'}
            url={'/about'}
            className={isActive('/about') ? 'text-main font-bold' : ''}
          />
          <LinkAtom
            title={'Contact us'}
            url={'/contact'}
            className={isActive('/contact') ? 'text-main font-bold' : ''}
          />
          <Dialog>
            <DialogTrigger asChild>
              <button className='font-montserrat font-medium hover:text-main transition-all duration-300'>
                Become a distributor
              </button>
            </DialogTrigger>
            <DialogContent className='p-0 max-w-md'>
              <Distributor />
            </DialogContent>
          </Dialog>
        </div>
        <div className='lg:-ml-28 flex items-center gap-4'>
          <span>
            <img
              className='w-12 block md:hidden'
              src={assets.logo}
              alt='logo'
            />
          </span>
          <Logo />
        </div>

        <div className='flex items-center space-x-8'>
          <img className='w-12 hidden md:block' src={assets.logo} alt='logo' />
          {/* Mobile Screen - Dropdown */}
          <div className='block lg:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
                  <span className='text-gray-700 text-2xl font-bold'>
                    <RiMenu4Line />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-primaryBg border border-gray-200 px-4 py-2 gap-3 rounded-lg shadow-lg mt-2'>
                <div className='space-y-3'>
                  <DropdownMenuItem>
                    <LinkAtom title='Home' url='/' />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LinkAtom title='Our Products' url='/menu' />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LinkAtom title='About us' url='/about' />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LinkAtom title='Contact us' url='/contact' />
                  </DropdownMenuItem>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className='font-montserrat font-medium hover:text-main transition-all duration-300'>
                        Become a distributor
                      </button>
                    </DialogTrigger>
                    <DialogContent className='p-0 max-w-md'>
                      <Distributor />
                    </DialogContent>
                  </Dialog>
                  {/* Social Media Links */}
                  <div className='flex space-x-4 mt-3'>
                    <a
                      href='https://www.instagram.com/groovyfoodsindia?igsh=MWczamdrMXc0bWkyMg=='
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaInstagram
                        size={20}
                        className='hover:text-main cursor-pointer'
                      />
                    </a>
                    <a
                      href='https://www.facebook.com/share/16XdDCyDWq/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaFacebook
                        size={20}
                        className='hover:text-main cursor-pointer'
                      />
                    </a>
                    <a
                      href='https://youtube.com/@groovyfoodsindia?si=khxpbeEeKb9Nx6T0'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaYoutube
                        size={20}
                        className='hover:text-main cursor-pointer'
                      />
                    </a>
                    <FaWhatsapp
                      size={20}
                      className='hover:text-main cursor-pointer'
                    />
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Social Media Links for Larger Screens */}
          <div className='hidden lg:flex items-center space-x-8'>
            <a
              href='https://www.instagram.com/groovyfoodsindia?igsh=MWczamdrMXc0bWkyMg=='
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram
                size={20}
                className='hover:text-main cursor-pointer'
              />
            </a>
            <a
              href='https://www.facebook.com/share/16XdDCyDWq/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook
                size={20}
                className='hover:text-main cursor-pointer'
              />
            </a>
            <a
              href='https://youtube.com/@groovyfoodsindia?si=khxpbeEeKb9Nx6T0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaYoutube size={20} className='hover:text-main cursor-pointer' />
            </a>
            <FaWhatsapp size={20} className='hover:text-main cursor-pointer' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
