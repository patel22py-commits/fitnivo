import { Author } from '../types';

export const AUTHORS: Record<string, Author> = {
  sarah: {
    name: 'Sarah Jenkins',
    role: 'Senior Health & Nutrition Editor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    bio: 'Sarah is an American wellness journalist and certified health coach specializing in functional nutrition, habit architecture, and women’s hormonal literacy.'
  },
  elena: {
    name: 'Elena Rostova',
    role: 'Fitness & Movement Specialist',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    bio: 'Elena is a personal trainer and mobility coach focused on sustainable, joint-friendly strength training routines for busy women.'
  },
  maya: {
    name: 'Maya Lin',
    role: 'Skincare & Clean Beauty Writer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    bio: 'Maya explores holistic dermatological care, ingredient safety, barrier repair, and science-backed daily skincare rituals.'
  },
  charlotte: {
    name: 'Charlotte Brooks',
    role: 'Mindfulness & Lifestyle Lead',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    bio: 'Charlotte writes on circadian sleep architecture, work-life boundaries, nervous system regulation, and modern stress resilience.'
  }
};
