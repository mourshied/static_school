export interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
  }
  
   const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'About Us',
      children: [
        {
          label: 'Principal\'s Message',
          href: '/about/principals-message',
        },
        {
          label: 'Mission Statement',
          href: '/about/mission-statement',
        },
        {
          label: 'Staff',
          href: '/about/staff',
        },
        {
          label: 'History',
          href: '/about/history',
        },
      ],
    },
    {
      label: 'Academics',
      children: [
        {
          label: 'Curriculum',
          href: '/academics/curriculum',
        },
        {
          label: 'Departments',
          href: '/academics/departments',
        },
        {
          label: 'Library',
          href: '/academics/library',
        },
        {
          label: 'Counseling',
          href: '/academics/counseling',
        },
      ],
    },
    {
      label: 'Students',
      children: [
        {
          label: 'Portal',
          href: '/students/life',
        },
        {
          label: 'Clubs & Activities',
          href: '/students/clubs',
        },
        {
          label: 'Student Government',
          href: '/students/government',
        },
        {
          label: 'Honors & Recognition',
          href: '/students/honors',
        },
      ],
    },
    {
      label: 'Parents',
      children: [
        {
          label: 'PTA',
          href: '/parents/pta',
        },
        {
          label: 'Volunteer Opportunities',
          href: '/parents/volunteer',
        },
        {
          label: 'Parent Resources',
          href: '/parents/resources',
        },
        {
          label: 'FAQs',
          href: '/parents/faqs',
        },
      ],
    },
    {
      label: 'Portal',
      href: '/portal',
    },
  ];

   
  export default NAV_ITEMS