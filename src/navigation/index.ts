
// ** Type 
export interface INavigatioType {
  title: string;
  link: string;
  disabled?: boolean;
  color?: string | string[];
  children?: INavigatioType[];
}

// ** pages 

const navigation = (): INavigatioType[] => {
  return [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'LeafFlet',
      link: '/leaf-flet',
    },
    {
      title: 'ReactMapGl',
      link: '/react-map-gl',
    }
  ];
}

export default navigation;
