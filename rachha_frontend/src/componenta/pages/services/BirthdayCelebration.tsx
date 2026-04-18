import { ServiceBentoGrid } from '../../ui/bento/ServiceBentoGrid';
import { ServiceHeroSection } from '../../ui/hero/ServiceHeroSection';
import type { BubbleData } from '../../ui/button/FloatingBubbles';

const BirthdayCelebration = () => {
  const heroMediaItems = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200',
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200',
  ];

  const birthdayImages = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800',
  ];

  const servicesIncluded: BubbleData[] = [
    {
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjM4NTI3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Décor & Design',
    },
    {
      image: 'https://images.unsplash.com/photo-1622626426572-c268eb006092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NjM5NDg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Entertainment',
    },
    {
      image: 'https://images.unsplash.com/photo-1598439473183-42c9301db5dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnxlbnwxfHx8fDE3NzYzNTI1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Catering & Food',
    },
    {
      image: 'https://images.unsplash.com/photo-1598399929533-847def01aa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NjM3MDYyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Venue Management',
    },
    {
      image: 'https://images.unsplash.com/photo-1616130007484-24a2c05fdfbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2ZmZWUlMjBjdXAlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc2MzgyMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Photography & Video',
    },
    
     {
      image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Custom Planning',
    },
   {
      image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Custom Planning',
    },
     {
      image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Custom Planning',
    },
     {
      image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Custom Planning',
    },
   {
      image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Custom Planning',
    },
   {
      image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Custom Planning',
    },
   {
      image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Custom Planning',
    },
    
  ];

  return (
    <main className="relative bg-roseMist">
      <ServiceHeroSection
        title="Birthday Celebrations"
        subtitle="Create unforgettable moments with our premium celebration services"
        mediaItems={heroMediaItems}
      />

      <ServiceBentoGrid
        title="Birthday Celebrations"
        description="Celebrate life's special moments with thoughtfully curated birthday experiences that blend creativity, elegance, and seamless execution. From vibrant kids' parties to sophisticated milestone celebrations, every detail—from décor to entertainment—is designed to create a joyful and unforgettable atmosphere."
        mediaItems={birthdayImages}
        servicesImages={servicesIncluded}
      />
    </main>
  );
};

export default BirthdayCelebration;
