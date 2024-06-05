function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let cityCountry1 = city_country("Lahore", "Pakistan");
let cityCountry2 = city_country("Tokyo", "Japan");
let cityCountry3 = city_country("Washington", "America");

console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
