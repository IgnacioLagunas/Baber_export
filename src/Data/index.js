import {
  ProductosImages,
  IconosFrutas,
  IconosFrutasRojas,
  Calendarios,
} from '../Assets/img';

const {
  Productos_cerezas,
  Productos_ciruelas,
  Productos_kiwi,
  Productos_limones,
  Productos_manzanas,
  Productos_naranjas,
  Productos_nectarines,
  Productos_peras,
  Productos_uvas,
} = ProductosImages;

const {
  Icon_cereza,
  Icon_ciruela,
  Icon_kiwi,
  Icon_limon,
  Icon_manzana,
  Icon_naranja,
  Icon_nectarin,
  Icon_pera,
  Icon_uva,
} = IconosFrutas;

const {
  Icon_cereza_rojo,
  Icon_ciruela_rojo,
  Icon_kiwi_rojo,
  Icon_limon_rojo,
  Icon_manzana_rojo,
  Icon_naranja_rojo,
  Icon_nectarin_rojo,
  Icon_pera_rojo,
  Icon_uva_rojo,
} = IconosFrutasRojas;

const { Calendario_manzana } = Calendarios;

export const Frutas = [
  {
    id: 'SXuEFw2pyp',
    label: 'Manzanas',
    img: Productos_manzanas,
    icon: Icon_manzana,
    icon_rojo: Icon_manzana_rojo,
    calendario: Calendario_manzana,
  },
  {
    id: 'd1va2pQEoh',
    label: 'Peras',
    img: Productos_peras,
    icon: Icon_pera,
    icon_rojo: Icon_pera_rojo,
    calendario: Calendario_manzana,
  },
  {
    id: '0bWkywdnUR',
    label: 'Uvas',
    img: Productos_uvas,
    icon: Icon_uva,
    icon_rojo: Icon_uva_rojo,
    calendario: Calendario_manzana,
  },
  {
    id: 'DAv1B1MZvY',
    label: 'Cerezas',
    img: Productos_cerezas,
    icon: Icon_cereza,
    icon_rojo: Icon_cereza_rojo,
    calendario: Calendario_manzana,
  },
  {
    id: 'U5dXbwrIvt',
    label: 'Kiwi',
    img: Productos_kiwi,
    icon: Icon_kiwi,
    icon_rojo: Icon_kiwi_rojo,
    calendario: Calendario_manzana,
  },
  {
    id: 'GeDwj03FnA',
    label: 'Limones',
    img: Productos_limones,
    icon: Icon_limon,
    icon_rojo: Icon_limon_rojo,
    calendario: Calendario_manzana,
    citricos: true,
  },
  {
    id: 'gA04RFJ557',
    label: 'Naranjas',
    img: Productos_naranjas,
    icon: Icon_naranja,
    icon_rojo: Icon_naranja_rojo,
    calendario: Calendario_manzana,
    citricos: true,
  },
  {
    id: 'WsDcn65yR1',
    label: 'Nectarines',
    img: Productos_nectarines,
    icon: Icon_nectarin,
    icon_rojo: Icon_nectarin_rojo,
    calendario: Calendario_manzana,
    carozos: true,
  },
  {
    id: 'HOiVmQZ2G7',
    label: 'Ciruelas',
    img: Productos_ciruelas,
    icon: Icon_ciruela,
    icon_rojo: Icon_ciruela_rojo,
    calendario: Calendario_manzana,
    carozos: true,
  },
];
