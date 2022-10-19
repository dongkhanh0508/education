// routes
import { useTranslation } from 'react-i18next';
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);
const getIconPng = (name: string) => (
  <SvgIconStyle src={`/static/icons/sidebar/${name}.png`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  business: getIconPng('business'),
  project: getIconPng('project'),
  setting: getIconPng('settings'),
};

export default function SidebarConfig() {
  const { t } = useTranslation();

  const sidebarConfig = [
    {
      subheader: t('common.general'),
      items: [
        {
          title: 'One',
          path: PATH_DASHBOARD.general.pageOne,
          icon: ICONS.dashboard,
        },
        {
          title: 'Two',
          path: PATH_DASHBOARD.general.pageTwo,
          icon: ICONS.ecommerce,
        },
        {
          title: 'Three',
          path: PATH_DASHBOARD.general.pageThree,
          icon: ICONS.analytics,
        },
      ],
    },
    {
      subheader: t('nav.system'),
      items: [
        {
          title: t('posts.title'),
          path: PATH_DASHBOARD.posts.root,
          icon: ICONS.dashboard,
        },
      ],
    },
  ];
  return sidebarConfig;
}
