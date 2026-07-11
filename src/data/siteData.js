import { HeartPulse, Syringe, Scissors, Stethoscope, Activity, TestTube } from 'lucide-react';

export const siteData = {
  trustMetrics: [
    { value: '12+', label: 'Years Experience' },
    { value: '24/7', label: 'Emergency Care' },
    { value: '5K+', label: 'Happy Pets' }
  ],
  services: [
    {
      id: 1,
      title: 'Wellness Exams',
      description: 'Regular checkups and preventive care for a healthy life.',
      icon: HeartPulse,
      color: 'text-accent'
    },
    {
      id: 2,
      title: 'Vaccinations',
      description: 'Keep your pets safe with our advanced vaccination programs.',
      icon: Syringe,
      color: 'text-primary'
    },
    {
      id: 3,
      title: 'Dental Care',
      description: 'Professional dental cleanings for strong teeth and gums.',
      icon: Scissors,
      color: 'text-accent'
    },
    {
      id: 4,
      title: 'Surgery',
      description: 'Advanced surgical procedures with compassionate care.',
      icon: Stethoscope,
      color: 'text-accent'
    },
    {
      id: 5,
      title: 'Emergency Care',
      description: '24/7 emergency services for critical and urgent situations.',
      icon: Activity,
      color: 'text-primary'
    },
    {
      id: 6,
      title: 'Laboratory Tests',
      description: 'In-house diagnostics for accurate and fast results.',
      icon: TestTube,
      color: 'text-accent'
    }
  ],
  veterinarians: [
    {
      id: 1,
      name: 'Dr. Emily Carter',
      title: 'Veterinary Surgeon',
      rating: 5,
      experience: '10 Years Experience',
      image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Dr. James Wilson',
      title: 'Pet Care Specialist',
      rating: 5,
      experience: '12 Years Experience',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Dr. Sophia Lee',
      title: 'Veterinary Dermatologist',
      rating: 5,
      experience: '8 Years Experience',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop'
    }
  ],
  wellnessPlans: {
    monthly: [
      {
        name: 'Basic Care',
        price: 19,
        features: ['1 Wellness Exam', 'Core Vaccinations', 'Basic Health Check', 'Nail Trim'],
        recommended: false
      },
      {
        name: 'Premium Care',
        price: 39,
        features: ['All Basic Care Benefits', 'Dental Cleaning', 'Blood Work', 'Priority Appointments'],
        recommended: true
      },
      {
        name: 'Complete Care',
        price: 69,
        features: ['All Premium Benefits', 'Advanced Diagnostics', 'Surgery Discounts', '24/7 Emergency'],
        recommended: false
      }
    ],
    yearly: [
      {
        name: 'Basic Care',
        price: 190,
        features: ['1 Wellness Exam', 'Core Vaccinations', 'Basic Health Check', 'Nail Trim'],
        recommended: false
      },
      {
        name: 'Premium Care',
        price: 390,
        features: ['All Basic Care Benefits', 'Dental Cleaning', 'Blood Work', 'Priority Appointments'],
        recommended: true
      },
      {
        name: 'Complete Care',
        price: 690,
        features: ['All Premium Benefits', 'Advanced Diagnostics', 'Surgery Discounts', '24/7 Emergency'],
        recommended: false
      }
    ]
  },
  products: [
    { id: 1, name: 'Premium Dog Food', price: 29.99, image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=150&auto=format&fit=crop' },
    { id: 2, name: 'Cat Litter', price: 18.99, image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=150&auto=format&fit=crop' },
    { id: 3, name: 'Pet Shampoo', price: 14.99, image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=150&auto=format&fit=crop' },
    { id: 4, name: 'Pet Toys', price: 9.99, image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=150&auto=format&fit=crop' }
  ],
  blogPosts: [
    { id: 1, title: '10 Signs Your Pet Needs a Vet Visit', date: 'May 20, 2024', image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=300&auto=format&fit=crop' },
    { id: 2, title: 'How to Keep Your Pet Happy & Healthy', date: 'May 18, 2024', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=300&auto=format&fit=crop' },
    { id: 3, title: 'Guide to Pet Nutrition Basics', date: 'May 15, 2024', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=300&auto=format&fit=crop' }
  ],
  reviews: [
    {
      id: 1,
      name: 'Sarah Johnson',
      type: 'Happy Dog Mom',
      text: 'The team at PetCare is amazing! They treated my dog like family and the care was exceptional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&auto=format&fit=crop'
    }
  ]
};
