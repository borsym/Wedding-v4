import { BsFillSuitHeartFill } from 'react-icons/bs';
import LandingBackground from '../assets/landing-background.png';
import { ImVideoCamera } from 'react-icons/im';
import { GiBigDiamondRing } from 'react-icons/gi';

export const cardsData = [
  {
    title: 'Timeless',
    text: 'Love Captured Forever',
    image: LandingBackground,
    href: '#',
  },
  {
    title: 'Adventure',
    text: "Love's Epic Journey",
    image: LandingBackground,
    href: '#',
  },
  {
    title: 'Myth',
    text: "You're Greatest Story",
    image: LandingBackground,
    href: '#',
  },
];

export const servicesData = [
  {
    title: 'Capturing Special Moments',
    paragraph:
      'Our videography team specializes in creating beautiful, high-quality video productions for all occasions. From weddings to birthdays to corporate events, we have the skills and experience to capture your memories in stunning detail.',
    icon: <ImVideoCamera size={'12vh'} />,
  },
  {
    title: 'Celebrating Love',
    paragraph:
      'From engagement shoots to wedding day coverage, our team is dedicated to capturing the love and emotion of your special occasion. We creat beautiful, timeless films that you will cherish for years to come.',
    icon: <BsFillSuitHeartFill size={'12vh'} />,
  },
  {
    title: 'The Perfect Wedding',
    paragraph:
      ' Our team offers a range of services to help make your dream wedding a reality. We have everything you need to create a beautiful and memorable celebration. Let us help you plan and execute the perfect wedding day.',
    icon: <GiBigDiamondRing size={'12vh'} />,
  },
];
