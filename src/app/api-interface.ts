// definition of the interface 

export interface MyClass {
    baseUrl: string;
    getAllCountries(name: string, value: string): any;
    getSingleCountry(name:string): any;
    handleError(err);
}

export interface AllCountry {
    "name": string,
    "alpha2Code"?: string,
    "alpha3Code"?: string,
    "callingCodes": string[],
    "capital": string,
    "altSpellings"?: string[],
    "region": string,
    "subregion": string,
    "population"?: number,
    "latlng"?: number[],
    "demonym"?: string,
    "area"?: number,
    "gini"?: number,
    "timezones": string[],
    "borders"?: string[],
    "nativeName"?: string,
    "numericCode"?: string,
    "currencies": object[],
    "languages": object[],
    "translations"?: object,
    "flag": string,
    "regionalBlocs"?: object[],
    "cioc"?: string







}