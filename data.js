const PLAYER_DATA = [
  {
    "id": 1,
    "name": "Malen",
    "team": "AS ROMA",
    "xpv": 90,
    "pca": 220,
    "pma": 232,
    "originalIndex": 0
  },
  {
    "id": 2,
    "name": "Martinez L.",
    "team": "INTER",
    "xpv": 90,
    "pca": 187,
    "pma": 196,
    "originalIndex": 1
  },
  {
    "id": 3,
    "name": "Kolo Muani",
    "team": "JUVENTUS",
    "xpv": 70,
    "pca": 142,
    "pma": 110,
    "originalIndex": 2
  },
  {
    "id": 4,
    "name": "Ramos G.",
    "team": "AC MILAN",
    "xpv": 80,
    "pca": 142,
    "pma": 156,
    "originalIndex": 3
  },
  {
    "id": 5,
    "name": "Thuram",
    "team": "INTER",
    "xpv": 70,
    "pca": 133,
    "pma": 121,
    "originalIndex": 4
  },
  {
    "id": 6,
    "name": "Hojlund",
    "team": "NAPOLI",
    "xpv": 80,
    "pca": 108,
    "pma": 144,
    "originalIndex": 5
  },
  {
    "id": 7,
    "name": "Woltemade",
    "team": "JUVENTUS",
    "xpv": 70,
    "pca": 98,
    "pma": 58,
    "originalIndex": 6
  },
  {
    "id": 8,
    "name": "Kean",
    "team": "COMO",
    "xpv": 70,
    "pca": 93,
    "pma": 86,
    "originalIndex": 7
  },
  {
    "id": 9,
    "name": "Douvikas",
    "team": "COMO",
    "xpv": 60,
    "pca": 93,
    "pma": 72,
    "originalIndex": 8
  },
  {
    "id": 10,
    "name": "Dybala",
    "team": "AS ROMA",
    "xpv": 60,
    "pca": 92,
    "pma": 74,
    "originalIndex": 9
  },
  {
    "id": 11,
    "name": "Davis K.",
    "team": "UDINESE",
    "xpv": 80,
    "pca": 75,
    "pma": 61,
    "originalIndex": 10
  },
  {
    "id": 12,
    "name": "Berardi",
    "team": "SASSUOLO",
    "xpv": 60,
    "pca": 74,
    "pma": 38,
    "originalIndex": 11
  },
  {
    "id": 13,
    "name": "Esposito F.P.",
    "team": "INTER",
    "xpv": 60,
    "pca": 73,
    "pma": 61,
    "originalIndex": 12
  },
  {
    "id": 14,
    "name": "Scamacca",
    "team": "ATALANTA",
    "xpv": 60,
    "pca": 60,
    "pma": 59,
    "originalIndex": 13
  },
  {
    "id": 15,
    "name": "Beto",
    "team": "FIORENTINA",
    "xpv": 70,
    "pca": 49,
    "pma": 28,
    "originalIndex": 14
  },
  {
    "id": 16,
    "name": "Simeone",
    "team": "TORINO",
    "xpv": 70,
    "pca": 49,
    "pma": 47,
    "originalIndex": 15
  },
  {
    "id": 17,
    "name": "Krstovic",
    "team": "ATALANTA",
    "xpv": 60,
    "pca": 39,
    "pma": 43,
    "originalIndex": 16
  },
  {
    "id": 18,
    "name": "Pinamonti",
    "team": "LAZIO",
    "xpv": 80,
    "pca": 38,
    "pma": 36,
    "originalIndex": 17
  },
  {
    "id": 19,
    "name": "Soulé",
    "team": "AS ROMA",
    "xpv": 70,
    "pca": 33,
    "pma": 11,
    "originalIndex": 18
  },
  {
    "id": 20,
    "name": "De Ketelaere",
    "team": "ATALANTA",
    "xpv": 80,
    "pca": 31,
    "pma": 33,
    "originalIndex": 19
  },
  {
    "id": 21,
    "name": "Castro S.",
    "team": "AS ROMA",
    "xpv": 60,
    "pca": 31,
    "pma": 12,
    "originalIndex": 20
  },
  {
    "id": 22,
    "name": "Dovbyk",
    "team": "BOLOGNA",
    "xpv": 70,
    "pca": 30,
    "pma": 23,
    "originalIndex": 21
  },
  {
    "id": 23,
    "name": "Diao",
    "team": "COMO",
    "xpv": 70,
    "pca": 30,
    "pma": 14,
    "originalIndex": 22
  },
  {
    "id": 24,
    "name": "Yildiz",
    "team": "JUVENTUS",
    "xpv": 60,
    "pca": 30,
    "pma": 37,
    "originalIndex": 23
  },
  {
    "id": 25,
    "name": "Pellegrino",
    "team": "FIORENTINA",
    "xpv": 70,
    "pca": 27,
    "pma": 20,
    "originalIndex": 24
  },
  {
    "id": 26,
    "name": "Bonny",
    "team": "INTER",
    "xpv": 60,
    "pca": 26,
    "pma": 4,
    "originalIndex": 25
  },
  {
    "id": 27,
    "name": "Colombo",
    "team": "GENOA",
    "xpv": 70,
    "pca": 26,
    "pma": 21,
    "originalIndex": 26
  },
  {
    "id": 28,
    "name": "Raspadori",
    "team": "ATALANTA",
    "xpv": 60,
    "pca": 23,
    "pma": 29,
    "originalIndex": 27
  },
  {
    "id": 29,
    "name": "Santos A.",
    "team": "NAPOLI",
    "xpv": 70,
    "pca": 23,
    "pma": 22,
    "originalIndex": 28
  },
  {
    "id": 30,
    "name": "Laurienté",
    "team": "SASSUOLO",
    "xpv": 60,
    "pca": 21,
    "pma": 27,
    "originalIndex": 29
  },
  {
    "id": 31,
    "name": "Varela G.",
    "team": "MONZA",
    "xpv": 75,
    "pca": 16,
    "pma": 6,
    "originalIndex": 30
  },
  {
    "id": 32,
    "name": "Cutrone",
    "team": "MONZA",
    "xpv": 70,
    "pca": 14,
    "pma": 1,
    "originalIndex": 31
  },
  {
    "id": 33,
    "name": "Adams A.",
    "team": "VENEZIA",
    "xpv": 70,
    "pca": 11,
    "pma": 7,
    "originalIndex": 32
  },
  {
    "id": 34,
    "name": "Milik",
    "team": "JUVENTUS",
    "xpv": 50,
    "pca": 11,
    "pma": 1,
    "originalIndex": 33
  },
  {
    "id": 35,
    "name": "Zapata D.",
    "team": "TORINO",
    "xpv": 50,
    "pca": 10,
    "pma": 1,
    "originalIndex": 34
  },
  {
    "id": 36,
    "name": "Nzola",
    "team": "CAGLIARI",
    "xpv": 70,
    "pca": 10,
    "pma": 1,
    "originalIndex": 35
  },
  {
    "id": 37,
    "name": "Lucca",
    "team": "NAPOLI",
    "xpv": 60,
    "pca": 9,
    "pma": 1,
    "originalIndex": 36
  },
  {
    "id": 38,
    "name": "Raimondo",
    "team": "FROSINONE",
    "xpv": 60,
    "pca": 8,
    "pma": 4,
    "originalIndex": 37
  },
  {
    "id": 39,
    "name": "Bowie",
    "team": "SASSUOLO",
    "xpv": 60,
    "pca": 8,
    "pma": 2,
    "originalIndex": 38
  },
  {
    "id": 40,
    "name": "Adams C.",
    "team": "TORINO",
    "xpv": 60,
    "pca": 8,
    "pma": 4,
    "originalIndex": 39
  },
  {
    "id": 41,
    "name": "Touré E.",
    "team": "PARMA",
    "xpv": 80,
    "pca": 7,
    "pma": 3,
    "originalIndex": 40
  },
  {
    "id": 42,
    "name": "Ghedjemis",
    "team": "FROSINONE",
    "xpv": 70,
    "pca": 7,
    "pma": 1,
    "originalIndex": 41
  },
  {
    "id": 43,
    "name": "Esposito Se.",
    "team": "SASSUOLO",
    "xpv": 30,
    "pca": 6,
    "pma": 9,
    "originalIndex": 42
  },
  {
    "id": 44,
    "name": "Piccoli",
    "team": "BOLOGNA",
    "xpv": 60,
    "pca": 6,
    "pma": 5,
    "originalIndex": 43
  },
  {
    "id": 45,
    "name": "Gnonto",
    "team": "FIORENTINA",
    "xpv": 60,
    "pca": 6,
    "pma": 1,
    "originalIndex": 44
  },
  {
    "id": 46,
    "name": "Neres",
    "team": "NAPOLI",
    "xpv": 60,
    "pca": 6,
    "pma": 1,
    "originalIndex": 45
  },
  {
    "id": 47,
    "name": "Ekhator",
    "team": "JUVENTUS",
    "xpv": 40,
    "pca": 5,
    "pma": 1,
    "originalIndex": 46
  },
  {
    "id": 48,
    "name": "Noslin",
    "team": "LAZIO",
    "xpv": 50,
    "pca": 5,
    "pma": 1,
    "originalIndex": 47
  },
  {
    "id": 49,
    "name": "Borrelli",
    "team": "CAGLIARI",
    "xpv": 60,
    "pca": 5,
    "pma": 1,
    "originalIndex": 48
  },
  {
    "id": 50,
    "name": "Vitinha O.",
    "team": "GENOA",
    "xpv": 60,
    "pca": 5,
    "pma": 3,
    "originalIndex": 49
  },
  {
    "id": 51,
    "name": "Boga",
    "team": "JUVENTUS",
    "xpv": 50,
    "pca": 4,
    "pma": 3,
    "originalIndex": 50
  },
  {
    "id": 52,
    "name": "Mendy P.",
    "team": "CAGLIARI",
    "xpv": 60,
    "pca": 4,
    "pma": 1,
    "originalIndex": 51
  },
  {
    "id": 53,
    "name": "Geubbels",
    "team": "LECCE",
    "xpv": 60,
    "pca": 4,
    "pma": 1,
    "originalIndex": 52
  },
  {
    "id": 54,
    "name": "Yeboah J.",
    "team": "VENEZIA",
    "xpv": 60,
    "pca": 4,
    "pma": 3,
    "originalIndex": 53
  },
  {
    "id": 55,
    "name": "Kvernadze",
    "team": "FROSINONE",
    "xpv": 60,
    "pca": 3,
    "pma": 1,
    "originalIndex": 54
  },
  {
    "id": 56,
    "name": "Mota",
    "team": "MONZA",
    "xpv": 60,
    "pca": 3,
    "pma": 1,
    "originalIndex": 55
  },
  {
    "id": 57,
    "name": "Romero D.",
    "team": "PARMA",
    "xpv": 60,
    "pca": 3,
    "pma": 1,
    "originalIndex": 56
  },
  {
    "id": 58,
    "name": "Rrahmani Al.",
    "team": "VENEZIA",
    "xpv": 60,
    "pca": 3,
    "pma": 1,
    "originalIndex": 57
  },
  {
    "id": 59,
    "name": "Elphege",
    "team": "PARMA",
    "xpv": 60,
    "pca": 3,
    "pma": 1,
    "originalIndex": 58
  },
  {
    "id": 60,
    "name": "Bayo V.",
    "team": "UDINESE",
    "xpv": 50,
    "pca": 3,
    "pma": 1,
    "originalIndex": 59
  },
  {
    "id": 61,
    "name": "Stulic",
    "team": "LECCE",
    "xpv": 60,
    "pca": 3,
    "pma": 1,
    "originalIndex": 60
  },
  {
    "id": 62,
    "name": "Maldini",
    "team": "CAGLIARI",
    "xpv": 50,
    "pca": 3,
    "pma": 2,
    "originalIndex": 61
  },
  {
    "id": 63,
    "name": "Lang",
    "team": "NAPOLI",
    "xpv": 50,
    "pca": 3,
    "pma": 1,
    "originalIndex": 62
  },
  {
    "id": 64,
    "name": "Kevin Carlos",
    "team": "CAGLIARI",
    "xpv": 50,
    "pca": 3,
    "pma": 1,
    "originalIndex": 63
  },
  {
    "id": 65,
    "name": "Bobcek",
    "team": "FROSINONE",
    "xpv": 45,
    "pca": 2,
    "pma": 1,
    "originalIndex": 64
  },
  {
    "id": 66,
    "name": "Lisman",
    "team": "VENEZIA",
    "xpv": 20,
    "pca": 2,
    "pma": 3,
    "originalIndex": 65
  },
  {
    "id": 67,
    "name": "Osmajic",
    "team": "GENOA",
    "xpv": 50,
    "pca": 2,
    "pma": 1,
    "originalIndex": 66
  },
  {
    "id": 68,
    "name": "Frigan",
    "team": "PARMA",
    "xpv": 60,
    "pca": 2,
    "pma": 1,
    "originalIndex": 67
  },
  {
    "id": 69,
    "name": "Biriglea",
    "team": "FROSINONE",
    "xpv": 20,
    "pca": 2,
    "pma": 2,
    "originalIndex": 68
  },
  {
    "id": 70,
    "name": "Giovane",
    "team": "NAPOLI",
    "xpv": 30,
    "pca": 2,
    "pma": 1,
    "originalIndex": 69
  },
  {
    "id": 71,
    "name": "N'Dri",
    "team": "LECCE",
    "xpv": 60,
    "pca": 2,
    "pma": 1,
    "originalIndex": 70
  },
  {
    "id": 72,
    "name": "Camarda",
    "team": "AC MILAN",
    "xpv": 40,
    "pca": 2,
    "pma": 1,
    "originalIndex": 71
  },
  {
    "id": 73,
    "name": "Lontani",
    "team": "PARMA",
    "xpv": 45,
    "pca": 2,
    "pma": 1,
    "originalIndex": 72
  },
  {
    "id": 74,
    "name": "Gueye",
    "team": "UDINESE",
    "xpv": 40,
    "pca": 2,
    "pma": 1,
    "originalIndex": 73
  },
  {
    "id": 75,
    "name": "Ngonge",
    "team": "MONZA",
    "xpv": 50,
    "pca": 2,
    "pma": 1,
    "originalIndex": 74
  },
  {
    "id": 76,
    "name": "Sulemana K.",
    "team": "ATALANTA",
    "xpv": 40,
    "pca": 2,
    "pma": 1,
    "originalIndex": 75
  },
  {
    "id": 77,
    "name": "Havel",
    "team": "GENOA",
    "xpv": 30,
    "pca": 1,
    "pma": 1,
    "originalIndex": 76
  },
  {
    "id": 78,
    "name": "Zeballos",
    "team": "MONZA",
    "xpv": 50,
    "pca": 1,
    "pma": 1,
    "originalIndex": 77
  },
  {
    "id": 79,
    "name": "Kulenovic",
    "team": "TORINO",
    "xpv": 40,
    "pca": 1,
    "pma": 1,
    "originalIndex": 78
  },
  {
    "id": 80,
    "name": "Adorante",
    "team": "VENEZIA",
    "xpv": 40,
    "pca": 1,
    "pma": 1,
    "originalIndex": 79
  },
  {
    "id": 81,
    "name": "De Martis",
    "team": "PARMA",
    "xpv": 40,
    "pca": 1,
    "pma": 1,
    "originalIndex": 80
  },
  {
    "id": 82,
    "name": "Fatah",
    "team": "LECCE",
    "xpv": 40,
    "pca": 1,
    "pma": 1,
    "originalIndex": 81
  },
  {
    "id": 83,
    "name": "Lauberbach",
    "team": "VENEZIA",
    "xpv": 20,
    "pca": 1,
    "pma": 1,
    "originalIndex": 82
  },
  {
    "id": 84,
    "name": "Robinho J.",
    "team": "GENOA",
    "xpv": 20,
    "pca": 1,
    "pma": 1,
    "originalIndex": 83
  },
  {
    "id": 85,
    "name": "Robinson J.",
    "team": "MONZA",
    "xpv": 20,
    "pca": 1,
    "pma": 1,
    "originalIndex": 84
  },
  {
    "id": 86,
    "name": "Trepy",
    "team": "CAGLIARI",
    "xpv": 10,
    "pca": 1,
    "pma": 1,
    "originalIndex": 85
  }
];