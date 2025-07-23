import agrispray from '../assets/agri.png'
import customdrone from '../assets/Drone-mapping.jpg'
import industry from '../assets/industry.png'
import construct from '../assets/const.png'
import telecom from '../assets/telecom.png'
export const servicesData = [
  {
    id: 'drone-sales',
    title: 'Drone Sales & Services',
    icon: 'fas fa-shopping-cart',
    description:
      'We offer the latest drone models from top manufacturers along with comprehensive maintenance, repair services, and genuine spare parts.',
    gradient: 'from-blue-900 to-blue-700',
    image:
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: [
      {
        icon: 'fas fa-shopping-cart',
        title: 'Wide Selection',
        description:
          'We carry the latest drone models from top manufacturers like DJI, Parrot, Autel Robotics, and more.',
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a9d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        icon: 'fas fa-tools',
        title: 'Maintenance & Repair',
        description:
          'Our certified technicians provide comprehensive maintenance and repair services with genuine spare parts.',
        image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        icon: 'fas fa-box-open',
        title: 'Genuine Spare Parts',
        description:
          'We stock authentic spare parts including propellers, batteries, cameras, and gimbals for all major drone brands.',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    specs: [
      {
        icon: 'fas fa-seedling',
        title: 'Agricultural Drones',
        description: 'Specialized drones for precision farming with crop spraying and monitoring capabilities',
        image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        subFeatures: [
          'Multi-spectral cameras for crop health analysis',
          'Precision spraying systems',
          'Large payload capacity for fertilizers',
          'Automated flight planning for field coverage'
        ]
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Surveillance Drones',
        description: 'Advanced security drones with thermal imaging and long flight times',
        image: 'https://images.unsplash.com/photo-1606220945778-b6820e23cd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        subFeatures: [
          'High-resolution zoom cameras',
          'Thermal imaging for night operations',
          'Encrypted data transmission',
          'Automatic tracking of moving objects'
        ]
      },
      {
        icon: 'fas fa-camera',
        title: 'Photography Drones',
        description: 'High-resolution cameras with gimbal stabilization for professional imaging',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Mapping Drones',
        description: 'Equipped with advanced sensors for surveying and 3D mapping',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        icon: 'fas fa-industry',
        title: 'Industrial Drones',
        description: 'Rugged drones for inspection and monitoring in challenging environments',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        icon: 'fas fa-cogs',
        title: 'Drone Accessories',
        description: 'Complete range of accessories including batteries, cases, and controllers',
        image: 'https://images.unsplash.com/photo-1598124146163-36819847286d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ]
  },
 {
  id: 'agri-spraying',
  title: 'Agricultural Drone Spraying Services',
  icon: 'fas fa-leaf',
  description:
    'We deliver precision agricultural spraying using GPS-guided drones to reduce chemical usage and maximize crop yield.',
  gradient: 'from-blue-900 to-blue-700',
  image:
    agrispray,
  features: [
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Precision Application',
      description:
        'Our drones use advanced GPS and sensor technology to apply chemicals with centimeter-level accuracy, ensuring even coverage and minimizing waste.',
      image: 'https://cdn-icons-png.flaticon.com/512/709/709592.png'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Reduced Chemical Usage',
      description:
        'By targeting only the areas that need treatment and using ultra-low volume (ULV) spraying technology, we significantly reduce chemical usage while maintaining effectiveness.',
      image: 'https://cdn-icons-png.flaticon.com/512/2907/2907393.png'
    }
  ],
  timeline: [
    {
      step: 1,
      title: 'Field Assessment',
      description: 'Our team conducts a thorough assessment of your fields using multispectral imaging to identify problem areas and determine optimal treatment plans.'
    },
    {
      step: 2,
      title: 'Flight Planning',
      description: 'We create customized flight paths that ensure complete coverage while avoiding obstacles and no-spray zones.'
    },
    {
      step: 3,
      title: 'Precision Spraying',
      description: 'Our drones execute the treatment plan with millimeter precision, adjusting spray volume and droplet size based on real-time conditions.'
    },
    {
      step: 4,
      title: 'Post-Treatment Analysis',
      description: 'After treatment, we provide detailed reports with before-and-after comparisons and recommendations for future applications.'
    }
  ],
  benefits: [
    {
      icon: 'fas fa-rupee-sign',
      title: 'Cost Effective',
      description: 'Reduce chemical costs by up to 60% and labor costs by up to 80% compared to traditional methods.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Time Saving',
      description: 'Cover up to 60 acres per day with a single drone, significantly faster than manual spraying.'
    },
    {
      icon: 'fas fa-tree',
      title: 'Environmental',
      description: 'Minimize chemical runoff and environmental impact with targeted application.'
    },
    {
      icon: 'fas fa-user-shield',
      title: 'Safety',
      description: 'Eliminate exposure risks for workers by removing the need for manual spraying.'
    }
  ],
  cta: {
    title: 'Transform Your Farming Operations',
    description: 'Contact us today to schedule a consultation and see how drone spraying can benefit your farm.',
    buttonText: 'Request Free Consultation'
  }
}
,
{
  id: 'custom-solutions',
  title: 'Custom Drone Solutions',
  icon: 'fas fa-cogs',
  description:
    'Our custom drone solutions are tailored to meet the unique challenges of your industry. Whether you need specialized sensors, custom payloads, or unique flight capabilities, our engineering team can design and implement a solution that fits your exact requirements.',
  gradient: 'from-blue-900 to-blue-700',
  image:
    customdrone,
  features: [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovative Design',
      description:
        'We approach each project with fresh eyes, developing innovative solutions that leverage the latest drone technology to solve your specific challenges.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'End-to-End Service',
      description:
        'From initial concept to final implementation, we handle every aspect of your custom drone solution, including regulatory compliance and operator training.'
    }
  ],
  industries: [
    {
      icon: 'fas fa-industry',
      title: 'Industrial',
      description: 'Inspection, monitoring, and maintenance solutions for factories, plants, and infrastructure.'
    },
    {
      icon: 'fas fa-tractor',
      title: 'Agriculture',
      description: 'Custom solutions for precision farming, crop monitoring, and livestock management.'
    },
    {
      icon: 'fas fa-building',
      title: 'Construction',
      description: 'Site surveying, progress monitoring, and volumetric measurements.'
    },
    {
      icon: 'fas fa-broadcast-tower',
      title: 'Telecom',
      description: 'Tower inspections and maintenance with specialized payloads.'
    }
  ],
  process: [
    {
      title: 'Requirement Analysis',
      description: 'We start by thoroughly understanding your operational challenges and desired outcomes.'
    },
    {
      title: 'Solution Design',
      description: 'Our engineers design a tailored solution, selecting the right platform, sensors, and software.'
    },
    {
      title: 'Prototype Development',
      description: 'We build and test a prototype to validate the solution before full implementation.'
    },
    {
      title: 'Deployment & Training',
      description: 'We deploy the solution and provide comprehensive training for your team.'
    }
  ],
  gallery: [
    industry,
    agrispray,
    construct,
    telecom
  ],
  cta: {
    title: 'Need a Custom Drone Solution?',
    description: 'Our team is ready to discuss your unique requirements and develop a tailored solution.',
    buttonText: 'Schedule Consultation'
  }
}

];
