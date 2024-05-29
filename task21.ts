interface Mountain {
    Mname:string;
    height: number;
    location: string;
}

let mountains: Mountain[] = [
    {
        Mname: "Mount Everest",
        height: 8848,
        location:"Nepal/China"
    },
    {
        Mname: "K2",
        height: 8611,
        location: "Pakistan/China"
    }
]

console.log(mountains);