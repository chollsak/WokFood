import React from 'react'
import { Playfair_Display } from 'next/font/google'; // Import Playfair Display from next/font
import { Box,Typography } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you need
    style: ['normal'], // Specify the styles you need
});

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

const countryToCode = (countryName: string) => {
    const countryCodes: { [key: string]: string } = {
        Afghanistan: "AF",
        Albania: "AL",
        Algeria: "DZ",
        Andorra: "AD",
        Angola: "AO",
        Argentina: "AR",
        Armenia: "AM",
        Australia: "AU",
        Austria: "AT",
        Azerbaijan: "AZ",
        Bahamas: "BS",
        Bahrain: "BH",
        Bangladesh: "BD",
        Barbados: "BB",
        Belarus: "BY",
        Belgium: "BE",
        Belize: "BZ",
        Benin: "BJ",
        Bhutan: "BT",
        Bolivia: "BO",
        Bosnia_and_Herzegovina: "BA",
        Botswana: "BW",
        Brazil: "BR",
        Brunei: "BN",
        Bulgaria: "BG",
        Burkina_Faso: "BF",
        Burundi: "BI",
        Cambodia: "KH",
        Cameroon: "CM",
        Canada: "CA",
        Cape_Verde: "CV",
        Central_African_Republic: "CF",
        Chad: "TD",
        Chile: "CL",
        China: "CN",
        Colombia: "CO",
        Comoros: "KM",
        Congo: "CG",
        Costa_Rica: "CR",
        Croatia: "HR",
        Cuba: "CU",
        Cyprus: "CY",
        Czech_Republic: "CZ",
        Denmark: "DK",
        Djibouti: "DJ",
        Dominica: "DM",
        Dominican_Republic: "DO",
        East_Timor: "TL",
        Ecuador: "EC",
        Egypt: "EG",
        El_Salvador: "SV",
        Equatorial_Guinea: "GQ",
        Eritrea: "ER",
        Estonia: "EE",
        Eswatini: "SZ",
        Ethiopia: "ET",
        Fiji: "FJ",
        Finland: "FI",
        France: "FR",
        Gabon: "GA",
        Gambia: "GM",
        Georgia: "GE",
        Germany: "DE",
        Ghana: "GH",
        Greece: "GR",
        Grenada: "GD",
        Guatemala: "GT",
        Guinea: "GN",
        Guinea_Bissau: "GW",
        Guyana: "GY",
        Haiti: "HT",
        Honduras: "HN",
        Hungary: "HU",
        Iceland: "IS",
        India: "IN",
        Indonesia: "ID",
        Iran: "IR",
        Iraq: "IQ",
        Ireland: "IE",
        Israel: "IL",
        Italy: "IT",
        Jamaica: "JM",
        Japan: "JP",
        Jordan: "JO",
        Kazakhstan: "KZ",
        Kenya: "KE",
        Kiribati: "KI",
        Korea_North: "KP",
        Korea_South: "KR",
        Kuwait: "KW",
        Kyrgyzstan: "KG",
        Laos: "LA",
        Latvia: "LV",
        Lebanon: "LB",
        Lesotho: "LS",
        Liberia: "LR",
        Libya: "LY",
        Liechtenstein: "LI",
        Lithuania: "LT",
        Luxembourg: "LU",
        Madagascar: "MG",
        Malawi: "MW",
        Malaysia: "MY",
        Maldives: "MV",
        Mali: "ML",
        Malta: "MT",
        Mauritania: "MR",
        Mauritius: "MU",
        Mexico: "MX",
        Moldova: "MD",
        Monaco: "MC",
        Mongolia: "MN",
        Montenegro: "ME",
        Morocco: "MA",
        Mozambique: "MZ",
        Myanmar: "MM",
        Namibia: "NA",
        Nauru: "NR",
        Nepal: "NP",
        Netherlands: "NL",
        New_Zealand: "NZ",
        Nicaragua: "NI",
        Niger: "NE",
        Nigeria: "NG",
        North_Macedonia: "MK",
        Norway: "NO",
        Oman: "OM",
        Pakistan: "PK",
        Palau: "PW",
        Panama: "PA",
        Papua_New_Guinea: "PG",
        Paraguay: "PY",
        Peru: "PE",
        Philippines: "PH",
        Poland: "PL",
        Portugal: "PT",
        Qatar: "QA",
        Romania: "RO",
        Russia: "RU",
        Rwanda: "RW",
        Saint_Kitts_and_Nevis: "KN",
        Saint_Lucia: "LC",
        Saint_Vincent_and_the_Grenadines: "VC",
        Samoa: "WS",
        San_Marino: "SM",
        Sao_Tome_and_Principe: "ST",
        Saudi_Arabia: "SA",
        Senegal: "SN",
        Serbia: "RS",
        Seychelles: "SC",
        Sierra_Leone: "SL",
        Singapore: "SG",
        Slovakia: "SK",
        Slovenia: "SI",
        Solomon_Islands: "SB",
        Somalia: "SO",
        South_Africa: "ZA",
        Spain: "ES",
        Sri_Lanka: "LK",
        Sudan: "SD",
        Suriname: "SR",
        Sweden: "SE",
        Switzerland: "CH",
        Syria: "SY",
        Taiwan: "TW",
        Tajikistan: "TJ",
        Tanzania: "TZ",
        Thailand: "TH",
        Togo: "TG",
        Tonga: "TO",
        Trinidad_and_Tobago: "TT",
        Tunisia: "TN",
        Turkey: "TR",
        Turkmenistan: "TM",
        Tuvalu: "TV",
        Uganda: "UG",
        Ukraine: "UA",
        United_Arab_Emirates: "AE",
        United_Kingdom: "GB",
        United_States: "US",
        Uruguay: "UY",
        Uzbekistan: "UZ",
        Vanuatu: "VU",
        Vatican_City: "VA",
        Venezuela: "VE",
        Vietnam: "VN",
        Yemen: "YE",
        Zambia: "ZM",
        Zimbabwe: "ZW"
      };
      
    
    return countryCodes[countryName] || ''; // Return an empty string if the country is not in the map
  };

type CardProps = {
    image: string
    name: string
    country: string
    description: string
}

export default function CardFood(props: CardProps) {
    const countryCode = countryToCode(props.country); 

    return (
        <Link href={`/food-detials/${encodeURIComponent(props.name)}`} passHref>
        <Box className="p-2 cursor-pointer">
            <Box component={'img'} src={props.image} sx={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <div className='mt-4'>
                <Typography variant='h5' sx={{
                    fontFamily: playfairDisplay.style.fontFamily,
                    fontWeight: '800',
                    color: 'black',
                }}>{props.name}</Typography>
                <div className='flex items-start gap-2 mb-4'>
                    <ReactCountryFlag countryCode={countryCode} style={{ marginTop: '1px' }} svg />
                    <span className='text-sm text-gray-500'>{props.country.toUpperCase()}</span>
                </div>
                <p className='text-sm text-gray-500'>{truncateText(props.description, 80)}</p>
            </div>
        </Box>
        </Link>
    )
}
