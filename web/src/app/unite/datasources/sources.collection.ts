// import { DikshaDataSource } from './diksha/diksha.datasource';
// import { CountriesDataSource } from './countries/countries.datasource';
// import { SunbirdDataSource } from './sunbird/sunbird.datasource';
// import { TJVersioncheckerDataSource } from './tj-versionchecker/tj-versionchecker.datasource';

// export const dataSources = {
//     'countries' :  CountriesDataSource,
//     'sunbird'   : SunbirdDataSource,
//     'tjversionchecker'   : TJVersioncheckerDataSource,
//     'Diksha': DikshaDataSource
// }

import { DikshaDataSource } from './diksha/diksha.datasource';
import { MenusDataSource } from './menus/menus.datasource';

export const dataSources = {
    'Diksha': DikshaDataSource /* Default selected datasource */,
    'Menus' : MenusDataSource
};
