import {
  ProductosImages,
  IconosFrutas,
  IconosFrutasRojas,
  Calendarios,
  CalendariosIng,
} from '../Assets/img';

import Ficha_Manzanas from '../Assets/img/Fichas_Tecnicas/apples.pdf';
import Ficha_Cherries from '../Assets/img/Fichas_Tecnicas/cherries.pdf';
import Ficha_Uvas from '../Assets/img/Fichas_Tecnicas/grapes.pdf';
import Ficha_Peras from '../Assets/img/Fichas_Tecnicas/pears.pdf';
import Ficha_Duraznos from '../Assets/img/Fichas_Tecnicas/nectarines.pdf';
import Ficha_Kiwi from '../Assets/img/Fichas_Tecnicas/kiwi.pdf';
import Ficha_Ciruelas from '../Assets/img/Fichas_Tecnicas/plums.pdf';
import Ficha_Limones from '../Assets/img/Fichas_Tecnicas/lemons.pdf';
import Ficha_Naranjas from '../Assets/img/Fichas_Tecnicas/oranges.pdf';

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

const { Calendario_manzana,
  Calendario_cereza,
  Calendario_ciruela,
  Calendario_kiwi,
  Calendario_limon,
  Calendario_naranja,
  Calendario_nectarin,
  Calendario_pera,
  Calendario_uva } = Calendarios;

const { Calendario_ing_manzana,
  Calendario_ing_cereza,
  Calendario_ing_ciruela,
  Calendario_ing_kiwi,
  Calendario_ing_limon,
  Calendario_ing_naranja,
  Calendario_ing_nectarin,
  Calendario_ing_pera,
  Calendario_ing_uva } = CalendariosIng;

export const Frutas = [
  {
    id: 'SXuEFw2pyp',
    label: 'Manzanas',
    labelEng: 'Apples',
    img: Productos_manzanas,
    icon: Icon_manzana,
    icon_rojo: Icon_manzana_rojo,
    calendario: Calendario_manzana,
    calendarioIng: Calendario_ing_manzana,
    type: null,
    ficha: Ficha_Manzanas,
    typeEng: null,
  },
  {
    id: 'd1va2pQEoh',
    label: 'Peras',
    labelEng: 'Pears',
    img: Productos_peras,
    icon: Icon_pera,
    icon_rojo: Icon_pera_rojo,
    calendario: Calendario_pera,
    calendarioIng: Calendario_ing_pera,
    type: null,
    ficha: Ficha_Peras,
    typeEng: null,
  },
  {
    id: '0bWkywdnUR',
    label: 'Uvas',
    labelEng: 'Grapes',
    img: Productos_uvas,
    icon: Icon_uva,
    icon_rojo: Icon_uva_rojo,
    calendario: Calendario_uva,
    calendarioIng: Calendario_ing_uva,
    type: null,
    ficha: Ficha_Uvas,
    typeEng: null,
  },
  {
    id: 'DAv1B1MZvY',
    label: 'Cerezas',
    labelEng: 'Cherries',
    img: Productos_cerezas,
    icon: Icon_cereza,
    icon_rojo: Icon_cereza_rojo,
    calendario: Calendario_cereza,
    calendarioIng: Calendario_ing_cereza,
    type: null,
    ficha: Ficha_Cherries,
    typeEng: null,
  },
  {
    id: 'U5dXbwrIvt',
    label: 'Kiwi',
    labelEng: 'Kiwi',
    img: Productos_kiwi,
    icon: Icon_kiwi,
    icon_rojo: Icon_kiwi_rojo,
    calendario: Calendario_kiwi,
    calendarioIng: Calendario_ing_kiwi,
    type: null,
    ficha: Ficha_Kiwi,
    typeEng: null,
  },
  {
    id: 'GeDwj03FnA',
    label: 'Limones',
    labelEng: 'Lemons',
    img: Productos_limones,
    icon: Icon_limon,
    icon_rojo: Icon_limon_rojo,
    calendario: Calendario_limon,
    calendarioIng: Calendario_ing_limon,
    type: "c??tricos",
    ficha: Ficha_Limones,
    typeEng: "citric",
  },
  {
    id: 'gA04RFJ557',
    label: 'Naranjas',
    labelEng: 'Oranges',
    img: Productos_naranjas,
    icon: Icon_naranja,
    icon_rojo: Icon_naranja_rojo,
    calendario: Calendario_naranja,
    calendarioIng: Calendario_ing_naranja,
    type: "c??tricos",
    ficha: Ficha_Naranjas,
    typeEng: "citric",
  },
  {
    id: 'WsDcn65yR1',
    label: 'Nectarines',
    labelEng: 'Nectarines',
    img: Productos_nectarines,
    icon: Icon_nectarin,
    icon_rojo: Icon_nectarin_rojo,
    calendario: Calendario_nectarin,
    calendarioIng: Calendario_ing_nectarin,
    type: "carozos",
    ficha: Ficha_Duraznos,
    typeEng: "stone fruits",
  },
  {
    id: 'HOiVmQZ2G7',
    label: 'Ciruelas',
    labelEng: 'Plums',
    img: Productos_ciruelas,
    icon: Icon_ciruela,
    icon_rojo: Icon_ciruela_rojo,
    calendario: Calendario_ciruela,
    calendarioIng: Calendario_ing_ciruela,
    type: "carozos",
    ficha: Ficha_Ciruelas,
    typeEng: "stone fruits",
  },
];
