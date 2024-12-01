export const subjects = [
    {
      "lv": "L",
      "sc": "L",
      "ss": "E"
    },
    {
      "lv": "L",
      "sc": "L",
      "ss": "G"
    },
    {
      "lv": "L",
      "sc": "L",
      "ss": "H"
    },
    {
      "lv": "L",
      "sc": "L",
      "ss": "M"
    },
    {
      "lv": "M",
      "sc": "G",
      "ss": "M"
    },
    {
      "lv": "M",
      "sc": "G",
      "ss": "C"
    },
    {
      "lv": "M",
      "sc": "G",
      "ss": "E"
    },
    {
      "lv": "M",
      "sc": "G",
      "ss": "G"
    },
    {
      "lv": "M",
      "sc": "G",
      "ss": "H"
    },
    {
      "lv": "M",
      "sc": "G",
      "ss": "B"
    },
    {
      "lv": "M",
      "sc": "G",
      "ss": "P"
    },
    {
      "lv": "U",
      "sc": "B",
      "ss": "BM"
    },
    {
      "lv": "U",
      "sc": "A",
      "ss": "C"
    },
    {
      "lv": "U",
      "sc": "I",
      "ss": "Ch"
    },
    {
      "lv": "U",
      "sc": "I",
      "ss": "Gs"
    },
    {
      "lv": "U",
      "sc": "A",
      "ss": "M"
    },
    {
      "lv": "U",
      "sc": "A",
      "ss": "P"
    },
    {
      "lv": "U",
      "sc": "I",
      "ss": "Spis"
    },
    {
      "lv": "U",
      "sc": "A",
      "ss": "B"
    },
    {
      "lv": "U",
      "sc": "A",
      "ss": "Eli"
    },
    {
      "lv": "U",
      "sc": "B",
      "ss": "SpS"
    },
    {
      "lv": "U",
      "sc": "A",
      "ss": "F"
    },
    {
      "lv": "U",
      "sc": "A",
      "ss": "L"
    }
   ];

   export const base = [
        {A:123,B:115},
        {A:101,B:97},
        {A:82,B:81}
   ]

   export const baseName = ['overall','vocab','maths','skills'];

   export const pre = [
        {L:{A:8.2,B:8.0},G:{A:8.3,B:8.1},A:{A:122,B:118},I:{A:6.2,B:6.1},B:{A:120,B:117}},
        {L:{A:6.8,B:6.7},G:{A:7.1,B:6.7},A:{A:97,B:93},I:{A:5.7,B:5.7},B:{A:93,B:95}},
        {L:{A:5.1,B:4.9},G:{A:5.1,B:4.9},A:{A:81,B:83},I:{A:4.8,B:4.9},B:{A:81,B:81}}
        
        
   ];

   export const random=(min:number, max:number) : number=> {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }