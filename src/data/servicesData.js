export const servicesData = [
  {
    id: 'drone-sales',
    title: 'Drone Sales & Services',
    icon: 'fas fa-shopping-cart',
    description:
      'We offer the latest drone models from top manufacturers along with comprehensive maintenance, repair services, and genuine spare parts.',
    gradient: 'from-blue-900 to-red-700',
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
    gradient: 'from-green-700 to-yellow-600',
    image:
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: [
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Precision Application',
        description:
          'Our drones use advanced GPS and sensor technology to apply chemicals with centimeter-level accuracy.'
      },
      {
        icon: 'fas fa-leaf',
        title: 'Reduced Chemical Usage',
        description:
          'By targeting only the areas that need treatment, we significantly reduce chemical usage.'
      }
    ],
    timeline: [
      {
        step: 1,
        title: 'Field Assessment',
        description: 'Our team conducts a thorough assessment of your fields'
      },
      {
        step: 2,
        title: 'Flight Planning',
        description: 'We create customized flight paths'
      },
      {
        step: 3,
        title: 'Precision Spraying',
        description: 'Our drones execute the treatment plan with precision'
      },
      {
        step: 4,
        title: 'Post-Treatment Analysis',
        description:
          'We provide detailed reports with recommendations'
      }
    ]
  },
  {
    id: 'custom-solutions',
    title: 'Custom Drone Solutions',
    icon: 'fas fa-cogs',
    description:
      'We provide innovative, end-to-end drone solutions tailored to the unique needs of your industry.',
    gradient: 'from-purple-800 to-indigo-700',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: [
      {
        icon: 'fas fa-lightbulb',
        title: 'Innovative Design',
        description:
          'We approach each project with fresh eyes, developing innovative solutions.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'End-to-End Service',
        description:
          'From concept to implementation, we handle every aspect.'
      }
    ],
    industries: [
      {
        icon: 'fas fa-industry',
        title: 'Industrial',
        description: 'Inspection, monitoring, and maintenance solutions'
      },
      {
        icon: 'fas fa-tractor',
        title: 'Agriculture',
        description: 'Custom solutions for precision farming'
      },
      {
        icon: 'fas fa-building',
        title: 'Construction',
        description: 'Site surveying and progress monitoring'
      },
      {
        icon: 'fas fa-broadcast-tower',
        title: 'Telecom',
        description: 'Tower inspections with specialized payloads'
      }
    ]
  }
];
