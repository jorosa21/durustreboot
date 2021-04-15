import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/layout/dashboard',
  },
  {
    label: 'Administration',
    isTitle: true
  },
  {
    label: 'Company Setup',
    icon: 'sliders',
    subItems: [
      {
        label: 'Company',
        link: '/layout/administration/company',
      },
      {
        label: 'Branch',
        link: '/layout/administration/branch-view'
      },
      {
        label: 'Module Access',
        link: '/layout/administration/module-access',
      },
      {
        label: 'Approval Process',
        link: '/layout/administration/approval-process',
      },
      {
        label: 'Dropdown Settings',
        link: '/layout/administration/dropdown-settings'
      },
      {
        label: 'Series Code',
        link: '/layout/administration/series-code'
      },
      {
        label: 'Shift Codes',
        link: '/layout/administration/shiftcodes-view',
      },
      {
        label: 'Leaves',
        link: '/layout/administration/leave-view',
      },
      {
        label: 'Holidays',
        link: '/layout/administration/holiday-view',
      },
      {
        label: 'Allowance/Deduction',
        link: '/layout/administration/allowance-deduction-view',
      },
      {
        label: 'Payroll Rates',
        link: '/layout/administration/payroll-rates',
      },
      {
        label: 'Contribution Table',
        link: '/layout/administration/contributions',
      },
    ]
  },
  {
    label: 'Employee',
    isTitle: true
  },
  {
    label: 'Employee Setup',
    icon: 'users',
    subItems: [
      {
        label: 'Employee',
        link: '#',
      },
      {
        label: 'Category',
        link: '#'
      },
      {
        label: 'Movement',
        link: '#'
      },
    ]
  },
  {
    label: 'Timekeeping',
    isTitle: true
  },
  {
    label: 'Attendance Log',
    icon: 'clock',
  },
  {
    label: 'Overtime Render',
    icon: 'watch',
  },
  {
    label: 'Employee Attendance',
    icon: 'book',
  },
  {
    label: 'Employee Schedule',
    icon: 'clipboard',
  },
  {
    label: 'Payroll',
    isTitle: true
  },
  {
    label: 'Payroll Setup',
    icon: 'book-open',
    subItems: [
      {
        label: 'Recurring',
        link: '#'
      },
      {
        label: 'One Time',
        link: '#'
      },
    ]
  },
  {
    label: 'Loans',
    icon: 'credit-card',
  },
  {
    label: 'Government Contribution',
    icon: 'pocket',
  },
  {
    label: 'Filing',
    isTitle: true
  },
  {
    label: 'Change Schedule',
    icon: 'calendar',
  },
  {
    label: 'Change Log',
    icon: 'clock',
  },
  {
    label: 'Leave',
    icon: 'feather',
  },
  {
    label: 'Official Business',
    icon: 'briefcase',
  },
  {
    label: 'Overtime',
    icon: 'watch',
  },
  {
    label: 'Offset',
    icon: 'sunrise',
  },
  {
    label: 'Management',
    isTitle: true
  },
  {
    label: 'Approval',
    icon: 'user-check',
  },
  {
    label: 'Schedule',
    icon: 'columns',
  },
  {
    label: 'Attendance',
    icon: 'file-text',
  },
];
