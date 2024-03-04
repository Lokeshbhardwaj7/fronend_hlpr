// assets
import {
  IconDashboard,
  IconUser,
  IconApps,
  IconUsers,
  IconShoppingCart,
  IconClipboard,
  IconEye,
  IconList,
  IconBuildingWarehouse,
  IconBrandCampaignmonitor,
  IconClipboardCheck,
  IconClick,
  IconHierarchy2,
  IconPlus
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconPlus,
  IconUser,
  IconApps,
  IconUsers,
  IconShoppingCart,
  IconClipboard,
  IconList,
  IconBuildingWarehouse,
  IconBrandCampaignmonitor,
  IconClipboardCheck,
  IconClick,
  IconHierarchy2,
  IconEye
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const externalMenu = {
  id: 'menu',
  title: 'Jobs',
  type: 'group',
  children: [
    {
      id: 'jobs',
      title: 'Jobs List',
      type: 'item',
      url: '/jobs',
      icon: icons.IconList,
      breadcrumbs: false,
      role: [3]
    },
    {
      id: 'list-new-job',
      title: 'List New Job',
      type: 'item',
      url: '/list-new-job',
      icon: icons.IconPlus,
      breadcrumbs: false,
      role: [2]
    },
    {
      id: 'job-listing',
      title: 'View Listing',
      type: 'item',
      url: '/job-listing',
      icon: icons.IconEye,
      breadcrumbs: false,
      role: [2]
    },
  ]
};

export default externalMenu;
