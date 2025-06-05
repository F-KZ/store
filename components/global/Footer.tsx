'use client';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* À propos */}
          <div>
            <h3 className='text-lg font-bold mb-4'>À propos</h3>
            <p className='text-sm'>
              Depuis 2010, nous sommes votre destination de confiance pour des meubles de qualité. 
              Notre engagement envers l'excellence et le service client nous a permis de devenir 
              un leader dans l'industrie du mobilier.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Liens rapides</h3>
            <ul className='space-y-2'>
              <li><Link href='/products' className='hover:text-primary-foreground/80'>Nos produits</Link></li>
              <li><Link href='/about' className='hover:text-primary-foreground/80'>À propos</Link></li>
              <li><Link href='/contact' className='hover:text-primary-foreground/80'>Contact</Link></li>
              <li><Link href='/faq' className='hover:text-primary-foreground/80'>FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Contact</h3>
            <ul className='space-y-2 text-sm'>
              <li>123 Rue du Commerce</li>
              <li>75001 Paris, France</li>
              <li>Tél: +33 1 23 45 67 89</li>
              <li>Email: contact@mobilier-luxe.fr</li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Suivez-nous</h3>
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-primary-foreground/80'>
                <FaFacebook className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-primary-foreground/80'>
                <FaTwitter className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-primary-foreground/80'>
                <FaInstagram className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-primary-foreground/80'>
                <FaLinkedin className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm'>
          <p>© 2024 Mobilier Luxe. Tous droits réservés.</p>
          <div className='mt-2 space-x-4'>
            <Link href='/mentions-legales' className='hover:text-primary-foreground/80'>Mentions légales</Link>
            <Link href='/politique-confidentialite' className='hover:text-primary-foreground/80'>Politique de confidentialité</Link>
            <Link href='/cgv' className='hover:text-primary-foreground/80'>CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 