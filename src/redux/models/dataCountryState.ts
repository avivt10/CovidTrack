import { IDataCountryModel } from "./dataCountryModel";

export interface IDataCountryStateModel {
  dataCountry: IDataCountryModel;
  currentCountry: string;
}