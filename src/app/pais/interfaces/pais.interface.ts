export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  { [key: string]: Currency };
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    cioc?:        string;
    borders?:     string[];
    gini?:        { [key: string]: number };
    fifa?:        string;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng:  EngClass;
    fra?: EngClass;
}

export interface EngClass {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Languages {
    nor?: string;
    fra?: Fra;
    sag?: string;
    ara?: Ara;
    eng?: EngEnum;
    smo?: string;
    por?: string;
    zho?: string;
    aym?: string;
    grn?: string;
    que?: string;
    spa?: string;
    cat?: string;
    mlt?: string;
    div?: string;
    vie?: string;
    deu?: string;
    sqi?: string;
    som?: string;
    tvl?: string;
    arc?: string;
    ckb?: string;
    swe?: string;
    zdj?: string;
    msa?: string;
    nep?: string;
    nya?: string;
    lao?: string;
    pau?: string;
    sin?: string;
    tam?: string;
    mah?: string;
    amh?: string;
    ita?: string;
    ber?: string;
    fin?: string;
    mri?: string;
    nzs?: string;
    cal?: string;
    cha?: string;
}

export enum Ara {
    Arabic = "Arabic",
}

export enum EngEnum {
    English = "English",
}

export enum Fra {
    French = "French",
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
